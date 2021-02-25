// import App from './App.vue'
// import AlertComponent from './components/AlertComponent.vue';
// import HelloWorld from './components/HelloWorld.vue';


// export default {
//   App,
//   AlertComponent,
//   HelloWorld
// }


import HelloWorld from "./components/HelloWorld.vue";
import AlertComponent from "./components/AlertComponent.vue";
// import Vue from "vue";

// const optsDefault = {
//   componentName: "hello-world"
// };

// const optsDefault2 = {
//   componentName: "alert-component"
// };

// const customPlugin = {
//   install(Vue, opts = {}) {
//     if (Vue.prototype.$vm2) {
//       return;
//     }

//     const options = Object.assign(optsDefault, opts);
//     const options2 = Object.assign(optsDefault2, opts);

//     // const root = new Vue();

//     // Vue.prototype.$vm2 = {
//     //   // open: (name = "modal-1") => {
//     //   //   root.$emit("toggle", true, name);
//     //   // },
//     //   // close: (name = "modal-1") => {
//     //   //   root.$emit("toggle", false, name);
//     //   // },
//     //   root: root
//     // };

//     Vue.component(options.componentName, HelloWorld);
//     Vue.component(options2.componentName, AlertComponent);
//   }
// };

// export default customPlugin;

export default AlertComponent;

export  { HelloWorld };