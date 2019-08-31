export default {
  namespaced: true,
  state: {
    productCart: [],
    productQuantity: 1,
  },
  mutations: {
    addToCart(state, {
      product,
      productId,
    }) {
      console.log(state.productCart);
      let itemId = Object;
      state.productCart.map((item) => {
        return itemId = item;
      });
      if (itemId === product.id) {
        state.productCart.push({
          id: product.id,
          productName: product.productName,
          productPrice: product.productPrice,
          productImageUrl: product.productImageUrl,
          productQuantity: state.productQuantity,
        });
      } else {
        console.log('sdfsdfds');
        
      }
      
      
      // state.productCart.push({
      //   id: product.id,
      //   productName: product.productName,
      //   productPrice: product.productPrice,
      //   productImageUrl: product.productImageUrl,
      //   productQuantity: state.productQuantity,
      // });


      // if (state.productCart) {

      // } else {
      //   state.productQuantity += 1;
      //   console.log(product.productQuantity);
      // }
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
