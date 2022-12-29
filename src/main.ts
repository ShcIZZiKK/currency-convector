import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import filters from "./helpers/filters";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.config.globalProperties.$filters = filters;

app.use(pinia);
app.use(router);
app.mount("#app");
