<template>
    <BaseTransitionGroup>
  <div
    v-show="state.toggle"
    class="
      w-full
      h-screen
      dark:bg-zinc-800
      bg-slate-100
      rounded-b-lg
      py-10
      px-8
      shadow-md
      z-50
    "
  >
    <hr class="mt-10 my-5" />
    <div class="text-xl " @click="toggleMenu" >
      <BaseTransitionGroup class="flex flex-col" >
        <nuxt-link v-if="state.toggle" key="1" :to="localePath('/')" >Home</nuxt-link>
        <nuxt-link v-if="state.toggle" key="2"  :to="localePath('/projects')">Projects</nuxt-link>
        <a v-if="state.toggle" key="5" href="https://github.com">Github</a>
        <nuxt-link class=" lang py-1 px-3 ml-5"  :to="switchLocalePath('en')">EN</nuxt-link>
        <nuxt-link class="lang py-1 px-3"  :to="switchLocalePath('fr')">FR</nuxt-link>
      </BaseTransitionGroup>
    </div>
  </div>
</BaseTransitionGroup>
</template>

<script setup>
import BaseTransitionGroup from "./base/BaseTransitionGroup.vue";
import { useToggleStore } from "~~/store/toggle";
const state = useToggleStore();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath()
const locale = useI18n()
function toggleMenu(){
    state.setToggle(!state.toggle);
}
</script>
  
<style scoped lang="scss">
a {
  @apply py-2 text-base;
}
</style>
