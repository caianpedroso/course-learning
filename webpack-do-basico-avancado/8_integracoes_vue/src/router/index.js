import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router;