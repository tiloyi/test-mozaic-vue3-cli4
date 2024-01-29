import { createApp } from "vue";
import MozaicVue from "@mozaic-ds/vue-3";
import "@mozaic-ds/vue-3/dist/mozaic-vue.css"; // Import the css of all components

import App from "./App.vue";

createApp(App).use(MozaicVue).mount("#app");
