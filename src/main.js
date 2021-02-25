import Vue from "vue";
import App from "./App.vue";
// import customPlugin from "./index.js";

Vue.config.productionTip = false;
// Vue.use(customPlugin, {
//   componentName: 'ModelVue'
// });
new Vue({
  render: (h) => h(App)
}).$mount("#app");