import { createApp } from "vue";
import { createPinia } from "pinia";
import { VTooltip, Tooltip } from "floating-vue";

import App from "./App.vue";
import router from "./router";

import 'floating-vue/dist/style.css'
import "./assets/css/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive("tooltip", VTooltip)
app.component("Vtooltip", Tooltip)
app.mount("#app");
