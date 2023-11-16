import { createApp } from "vue";
import { createPinia } from "pinia";
import { VTooltip } from "floating-vue";




import App from "./App.vue";
import router from "./router";

import "./assets/css/main.css";
import 'floating-vue/dist/style.css'

import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(VueSweetalert2);
window.Swal = app.config.globalProperties.$swal;

app.directive("tooltip", VTooltip)
app.mount("#app");
