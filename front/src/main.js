// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App";
import router from "./router";
import axios from "axios";
import Vuetify from "vuetify";
import navBar from "./components/navBar";
import cliente from "./components/cliente";

Vue.use(Vuetify);

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App, navBar, cliente },
  template: "<App/>"
});
