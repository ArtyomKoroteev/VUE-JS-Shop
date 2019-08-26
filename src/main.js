/* eslint-disable */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import 'normalize.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
