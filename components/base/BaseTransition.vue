<template>
  <transition name="fade" :duration="{ enter: 2000, leave: 2500 }">
    <slot />
  </transition>
</template>
  
  <script>
export default {};
</script>
<style lang="scss">
.slide-leave-active,
.slide-enter-active {
  transition: 2s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>