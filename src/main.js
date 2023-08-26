// noinspection JSCheckFunctionSignatures

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAnimateOnScroll from "vue-animate-onscroll";
import sequentialEntrance from "vue3-sequential-entrance";
import "vue3-sequential-entrance/vue-sequential-entrance.css";




createApp(App).use(store).use(router).use(VueAnimateOnScroll).use(sequentialEntrance).mount("#app");

