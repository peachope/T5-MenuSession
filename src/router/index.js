import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
// set dia chi cac duong link o day ne
const routes = [
  {
    path: "/print-edition",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Manager",
    component: () => import("../views/Manager.vue"),
  },
  {
    path: "/digital-edition",
    name: "DigitalEdition",
    component: () => import("../views/DigitalEdition.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
