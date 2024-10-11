import { createRouter, createWebHistory } from "vue-router";
import defineAbilityFor from "./../permission/abilities";

// User data samples (real user data should be retrieved from authentication system)
const user = { role: "admin" };
const ability = defineAbilityFor(user);

const routes = [
  {
    path: "/",
    component: () => import("../pages/dashboard.vue"),
  },
  {
    path: "/manage-member",
    component: () => import("../pages/manageMember.vue"),
    beforeEnter: (_to: any, _from: any, next: any) => {
      if (ability.can("read", "manageMember")) {
        next(); // Have access rights
      } else {
        next({ path: "/" }); // No access rights
      }
    },
  },
  {
    path: "/setting",
    component: () => import("../pages/setting.vue"),
    beforeEnter: (_to: any, _from: any, next: any) => {
      if (ability.can("read", "setting")) {
        next(); // Have access rights
      } else {
        next({ path: "/" }); // No access
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
