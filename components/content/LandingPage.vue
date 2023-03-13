
<template>
    <div class="landing" >
      <img class="landing__img" :src="`/images/${image.src}`" :alt="image.alt">
    </div>
</template>

<script setup>
  defineProps({
    image: {
      type: Object,
    }
  })
</script>
<style lang="scss" scoped>
  .landing {
    @apply my-5 lg:my-12;
    height: auto;
    &__img{
      @apply w-full h-auto;
    }
  }
  </style>