<script setup></script>

<template>
  <div>
    <nav class="py-12">
      <div class="container mx-auto grid grid-cols-12 border-b pb-10">
        <div class="col-span-2">
          <img src="../assets/logo.svg" />
        </div>
        <div class="col-span-8">
          <ul>
            <li
              v-for="(menuItem, index) in menuItems"
              :key="index"
              class="px-4 inline-block"
            >
              <a
                href="#"
                class="text-gray-600 text-sm hover:text-black hover:transition hover:border-b-4 border-[#FF7E1B] pb-12"
              >
                {{ menuItem }}</a
              >
            </li>
          </ul>
        </div>

        <div class="col-span-2 flex gap-10 justify-end items-center">
          <div class="cursor-pointer relative">
            <span
              class="bg-[#FF7E1B] text-white text-xs font-semibold mr-2 px-2 py-0.5 rounded-full absolute z-20 left-4 bottom-3"
            >
              {{ $store.state.badge }}</span
            >
            <div @click="toggleCart" class="relative">
              <img src="../assets/icon-cart.svg" alt="Cart Icon" />

              <div
                v-if="showCart"
                class="hidden lg:block absolute py-2 px-3 w-72 rounded shadow-xl right-0 top-24 bg-white"
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
                  <button class="text-sm font-semibold text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="../assets/image-avatar.png"
              alt="Avatar Image"
              class="w-8 hover:border-[#ff7e1b] border-2 rounded-full cursor-pointer transition"
            />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ["Collections", "Men", "Women", "About", "Contact"],
      showCart: false,
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
