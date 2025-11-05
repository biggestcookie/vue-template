import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./app.vue";
import "./assets/styles/global.scss";
import { router } from "./config/router";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

router.isReady().then(() => {
  app.mount("#app");
});
