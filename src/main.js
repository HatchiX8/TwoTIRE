/* eslint-disable */
import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import LoadingPlugin from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import 'aos/dist/aos.css';
import { register } from 'swiper/element/bundle';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';

defineRule('required', required);

defineRule('email', email);

defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }),

  validateOnInput: true,
});

setLocale('zh_TW');

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency,
  date,
};
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.component('LoadingPlugin', LoadingPlugin);
app.use(VueAxios, axios);
register();
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(router);
app.mount('#app');
