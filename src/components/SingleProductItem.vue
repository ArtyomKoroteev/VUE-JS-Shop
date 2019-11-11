<template>
  <div class="single-product-container">
    <div
      class="product"
      v-for="product in allProducts"
      :key="product.id"
      v-if="productId === product.id"
    >
      <div class="product-image">
        <img :src="`${product.productImageUrl}`" :alt="`${product.productName}`" />
      </div>
      <div class="product-stuff-container">
        <h2 class="product-title">{{product.productName}}</h2>
        <span class="product-price">{{product.productPrice}}$</span>
        <span class="product-description">{{product.productDescription}}</span>
        <table class="product-table">
          <thead>
            <tr>
              <td>Characteristic</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gender:</td>
              <td v-if="product.productGender === undefined">----</td>
              <td v-else>{{product.productGender}}</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>{{product.productType}}</td>
            </tr>
            <tr>
              <td>Wheel Size:</td>
              <td>{{product.productWheelSize}}</td>
            </tr>
          </tbody>
        </table>
        <button class="buy-btn" @click="addToCart(product, product.id)">Buy now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'single-product',
  data() {
    return {
      productId: this.$route.params.id,
      title: 'details',
      // API_KEY: 'http://www.mocky.io/v2/5d6d300c30000058008fbade',
      API_KEY: 'http://localhost:3000/shop',
    };
  },
  methods: {
    addToCart(product, productId) {
      this.$store.commit('cart/addToCart', { product, productId });
    },
  },
  computed: {
    allProducts() {
      return this.$store.getters['goods/allProducts'];
    },
  },
  mounted() {
    this.$store.dispatch('goods/getProducts', this.API_KEY);
  },
};
</script>
