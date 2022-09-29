<script setup>
import Nav from "../components/Nav.vue";
import MobileNav from "./MobileNav.vue";
import MobileGallery from "./MobileGallery.vue";
</script>

<template>
  <div class="mx-4 mb-6">
    <div class="block lg:hidden">
      <MobileNav @canvas="canout" />
    </div>
    <Nav class="hidden lg:block" />
    <header class="lg:mt-16 mt-10">
      <MobileGallery class="block lg:hidden" />
      <div
        class="grid lg:grid-cols-2 gap-10 container mx-auto px-8 justify-items-center"
      >
        <div class="col-span-1 hidden lg:block">
          <img
            src="../assets/image-product-1.jpg"
            alt="Product Image 1"
            class="h-80 rounded-lg"
          />

          <ul class="mt-6">
            <li
              @click="out"
              v-for="(galleryItem, index) in galleryItems"
              :key="index"
              class="px-2 inline-block"
            >
              <img
                :src="galleryItem.source"
                :alt="galleryItem.title"
                class="w-16 rounded-md hover:opacity-80 hover:border-2 border-[#FF7E1B]"
              />
            </li>
          </ul>
        </div>

        <div class="col-span-1 mt-6">
          <h4
            class="uppercase text-[#FF7E1B] text-xs font-semibold tracking-wider"
          >
            Sneaker Company
          </h4>
          <h2 class="font-bold text-4xl py-2">{{ product.title }}</h2>

          <p class="py-4 text-xs text-gray-400 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            adipisci aspernatur vitae qui soluta exercitationem, repudiandae
            inventore, saepe ducimus nulla, quia quam! Voluptates doloribus et
            quia error, dicta veniam labore.
          </p>

          <div class="flex py-2 gap-2">
            <p class="font-bold text-xl">$ {{ $store.state.price }}.00</p>
            <p
              class="font-bold text-xs bg-[#feeee2] text-[#FF7E1B] py-1 px-2 items-center rounded"
            >
              50%
            </p>
          </div>

          <p class="text-sm text-gray-400 font-semibold line-through">
            $250.00
          </p>

          <div class="lg:flex lg:gap-6 mt-6">
            <div
              class="flex justify-between bg-slate-100 gap-8 rounded px-4 items-center py-2"
            >
              <button @click="$store.commit('qtyDecrease')">
                <img
                  src="../assets/icon-minus.svg"
                  class="w-2 hover:opacity-70"
                />
              </button>

              <p class="font-semibold text-sm">{{ $store.state.quantity }}</p>

              <button @click="$store.commit('qtyIncrease')">
                <img
                  src="../assets/icon-plus.svg"
                  class="w-2 hover:opacity-70"
                />
              </button>
            </div>

            <div
              @click="
                $store.commit('qtyBadge');
                $store.commit('totalPrice');
              "
              class="flex gap-4 bg-[#FF7E1B] lg:px-24 lg:py-3 py-2 mt-2 lg:mt-0 rounded shadow-md hover:opacity-70 justify-center items-center"
            >
              <img
                class="h-3"
                src="../assets/icon-cart-w.svg"
                alt="icon cart"
              />
              <button class="text-xs font-semibold text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "Fall Limited Edition Sneaker",
      },
      galleryItems: [
        {
          title: "Product Thumb 1",
          source: "/assets/image-product-1-thumbnail.jpg",
        },
        {
          title: "Product Thumb 2",
          source: "/assets/image-product-2-thumbnail.jpg",
        },
        {
          title: "Product Thumb 3",
          source: "/assets/image-product-3-thumbnail.jpg",
        },
        {
          title: "Product Thumb 4",
          source: "/assets/image-product-4-thumbnail.jpg",
        },
      ],
    };
  },

  methods: {
    out() {
      this.$emit("clicked");
    },
    canout() {
      this.$emit("canvas");
    },
  },
};
</script>
