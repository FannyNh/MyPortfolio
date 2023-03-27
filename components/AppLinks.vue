<template>
  <div class="flex items-center text-sm font-medium uppercase z-50">
    <nuxt-link :to="localePath('/')" class="py-1 px-3 ">{{$t('home.navigation.home')}}</nuxt-link>
    <nuxt-link :to="localePath('/projects')" class="py-1 px-3">Projects</nuxt-link>
    <nuxt-link
      to="https://www.linkedin.com/in/fanny-nhouyvanisvong/"
      class="py-1 px-3"
      target="_blank"
    >Linkedin</nuxt-link>
    <nuxt-link class=" lang py-1 px-3 ml-5"  :to="switchLocalePath('en')">EN</nuxt-link>
    <nuxt-link class="lang py-1 px-3"  :to="switchLocalePath('fr')">FR</nuxt-link>
  </div>
</template>
<script setup>
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath()
const locale = useI18n()
</script>
<style lang="scss">
.lang{
  @apply text-center;
  &.router-link-active{
       @apply text-violet-600 border rounded-md border-violet-600 ;
    }
}
</style>
