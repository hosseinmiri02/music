import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation.js";
import { auth } from "./includes/firebase";
import i18n from "./includes/i18n";
import progressBar from "./includes/progress-bar";

import "./assets/tailwind.css";
import "./assets/main.css";
import "nprogress/nprogress.css";
import "./registerServiceWorker";

progressBar(router);

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(i18n);

    app.mount("#app");
  }
});
