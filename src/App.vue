<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <router-link to="/">VeloShop</router-link>
      </div>
      <SearchField></SearchField>
      <CartHolder></CartHolder>
    </header>
    <router-view />
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
.buy-btn {
  background: #3cc3b5;
  border: none;
  color: #fff;
  padding: 10px 15px;
  max-width: 300px;
  width: 100%;
  cursor: pointer;
  position: relative;

  &:hover {
    background: darken($color: #3cc3b5, $amount: 10%);
  }
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

<script type="text/x-template">
import SearchField from "@/components/SearchField.vue";
import CartHolder from "@/components/CartHolder.vue";
export default {
  name: "app",
  components: {
    SearchField,
    CartHolder
  }
};
</script>
