<template>
    <div class="z-50 h-full">
      <nuxt-link :to="localePath('/')" class="logo h-full font-bold text-lg"> <img
          src="~/assets/img/logo-thethird.png"
          alt="logo image"
          class="cover h-full"
        /></nuxt-link>
    </div>
  </template>
<script setup>
const localePath = useLocalePath()
</script>
  
  <style scoped>
  .nuxt-link-exact-active {
    background: none !important;
    padding: 0 !important;
  }
  </style>
