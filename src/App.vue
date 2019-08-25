<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <router-link to="/">VeloShop</router-link>
      </div>
      <Search></Search>
      <Cart></Cart>

    </header>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  .logo {
    a {
      text-decoration: none;
      color: #3cc3b5;
      font: 400 48px "Lobster";

      &:hover {
        color: darken($color: #3cc3b5, $amount: 5%);
      }
    }
  }
}
</style>



<script>
import Search from '@/components/Search.vue';
import Cart from '@/components/Cart.vue';
export default {
  name: "app",
  components: {
    Search,
    Cart,
  }
};
</script>
