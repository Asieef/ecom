<script setup></script>

<template>
  <div class="h-screen flex justify-center items-center bg-black opacity-95">
    <div class="z-50">
      <div @click="close" class="flex justify-end cursor-pointer">
        <img src="../assets/icon-close.svg" />
      </div>
      <div class="relative py-8 z-20">
        <img
          :src="mainImage[currentSrc]"
          alt="Product Image 1"
          class="h-80 rounded-lg"
        />

        <div
          @click="nextImage"
          class="absolute -right-4 top-2/4 z-40 bg-white p-3 rounded-full cursor-pointer"
        >
          <img src="../assets/icon-next.svg" />
        </div>

        <div
          @click="prevImage"
          class="absolute -left-4 top-2/4 z-40 bg-white p-3 rounded-full cursor-pointer"
        >
          <img src="../assets/icon-next.svg" class="rotate-180" />
        </div>
      </div>
      <div>
        <ul class="mt-6">
          <li
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      mainImage: [
        "../assets/image-product-1.jpg",
        "../assets/image-product-2.jpg",
        "../assets/image-product-3.jpg",
        "../assets/image-product-4.jpg",
      ],
      currentSrc: 0,
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
    nextImage() {
      if (this.currentSrc < 3) {
        this.currentSrc++;
      } else {
        this.currentSrc = 0;
      }
    },

    prevImage() {
      if (this.currentSrc > 0) {
        this.currentSrc--;
      }
    },

    close() {
      this.$emit("close");
    },
  },
};
</script>
