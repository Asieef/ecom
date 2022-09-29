<template>
  <div>
    <div class="z-50 bg-white h-screen w-3/4 absolute top-0 left-0 py-12 pl-10">
      <div @click="out">
        <img src="../assets/icon-close.svg" />
      </div>
      <ul class="pt-8">
        <li class="py-2 text-lg font-bold">Collections</li>
        <li class="py-2 text-lg font-bold">Men</li>
        <li class="py-2 text-lg font-bold">Women</li>
        <li class="py-2 text-lg font-bold">About</li>
        <li class="py-2 text-lg font-bold">Contact</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    out() {
      this.$emit("canhide");
    },
  },
};
</script>
