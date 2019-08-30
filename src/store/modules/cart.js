export default {
  namespaced: true,
  state: {
    productCart: [],
    productQuantity: 1,
  },
  mutations: {
    addToCart(state, product) {
      console.log(state.productCart[0]);
      
      state.productCart.push({
        id: product.id,
        productName: product.productName,
        productPrice: product.productPrice,
        productImageUrl: product.productImageUrl,
        productQuantity: state.productQuantity,
      });
    },
    removeFromCart(state, product) {
      state.productCart.splice(product, 1);
    },
  },
  getters: {
    allCartProducts(state) {
      return state.productCart;
    },
  },
};
