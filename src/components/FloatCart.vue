<template>
  <div>
    <div
      class="absolute z-30 py-2 px-3 w-72 rounded shadow-xl right-0 top-24 bg-white"
    >
      <p class="text-sm font-semibold border-b py-2">Cart</p>
      <!-- Cart Items -->
      <div v-if="$store.state.quantity > 0" class="flex gap-2 py-4">
        <img
          src="../assets/image-product-1-thumbnail.jpg"
          class="h-10 rounded"
        />
        <div>
          <h2 class="font-semibold text-xs text-gray-800">
            {{ product.title }}
          </h2>
          <div class="flex gap-3 mt-2 items-center">
            <p class="font-semibold text-xs text-gray-800">
              ${{ $store.state.price }} x {{ $store.state.quantity }}
            </p>
            <p class="font-bold text-xs">
              {{ $store.state.totalPrice }}
            </p>
            <button @click="$store.commit('resetCart')" class="px-4">
              <img src="../assets/icon-delete.svg" class="h-3" />
            </button>
          </div>
        </div>
      </div>
      <div
        class="bg-[#FF7E1B] px-12 py-2 flex justify-center items-center rounded shadow-md hover:opacity-70"
      >
        <button class="text-sm font-semibold text-white">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ["Collections", "Men", "Women", "About", "Contact"],
      product: {
        title: "Fall Limited Edition Sneaker",
      },
    };
  },

  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
};
</script>
