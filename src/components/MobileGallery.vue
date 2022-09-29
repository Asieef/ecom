<script setup>
import FloatCart from "./FloatCart.vue";
</script>

<template>
  <div class="mt-4">
    <div class="relative">
      <img :src="mainImage[currentSrc]" alt="Product Image 1" class="" />
      <div @click="nextImage" class="absolute right-2 top-2/4">
        <img src="../assets/icon-next.svg" class="bg-white p-3 rounded-full" />
      </div>

      <div @click="prevImage" class="absolute left-2 top-2/4 cursor-pointer">
        <img
          src="../assets/icon-next.svg"
          class="bg-white p-3 rounded-full rotate-180"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainImage: [
        "../assets/image-product-1.jpg",
        "../assets/image-product-2.jpg",
        "../assets/image-product-3.jpg",
        "../assets/image-product-4.jpg",
      ],
      currentSrc: 0,
    };
  },

  methods: {
    nextImage() {
      if (this.currentSrc < 3) {
        this.currentSrc++;
      } else {
        this.currentSrc = 0;
      }

      console.log("clicked");
    },

    prevImage() {
      if (this.currentSrc > 0) {
        this.currentSrc--;
      }
    },
  },
};
</script>
