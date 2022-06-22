export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
      show: false,
    };
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('cartStore')) {
        Object.assign(state, JSON.parse(localStorage.getItem('cartStore')));
      }
    },
    saveToLocalStorage(state) {
      localStorage.setItem('cartStore', JSON.stringify(state));
    },
    toggleSideNav(state, data) {
      state.show = data;
      this.commit('cart/saveToLocalStorage');
    },
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
      state.total = +state.total.toFixed(2);
      this.commit('cart/saveToLocalStorage');
    },

    removeProductFromCart(state, payload) {
      const prodId = payload.productId;
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
      state.total = +state.total.toFixed(2);
      this.commit('cart/saveToLocalStorage');
    },
    decreaseProductQuantity(state, payload) {
      const productData = payload;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (state.items[productInCartIndex].qty === 1) {
        return;
      }

      state.items[productInCartIndex].qty--;
      state.qty--;

      state.total -= productData.price;
      state.total = +state.total.toFixed(2);
      this.commit('cart/saveToLocalStorage');
    },
  },
  actions: {
    addToCart(context, payload) {
      const prodId = payload.id;
      const products = context.rootGetters['prods/products'];
      const product = products.find((prod) => prod.id === prodId);

      context.commit('addProductToCart', product);
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    },
  },
  getters: {
    items(state) {
      return state.items;
    },
    totalSum(state) {
      return state.total;
    },
    quantity(state) {
      return state.qty;
    },
    showSideNav(state) {
      return state.show;
    },
  },
};
