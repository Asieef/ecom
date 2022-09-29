<script setup>
import Hero from "./components/Hero.vue";
import Lightbox from "./components/Lightbox.vue";
import Sidecanvas from "./components/Sidecanvas.vue";
</script>

<template>
  <div>
    <div v-if="disModal" class="absolute z-30 w-full">
      <Lightbox @close="hideModal()" />
    </div>
    <Hero @clicked="showModal()" @canvas="openCanvas" />
    <div v-if="showCanvas" class="block lg:hidden">
      <Sidecanvas @canhide="hideCanvas" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disModal: false,
      showCanvas: false,
    };
  },

  methods: {
    showModal() {
      this.disModal = true;
    },

    hideModal() {
      this.disModal = false;
    },

    openCanvas() {
      this.showCanvas = true;
      console.log("HEllo");
    },

    hideCanvas() {
      this.showCanvas = false;
    },
  },
};
</script>
