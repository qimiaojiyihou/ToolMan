import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/edit",
    },
    {
      path: "/edit",
      name: "编辑",
      component: () => import("./pages/edit.vue"),
    },
    {
      path: "/preview",
      name: "预览",
      component: () => import("./pages/preview.vue"),
    },
  ],
})

export default router