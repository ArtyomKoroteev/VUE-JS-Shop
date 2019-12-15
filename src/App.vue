<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <router-link to="/">VeloShop</router-link>
      </div>
      <SearchField></SearchField>
      <CartHolder></CartHolder>
    </header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script type="text/x-template">
import SearchField from '@/components/SearchField.vue';
import CartHolder from '@/components/CartHolder.vue';

export default {
  name: 'app',
  components: {
    SearchField,
    CartHolder,
  },
};
</script>
