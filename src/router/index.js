import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/ContentWriter.vue"),
        },
        {
            path: "/accounts",
            name: "accounts",
            component: () => import("../views/AccountManage.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue"),
        },
    ],
});

export default router;
