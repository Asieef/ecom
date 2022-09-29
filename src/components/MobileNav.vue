<template>
  <div class="mt-4">
    <div class="grid grid-cols-8 gap-2 mx-2">
      <div @click="out" class="col-span-1 flex items-center">
        <img src="../assets/icon-menu.svg" />
      </div>

      <div class="col-span-5 flex items-center">
        <img src="../assets/logo.svg" />
      </div>

      <div class="col-span-1">
        <div class="cursor-pointer relative">
          <span
            class="bg-[#FF7E1B] text-white text-xs font-semibold mr-2 px-2 py-0.5 rounded-full absolute z-20 left-4 bottom-3"
          >
            {{ $store.state.badge }}</span
          >
          <div @click="toggleCart" class="relative">
            <img src="../assets/icon-cart.svg" alt="Cart Icon" class="pt-1" />

            <div v-if="showCart">
              <FloatCart />
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <img
          src="../assets/image-avatar.png"
          alt="Avatar Image"
          class="w-8 hover:border-[#ff7e1b] border-2 rounded-full cursor-pointer transition"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FloatCart from "./FloatCart.vue";
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
    out() {
      this.$emit("canvas");
    },
  },
  components: { FloatCart },
};
</script>
