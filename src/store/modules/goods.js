/* eslint-disable */
export default {
  state: {
    products: [],
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    getProducts(context) {
      fetch('http://www.mocky.io/v2/5d63ae4c3200007f00ba1c99')
        .then(response => {
          if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText));
          }
          return Promise.resolve(response);
        })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          context.commit('updateProducts', response);
        })
    }
  },
  getters: {
    allProducts(state) {
      return state.products;
    }
  }
}
