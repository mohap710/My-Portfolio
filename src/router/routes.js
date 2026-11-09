import DefaultLayout from "@/layouts/DefaultLayout.vue";

export const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", name: "home", component: () => import("@/views/HomeView.vue") },
      { path: "projects", name: "projects", component: () => import("@/views/ProjectsView.vue") },
      { path: "projects/:slug", name: "project", component: () => import("@/views/ProjectDetailView.vue"), props: true },
      { path: "contact", name: "contact", component: () => import("@/views/ContactView.vue") },
      // prerendered to dist/404/index.html, copied to dist/404.html for GitHub Pages
      { path: "404", name: "not-found", component: () => import("@/views/NotFoundView.vue") },
      { path: ":pathMatch(.*)*", component: () => import("@/views/NotFoundView.vue") },
    ],
  },
];
