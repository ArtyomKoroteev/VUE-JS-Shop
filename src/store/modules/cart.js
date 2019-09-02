export default {
  namespaced: true,
  state: {
    productCart: [],
    totalCartQuantity: 0,
  },
  mutations: {
    addToCart(state, {
      product,
      productId,
    }) {
      const productItem = state.productCart.find(item => item.id === productId);

      if (!productItem) {
        state.productCart.push({
          id: product.id,
          productName: product.productName,
          productPrice: product.productPrice,
          productImageUrl: product.productImageUrl,
          productQuantity: 1,
          productTotalPrice: product.productPrice,
        });
      } else {
        productItem.productQuantity += 1;
        productItem.productTotalPrice = Number(product.productPrice) * Number(productItem.productQuantity);
      }
      state.totalCartQuantity += 1;
    },
    removeFromCart(state, {
      productIndex,
      product,
    }) {
      state.productCart.splice(productIndex, 1);
      state.totalCartQuantity -= Number(product.productQuantity);
    },
    productQuantityModification(state, {
      value,
      product,
    }) {
      console.log(value);

      const productItem = product;
      if (value > 1) {
        state.totalCartQuantity -= Number(product.productQuantity);
        productItem.productQuantity = parseInt(Number(value), 10);
        productItem.productTotalPrice = Number(product.productPrice) * Number(productItem.productQuantity);
        state.totalCartQuantity += Number(product.productQuantity);
      } else {
        const valueError = 1;
        state.totalCartQuantity -= Number(product.productQuantity);
        productItem.productQuantity = parseInt(Number(valueError), 10);
        productItem.productTotalPrice = Number(product.productPrice) * Number(productItem.productQuantity);
        state.totalCartQuantity += Number(product.productQuantity);
      }
    },
    countModification(state, {
      btnValue,
      product,
    }) {
      const productItem = product;
      switch (btnValue) {
        case 1:
          state.totalCartQuantity -= Number(product.productQuantity);
          productItem.productQuantity += 1;
          productItem.productTotalPrice = Number(product.productPrice) * Number(productItem.productQuantity);
          state.totalCartQuantity += Number(product.productQuantity);
          break;
        case -1:
          if (product.productQuantity > 1) {
            state.totalCartQuantity -= Number(product.productQuantity);
            productItem.productQuantity -= 1;
            productItem.productTotalPrice = Number(product.productPrice) * Number(productItem.productQuantity);
            state.totalCartQuantity += Number(product.productQuantity);
          }
          break;
        default:
          break;
      }
    },
  },
  getters: {
    allCartProducts(state) {
      return state.productCart;
    },
    productsTotalQuantity(state) {
      return state.totalCartQuantity;
    },
  },
};
