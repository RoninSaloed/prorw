import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import EN from "./locales/EN.json";
import UA from "./locales/UA.json";
import { getDefaultLang } from "./helpers/GetDefaultLang";

const pinia = createPinia();
const i18n = createI18n({
  locale: getDefaultLang(),
  messages: {
    "UA/UAH": UA,
    "EN/USD": EN,
  },
});
const app = createApp(App);

app.use(pinia).use(i18n);
app.mount("#app");
