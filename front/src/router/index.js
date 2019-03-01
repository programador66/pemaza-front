import Vue from "vue";
import Router from "vue-router";
import navBar from "@/components/navBar";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import cliente from "@/components/cliente";
import HelloWorld from "@/components/HelloWorld";

Vue.use(BootstrapVue);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWolrd",
      component: HelloWorld
    },
    {
      path: "/cliente",
      name: "cliente",
      component: cliente
    }
  ]
});
