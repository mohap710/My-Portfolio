import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { stackLabels } from "@/data/skills.js";

// Search + role + stack filtering for a project list, synced to the URL
// (?q=…&role=…&stack=vuejs,nodejs) so filtered views can be shared and survive a refresh.
// The prerendered HTML shows the full list; the URL query is applied after hydration.
export function useProjectFilters(projects) {
  const route = useRoute();
  const router = useRouter();

  const query = ref("");
  const role = ref("all");
  const stacks = ref([]);

  // fixed display order; any role not listed goes last
  const ROLE_ORDER = ["Full-stack Developer", "Frontend Developer", "Back-end Developer"];
  const rank = (r) => (ROLE_ORDER.includes(r) ? ROLE_ORDER.indexOf(r) : ROLE_ORDER.length);
  const roles = computed(() => [...new Set(projects.value.map((p) => p.role))].sort((a, b) => rank(a) - rank(b)));

  const stackOptions = computed(() => {
    const counts = new Map();
    for (const p of projects.value) for (const s of p.stack) counts.set(s, (counts.get(s) ?? 0) + 1);
    return [...counts]
      .map(([id, count]) => ({ id, count, label: stackLabels[id] ?? id }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  });

  const haystack = (p) =>
    [p.title, p.summary, p.role, ...p.stack.map((s) => stackLabels[s] ?? s)].join(" ").toLowerCase();

  const results = computed(() => {
    const q = query.value.trim().toLowerCase();
    return projects.value
      .filter(
      (p) =>
        (role.value === "all" || p.role === role.value) &&
        (!stacks.value.length || p.stack.some((s) => stacks.value.includes(s))) &&
        (!q || q.split(/\s+/).every((word) => haystack(p).includes(word))),
      )
      .sort((a, b) => rank(a.role) - rank(b.role) || a.order - b.order);
  });

  const activeCount = computed(
    () => (query.value.trim() ? 1 : 0) + (role.value !== "all" ? 1 : 0) + stacks.value.length,
  );

  const toggleStack = (id) => {
    stacks.value = stacks.value.includes(id) ? stacks.value.filter((s) => s !== id) : [...stacks.value, id];
  };
  const reset = () => {
    query.value = "";
    role.value = "all";
    stacks.value = [];
  };

  // URL -> state (after hydration), then state -> URL
  onMounted(() => {
    const { q, role: r, stack } = route.query;
    if (typeof q === "string") query.value = q;
    if (typeof r === "string" && roles.value.includes(r)) role.value = r;
    if (typeof stack === "string") stacks.value = stack.split(",").filter((s) => stackLabels[s] || s);
    watch([query, role, stacks], () => {
      const next = {};
      if (query.value.trim()) next.q = query.value.trim();
      if (role.value !== "all") next.role = role.value;
      if (stacks.value.length) next.stack = stacks.value.join(",");
      router.replace({ query: next });
    });
  });

  return { query, role, stacks, roles, stackOptions, results, activeCount, toggleStack, reset };
}
