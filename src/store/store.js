/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import goods from './modules/goods.js';
import cart from './modules/cart.js';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    goods,
    cart,
  },
});
