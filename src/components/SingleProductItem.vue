<template>
  <div class="single-product-container">

    <div v-for="product in allProducts" :key="product.id">
      
      <div class="product" v-if="productId === product.id">
        <div class="product-image">
          <img :src="`${product.productImageUrl}`" :alt="`${product.productName}`" />
        </div>
        <div class="product-stuff-container">
          <h2 class="product-title">{{product.productName}}</h2>
          <span class="product-price">{{product.productPrice}}$</span>
          <span class="product-description">{{product.productDescription}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "single-product",
  data() {
    return {
      productId: this.$route.params.id,
      title: "details",
      API_KEY: "http://www.mocky.io/v2/5d6d300c30000058008fbade"
    };
  },
  methods: {
    showMesage() {
      console.log(this.$route.params);
    }
  },
  mounted() {
    this.$store.dispatch("goods/getProducts", this.API_KEY);
  },
  computed: {
    allProducts() {
      return this.$store.getters["goods/allProducts"];
    }
  },
  created() {
    this.showMesage();
  }
};
</script>

<style lang="scss">
  .single-product-container {
    margin: 0 auto;
  }
  .product {
    margin: 0 auto;
    .product-stuff-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 768px;
      

      .product-price {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 30px;
      }
    }
  }
</style>