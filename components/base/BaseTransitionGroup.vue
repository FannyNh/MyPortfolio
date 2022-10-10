<template>
  <transition-group tag="div" name="slide" class="transition--slide">
    <slot />
  </transition-group>
</template>
  
  <script>
export default {};
</script>
<style lang="scss">
.slide-enter-to {
  transform: translateX(0px);
  opacity: 1;
}
.slide-enter-from {
  transform: translateX(350px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transform-origin: top left 0;
  transition: 1s ease;
}

.slide-leave-to {
  transform: translateX(500px);
  opacity: 1;
}
</style>