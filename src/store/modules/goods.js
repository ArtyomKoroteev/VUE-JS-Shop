export default {
  namespaced: true,
  state: {
    products: [],
    // routerHistory: [],
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    getProducts(context, key) {
      fetch(key, {
        method: 'GET',
      })
        .then((response) => {
          if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText));
          }
          return Promise.resolve(response);
        })
        .then(response => response.json())
        .then((response) => {
          // setTimeout(() => {
          context.commit('updateProducts', response.products);
          // }, 300);
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          // alert('oops, something went wrong');
          throw new Error(error);
        });
    },
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
  },
};
