/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SingleProduct from './views/SingleProduct.vue';
import store from './store/store';

Vue.use(Router);

const router = new Router({
  
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      params: true,
      component: SingleProduct,
      afterEach() {
       showModal = false;
      },
    },
  ],
})

export default router;