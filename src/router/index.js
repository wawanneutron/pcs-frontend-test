//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const routes = [
  {
    // 404 notfound custom compoenent
    path: "/:pathMatch(.*)*",
    component: () => import("@/components/404.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/components/Test.vue"),
  },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // <-- routes
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
