export default {
  namespaced: true,
  state: {
    productCart: [],
  },
  mutations: {
    updateCart(state, product) {
      state.productCart.push(product);
    },
  },
  getters: {
    allCartProducts(state) {
      return state.productCart;
    },
  },
};
