/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SingleProduct from './views/SingleProduct.vue';

Vue.use(Router);

export default new Router({
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
      component: SingleProduct,
    }
  ],
});


// router.afterEach(to, from,  )

