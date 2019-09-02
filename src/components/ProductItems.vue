<template>
  <section class="product-section">
    <div class="cards-container">
      <a href="#" class="card" v-for="(product) in allProducts" :key="product.id">
        <div class="card-image">
          <img :src="`${product.productImageUrl}`" :alt="`${product.productName}`" />
        </div>
        <div class="card-stuff-container">
          <a class="card-title" href="#">{{product.productName}}</a>
          <span class="card-price">{{product.productPrice}}$</span>
          <button class="buy-btn" @click="addToCart(product, product.id)">Buy now</button>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "product-items",
  data() {
    return {
      product: {},
      // API_KEY: 'https://8625794d-609a-4ae2-9a51-c8768b684b2b.mock.pstmn.io/vue-shop',
      API_KEY: "http://www.mocky.io/v2/5d6cc8d13000002b008fb831"
    };
  },
  methods: {
    addToCart(product, productId) {
      this.$store.commit("cart/addToCart", { product, productId });
    }
  },
  mounted() {
    this.$store.dispatch("goods/getProducts", this.API_KEY);
  },
  computed: {
    allProducts() {
      return this.$store.getters["goods/allProducts"];
    }
  }
};
</script>

<style lang="scss">
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 30px;
  .card {
    width: 31%;
    margin: 0 0 30px;
    color: #000;
    border: 1px solid #e4e4e4;
    border-bottom: 4px solid #3cc3b5;
    text-align: left;
    text-decoration: none;
    overflow: hidden;

    @media screen and (max-width: 1280px){
      width: 48%;
    }

    &:hover {
      .card-image {
        transform: scale(1.05) rotate(-5deg);
      }
    }

    .card-image {
      margin: 0 0 20px;
      padding: 20px 0 0;
      text-align: center;
      transition: transform 0.5s ease;
      img {
        will-change: transform;
        max-width: 300px;
      }
    }

    .card-stuff-container {
      padding: 0 12px 20px;
      .card-title {
        display: block;
        text-transform: uppercase;
        text-decoration: none;
        color: gray;
        font-weight: bold;
        letter-spacing: -1px;
        margin: 0 0 15px;

        &:hover {
          color: darken(gray, 15%);
        }
      }

      .card-price {
        display: block;
        font-weight: bold;
        font-size: 18px;
        margin: 0 0 15px;
      }

      .buy-btn {
        background: #3cc3b5;
        border: none;
        color: #fff;
        padding: 10px 15px;
        width: 100%;
        cursor: pointer;
        position: relative;

        &:hover {
          background: darken($color: #3cc3b5, $amount: 10%);
        }
      }
    }
  }
}
</style>