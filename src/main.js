import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/reset.scss";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// use
Vue.use(mavonEditor);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
