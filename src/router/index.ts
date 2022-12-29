import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ConvertPage from "../pages/ConvertPage.vue";
import HomePage from "../pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/convert",
    name: "convert",
    component: ConvertPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
