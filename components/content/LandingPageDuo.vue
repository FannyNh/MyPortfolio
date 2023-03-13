
<template>
    <div class="landingDuo grid grid grid-cols-2 " >
      <img class="landing__img" :src="`/images/${images[0].src}`" :alt="images[0].alt">
      <img class="landing__img" :src="`/images/${images[1].src}`" :alt="images[1].alt">
    </div>
</template>

<script setup>
  defineProps({
    images: {
      type: Array,
    }
  })
</script>
<style lang="scss" scoped>
  .landingDuo {
    @apply my-5 lg:my-12;
    height: auto;
    &__img{
      @apply w-full h-auto;
    }
  }
  </style>