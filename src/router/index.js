import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article";
import Welcome from "../views/Welcome";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/welcome",
    children: [
      {
        path: "/welcome",
        name: "Welcome",
        component: Welcome
      },
      {
        path: "/article:id",
        name: "Article",
        component: Article
      }
    ]
  }

  // {
  //   path: "/",
  //   name: "List",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/List.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
