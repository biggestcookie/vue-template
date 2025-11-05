import type { RouteRecordRaw } from "vue-router";
import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../pages/home.page.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/:pathMatch(.*)*", redirect: "/home" },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior: (to) =>
    to.hash
      ? { el: to.hash, behavior: "smooth" }
      : { top: 0, left: 0, behavior: "smooth" },
});

export { router, routes };
