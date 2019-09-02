<template>
  <div class="product">
    <div class="wrapper">
      <SingleProductItem></SingleProductItem>
    </div>
  </div>
</template>

<script>
import SingleProductItem from '@/components/SingleProductItem.vue';
export default {
  name: 'product',
  components: {
    SingleProductItem,
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