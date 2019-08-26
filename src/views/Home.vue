<template>
  <div class="home">
    <div class="wrapper">
      <AsideFilter></AsideFilter>
      <Products></Products>
    </div>
  </div>
</template>

<script>
import Products from '@/components/Products.vue';
import AsideFilter from '@/components/AsideFilter.vue';
export default {
  name: "home",
  components: {
    Products,
    AsideFilter,
  }
};
</script>

<style lang="scss">
.wrapper {
  max-width: 1345px;
  margin: 80px auto;
  padding: 0 60px;
  display: flex;
}
</style>