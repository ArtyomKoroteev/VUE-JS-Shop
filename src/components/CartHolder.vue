<template>
  <div class="cart-container">
    <button class="cart" @click="showModal = true">
      <span class="cart-product-counter">{{ productsTotalQuantity }}</span>
      <svg
        class="cart-icon"
        viewBox="0 -36 512.001 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m256 219.988281c5.519531 0 10-4.480469
             10-10s-4.480469-10-10-10-10 4.480469-10 10 4.480469 10 10 10zm0 0"
        />
        <path
          d="m472 139.988281h-59.136719l-90.96875-125.152343c-8.171875-14.003907-26.171875-18.988282-40.46875-11.070313-14.492187
             8.050781-19.703125 26.304687-11.648437 40.800781.230468.410156.484375.804688.769531 1.179688l71.351563
             94.242187h-171.796876l71.351563-94.242187c.28125-.375.539063-.769532.769531-1.179688 8.035156-14.460937
             2.882813-32.730468-11.660156-40.808594-14.265625-7.902343-32.265625-2.921874-40.453125
             11.070313l-90.972656 125.160156h-59.136719c-22.054688 0-40 17.945313-40 40 0 17.394531 11.289062
             32.539063 27.191406 37.898438 1.695313 1.3125 3.8125 2.101562 6.117188
             2.101562.460937 0 .894531.027344 1.347656.089844 4.304688.578125 7.714844
             3.84375 8.496094 8.117187l34.019531 187.164063c2.597656 14.269531 15.011719
             24.628906 29.519531 24.628906h298.617188c14.507812 0 26.921875-10.359375
             29.519531-24.632812l34.019531-187.15625c.78125-4.277344
             4.195313-7.542969 8.515625-8.121094.4375-.0625.871094-.089844 1.328125-.089844
             2.320313 0 4.453125-.796875 6.148438-2.125 15.914062-5.394531 27.160156-20.511719
             27.160156-37.875 0-22.054687-17.945312-40-40-40zm-185.011719-105.660156c-2.285156-4.730469-.511719-10.492187
             4.136719-13.070313 4.839844-2.683593 10.941406-.953124 13.609375 3.855469.195313.359375.417969.703125.65625
             1.03125l82.746094 113.84375h-21.15625zm-80.378906-8.179687c.238281-.328126.453125-.667969.652344-1.019532
             2.675781-4.8125 8.78125-6.546875 13.601562-3.878906 4.65625 2.585938 6.4375 8.339844 4.148438
             13.078125l-79.992188 105.660156h-21.15625zm265.390625 173.839843h-176c-5.523438 0-10
             4.476563-10 10 0 5.523438 4.476562 9.898438 10 9.898438h154.398438c-.523438
             1.492187-.9375 3.039062-1.226563 4.632812l-34.023437 187.257813c-.863282
             4.757812-5.003907 8.210937-9.839844 8.210937h-298.617188c-4.839844
             0-8.976562-3.453125-9.84375-8.207031l-34.019531-187.164062c-.289063-1.59375-.703125-3.140626-1.226563-4.628907h154.398438c5.523438
             0 10-4.476562 10-10 0-5.523437-4.476562-10-10-10h-176c-11.121094
             0-20-9.0625-20-20 0-11.027343 8.972656-20 20-20h432c11.027344
             0 20 8.972657 20 20 0 11.105469-9.085938 20-20 20zm0 0"
        />
        <path
          d="m256 249.988281c-16.542969 0-30 13.457031-30
             30v80c0 16.542969 13.457031 30 30 30s30-13.457031
             30-30v-80c0-16.574219-13.425781-30-30-30zm10
             110c0 5.515625-4.484375 10-10 10s-10-4.484375-10-10v-80c0-5.515625
             4.484375-10 10-10 5.519531 0 10 4.480469 10 10zm0 0"
        />
        <path
          d="m356 389.988281c16.542969 0 30-13.457031 30-30v-80c0-16.574219-13.425781-30-30-30-16.542969 0-30 13.457031-30 30v80c0 16.542969 13.457031 30 30 30zm-10-110c0-5.515625 4.484375-10 10-10 5.519531 0 10 4.480469 10 10v80c0 5.515625-4.484375 10-10 10s-10-4.484375-10-10zm0 0"
        />
        <path
          d="m156 249.988281c-16.542969 0-30 13.457031-30 30v80c0 16.542969 13.457031 30 30 30s30-13.457031 30-30v-80c0-16.574219-13.425781-30-30-30zm10 110c0 5.515625-4.484375 10-10 10s-10-4.484375-10-10v-80c0-5.515625 4.484375-10 10-10 5.519531 0 10 4.476563 10 10zm0 0"
        />
      </svg>
    </button>
    <div class="modal-mask" v-show="showModal">
      <div class="modal-wrapper">
        <div v-if="allCartProducts.length > 0">
          <div
            class="product-cart-container"
            v-for="(cartProduct, index) in allCartProducts"
            :key="cartProduct.id"
          >
            <div class="product-image">
              <img
                :src="`${cartProduct.productImageUrl}`"
                :alt="`${cartProduct.productName}`"
              />
            </div>
            <div class="product-info-block">
              <span class="title">{{ cartProduct.productName }}</span>
              <span class="quantity-holder">
                Quantity:
                <div class="counter-container">
                  <button
                    class="btn minus-btn"
                    @click="countModification(-1, cartProduct)"
                  >
                    -
                  </button>
                  <span class="input-wrap">
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      min="1"
                      :value="`${cartProduct.productQuantity}`"
                      @change="productsQuantityModificion($event, cartProduct)"
                    />
                  </span>
                  <button
                    class="btn plus-btn"
                    @click="countModification(1, cartProduct)"
                  >
                    +
                  </button>
                </div>
              </span>
              <span class="price">
                Single price:
                <span class="number">{{ cartProduct.productPrice }}$</span>
              </span>
              <span class="total-price">
                Total Price:
                <span class="number">{{ cartProduct.productTotalPrice }}$</span>
              </span>
            </div>
            <button
              class="remove-from-cart"
              @click="removeFromCart(index, cartProduct)"
            >
              <span class="line">remove</span>
            </button>
          </div>
        </div>
        <span v-else class="text-message">Cart is empty</span>
        <button class="close" @click="showModal = false">
          <span class="line">Close</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart-holder",
  data() {
    return {
      showModal: false,
      cartLength: Number,
      modificationNumber: Number
    };
  },
  methods: {
    removeFromCart(productIndex, product) {
      this.$store.commit("cart/removeFromCart", { productIndex, product });
    },
    productsQuantityModificion(event, product) {
      const { value } = event.target;
      this.$store.commit("cart/productQuantityModification", {
        value,
        product
      });
    },
    countModification(btnValue, product) {
      this.$store.commit("cart/countModification", {
        btnValue,
        product
      });
    }
  },
  computed: {
    allCartProducts() {
      return this.$store.getters["cart/allCartProducts"];
    },
    productsTotalQuantity() {
      return this.$store.getters["cart/productsTotalQuantity"];
    }
  }
};
</script>

<style lang="scss">
.cart-container {
  display: flex;
  position: relative;

  .cart {
    border: none;
    background: transparent;
    width: 44px;
    height: 44px;
    position: relative;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }

    .cart-product-counter {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      right: -5px;
      top: -1px;
      color: #fff;
      font-weight: bold;
      background: #3cc3b5;
      width: 22px;
      height: 22px;
      border-radius: 50%;
    }
  }

  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: 10;
  }
  .modal-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    max-width: 800px;
    padding: 50px 15px;
    height: 400px;
    border: 1px solid;
    overflow-y: auto;
    background: rgba($color: #ffffff, $alpha: 1);
    transform: translate(-50%, -50%);

    .close {
      position: fixed;
      top: 15px;
      right: 15px;
      height: 30px;
      width: 30px;
      cursor: pointer;

      .line {
        font-size: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;

        &:before {
          position: absolute;
          top: 50%;
          left: 0;
          content: "";
          font-size: 18px;
          width: 30px;
          height: 2px;
          background: #000000;
          transform: translateY(-50%) rotate(45deg);
        }

        &:after {
          position: absolute;
          top: 50%;
          left: 0;
          content: "";
          font-size: 18px;
          width: 30px;
          height: 2px;
          background: #000000;
          transform: translateY(-50%) rotate(-45deg);
        }
      }
    }
  }
}
.cart-icon {
  height: 30px;
  width: 30px;
  fill: #3cc3b5;
}

.input-wrap {
  input {
    width: 50px;
    text-align: center;
  }
}

.text-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  font-weight: bold;
  font-style: italic;
}

.product-cart-container {
  display: flex;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  .remove-from-cart {
    height: 25px;
    width: 25px;
    cursor: pointer;
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
      background: red;
    }

    .line {
      font-size: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 50%;
      display: flex;
      transform: translateX(-50%);

      &:before {
        position: absolute;
        top: 50%;
        left: 0;
        content: "";
        font-size: 18px;
        width: 20px;
        height: 2px;
        background: #000000;
        transform: translateY(-50%) rotate(45deg);
      }

      &:after {
        position: absolute;
        top: 50%;
        left: 0;
        content: "";
        font-size: 18px;
        width: 20px;
        height: 2px;
        background: #000000;
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }

  .product-image {
    margin-right: 20px;
    img {
      max-width: 200px;
    }
  }

  .product-info-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 40px 0 0;

    .title {
      display: block;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
      text-align: left;
    }
    .price,
    .total-price {
      margin-bottom: 5px;
      .number {
        font-weight: bold;
      }
    }

    .quantity-holder {
      display: flex;
      align-items: center;
      margin: 0 0 10px;
      .counter-container {
        padding: 0 0 0 10px;
        display: flex;

        input {
          border: 1px solid gray;
          height: 20px;
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          color: #000;
          font-weight: bold;
          height: 24px;
          width: 30px;
          font-size: 18px;
          border: 1px solid gray;

          &.minus-btn {
            border-radius: 50% 0 0 50%;
          }

          &.plus-btn {
            border-radius: 0 50% 50% 0;
          }
        }
      }
    }
  }
}
</style>
