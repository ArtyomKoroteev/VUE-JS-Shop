export default {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    getProducts(context) {
      fetch('https://8625794d-609a-4ae2-9a51-c8768b684b2b.mock.pstmn.io/vue-shop')
        .then((response) => {
          if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText));
          }
          return Promise.resolve(response);
        })
        .then(response => response.json())
        .then((response) => {
          context.commit('updateProducts', response.products);
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          alert('oops, something went wrong');
          throw new Error(error);
        });
    },
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    // allCartProducts(state) {
    //   console.log(state.productCart);
    //   return state.productCart;
    // }
  },
};
