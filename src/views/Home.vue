<template>
  <div class="home">
    <div class="wrapper">
      <AsideFilter></AsideFilter>
      <ProductItems></ProductItems>
    </div>
  </div>
</template>

<script>
import ProductItems from '@/components/ProductItems.vue';
import AsideFilter from '@/components/AsideFilter.vue';
export default {
  name: 'home',
  components: {
    ProductItems,
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