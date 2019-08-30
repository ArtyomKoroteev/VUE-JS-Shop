export default {
  namespaced: true,
  state: {
    productCart: [],
  },
  mutations: {
    addToCart(state, product) {
      state.productCart.push(product);
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
