import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// import Vue plugin
import VueSvgInlinePlugin from "vue-svg-inline-plugin";




createApp(App).use(router).use(VueSvgInlinePlugin).mount("#app");
