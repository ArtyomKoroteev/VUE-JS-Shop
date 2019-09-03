<template>
  <div class="single-product-container">
    <div class="product" v-for="product in allProducts" :key="product.id" v-if="productId === product.id">
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
    addToCart(product, productId) {
      this.$store.commit("cart/addToCart", { product, productId });
    },
    fetchproduct() {
      allProducts();
    }
  },
  computed: {
    allProducts() {
      return this.$store.getters["goods/allProducts"];
    }
  },
  mounted() {
    this.$store.dispatch("goods/getProducts", this.API_KEY);
  },
};
</script>

<style lang="scss">
.single-product-container {
  margin: 0 auto;
}
.product {
  margin: 0 auto;
  display: flex;
  .product-image {
    margin: 0 30px 0 0;
  }
  .product-stuff-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 650px;
    text-align: left;

    .product-title {
      margin: 0 0 15px 0;
    }

    .product-price {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .product-table {
      margin: 30px 0;
      width: 100%;
      border-spacing: 0;

      td {
        border: 1px solid;
        width: 50%;
        padding: 5px;
        margin: 0;
        text-transform: capitalize;
      }
    }
  }
}
</style>