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
  },
};
</script>
