import Metronome from "./Metronome.vue";
import Settings from "./Settings.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/metronome",
    },
    {
      path: "/metronome",
      name: "Metronome",
      component: Metronome,
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
    },
  ],
});

export default router;
