<template>
  <section class="product-section">
    <div class="cards-container">
      <div class="card" v-for="product in allProducts" :key="product.id">
        <div class="card-image" @click="goToProduct(product.id)">
          <img :src="`${product.productImageUrl}`" :alt="`${product.productName}`" />
        </div>
        <div class="card-stuff-container">
          <router-link
            :to="{ name: 'product', params: {singleProduct: product, id: product.id}}"
            class="card-title"
          >{{product.productName}}</router-link>
          <span class="card-price">{{product.productPrice}}$</span>
          <button class="buy-btn" @click="addToCart(product, product.id)">Buy now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'product-items',
  // props: {
  //   product: Object,
  // },
  data() {
    return {
      product: {},
      API_KEY: 'http://localhost:3000/shop',
      title: 'product',
      showModal: false,
    };
  },
  methods: {
    addToCart(product, productId) {
      this.$store.commit('cart/addToCart', { product, productId });
    },
    goToProduct(productId) {
      this.$router.push({ name: 'product', params: { id: productId } });
    },
  },
  mounted() {
    this.$store.dispatch('goods/getProducts', this.API_KEY);
  },
  computed: {
    allProducts() {
      return this.$store.getters['goods/allProducts'];
    },
  },
};
</script>
