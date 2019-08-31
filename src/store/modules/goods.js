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
    getProducts(context, key) {
      fetch(key)
        .then((response) => {
          if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText));
          }
          return Promise.resolve(response);
        })
        .then(response => response.json())
        .then((response) => {
          context.commit('updateProducts', response);
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
