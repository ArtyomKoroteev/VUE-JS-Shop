<template>
  <section class="product-section">
    <div class="cards-container">
      <a href="#" class="card" v-for="product in allProducts" :key="product.id">
        <div class="card-image">
          <img :src="`${product.productImageUrl}`" alt="Cannondale QUICK Disc 5 2019" />
        </div>
        <div class="card-stuff-container">
          <a class="card-title" href="#">{{product.productName}}</a>
          <span class="card-price">{{product.productPrice}}$</span>
          <button class="buy-btn">Buy now</button>
        </div>
      </a>
    </div>
  </section>
</template>

<script type="text/x-template">
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Products",
  computed: mapGetters(["allProducts"]),
  methods: mapActions(["getProducts"]),
  mounted() {
    // this.$store.dispatch("getProducts");
    this.getProducts();
  }
  //   computed: {
  //     allProducts() {
  //       return this.$store.getters.allProducts;
  //     }
  //   }
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

        &:hover {
          background: darken($color: #3cc3b5, $amount: 10%);
        }
      }
    }
  }
}
</style>