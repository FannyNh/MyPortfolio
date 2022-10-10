<template>
  <div class="flex items-center font-thin space-x-3 text-md z-50">
    <div class="space-x md:flex hidden">
      <a
        class=""
        href="https://github.com/FannyNh"
        aria-label="Github"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-github"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path></svg
      ></a>
    </div>

    <BaseTransition>
      <button class="md:hidden block" aria-label="toggle" @click="toggleMenu">
        <svg
          v-if="!toggle.toggle"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition-transform duration-200 transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </BaseTransition>
  </div>
</template>
  
  <script>
import BaseTransition from "./base/BaseTransition.vue";
export default {
  components: { BaseTransition },
};
</script>
<script setup>
import { useToggleStore } from "~~/store/toggle";

const toggle = useToggleStore();

function toggleMenu() {
  toggle.setToggle(!toggle.toggle);
}
</script>