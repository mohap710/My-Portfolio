export const site = {
  name: "Mohab Alhassan",
  role: "Full-stack Developer",
  url: "https://mohap710.github.io/My-Portfolio/", // absolute site URL, used for share previews
  tagline: "Vue, Node & Laravel. I build web products that feel as good as they run.",
  email: "mohab.m.salman@gmail.com",
  cvUrl: `${import.meta.env.BASE_URL}cv.pdf`,
  available: true,
  socials: [
    { label: "GitHub", icon: "github", href: "https://github.com/mohap710" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/mohab-mohammed-salman/" },
    { label: "Email", icon: "mail", href: "mailto:mohab.m.salman@gmail.com" },
  ],
  nav: [
    { label: "Work", to: "/projects" },
    { label: "Services", to: { path: "/", hash: "#services" } },
    { label: "About", to: { path: "/", hash: "#about" } },
    { label: "Experience", to: { path: "/", hash: "#experience" } },
    { label: "Reviews", to: { path: "/", hash: "#reviews" } },
  ],
  hero: {
    // rotating two-line headline: the role, then two action phrases
    headlines: [
      ["Full-stack", "Developer"],
      ["Shipping", "Ideas"],
      ["Crafting", "Interfaces"],
    ],
    stat: { value: "7+", label: "client projects shipped" },
  },
  marquee: ["Frontend", "Back-end", "APIs", "Vue", "Node", "Laravel"],
  about: {
    title: "Code with",
    accent: "care",
    bio: "I'm Mohab, a full-stack developer who likes turning rough ideas into products people enjoy using. I work across the stack, from Vue interfaces to Node and Laravel APIs, and I care about the details that make sites feel fast and finished.",
    tags: ["Vue ✺ Node", "Open to work"],
    stats: [
      { value: "5+", label: "years experience" },
      { value: "7+", label: "projects shipped" },
      { value: "120+", label: "APIs designed" },
    ],
  },
};
