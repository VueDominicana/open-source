import Vue from "vue";
import VueRouter from "vue-router";
import PopularRepositories from "../views/PopularRepositories.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "PopularRepositories"
    }
  },
  {
    path: "/repositories",
    redirect: {
      name: "PopularRepositories"
    },
    component: () => import(/* webpackChunkName: "new-repositories" */ "../views/Repositories.vue"),
    children: [
      {
        path: "popular",
        name: "PopularRepositories",
        component: PopularRepositories
      },
      {
        path: ":language",
        name: "PopularRepositoriesByLanguages",
        component: PopularRepositories
      },
      {
        path: "new",
        name: "NewRepositories",
        component: () => import(/* webpackChunkName: "new-repositories" */ "../views/NewRepositories.vue")
      }
    ]
  },
  {
    path: "/developers",
    component: () => import(/* webpackChunkName: "developers" */ "../views/Developers.vue"),
    redirect: {
      name: "PopularDevelopers"
    },
    children: [
      {
        path: "popular",
        name: "PopularDevelopers",
        component: () => import(/* webpackChunkName: "popular-developers" */ "../views/PopularDevelopers.vue")
      },
      {
        path: "recently-joined",
        name: "RecentlyJoinedDevelopers",
        component: () =>
          import(/* webpackChunkName: "recently-joined-developers" */ "../views/RecentlyJoinedDevelopers.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
