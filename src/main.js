import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// axios
import "@/http/axios";

// 自定义重置的css
import "@/assets/css/reset.scss";
// md的编辑器
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
// element-ui
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
