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
        <nuxt-link v-if="state.toggle" key="1" to="/" >Home</nuxt-link>
        <nuxt-link v-if="state.toggle" key="2" to="/projects"
          >Projects</nuxt-link
        >
        <a v-if="state.toggle" key="5" href="https://github.com">Github</a>
      </BaseTransitionGroup>
    </div>
  </div>
</BaseTransitionGroup>
</template>
  <script>
import BaseTransitionGroup from "./base/BaseTransitionGroup.vue";
export default {
  components: { BaseTransitionGroup },
};
</script>
<script setup>
import { useToggleStore } from "~~/store/toggle";
const state = useToggleStore();
function toggleMenu(){
    state.setToggle(!state.toggle);
}
</script>
  
  <style scoped>
a {
  @apply py-2 text-base;
}
</style>