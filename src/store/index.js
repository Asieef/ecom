import { createStore } from "vuex";

export default createStore({
  state: {
    quantity: 0,
    badge: 0,
    price: 125,
    totalPrice: 0,
  },

  mutations: {
    qtyIncrease(state) {
      state.quantity++;
    },
    qtyDecrease(state) {
      if (state.quantity > 0) {
        state.quantity--;
      }
    },

    qtyBadge(state) {
      state.badge = state.quantity;
    },

    totalPrice(state) {
      state.totalPrice = state.price * state.quantity;
    },

    resetCart(state) {
      state.quantity = 0;
      state.badge = 0;
    },
  },

  actions: {},

  modules: {},
});
