<template>
  <div
    class="
      layout layout--project
      relative
      h-screen
      w-full
      flex
      justify-center
      bg-slate-100
      font-Roboto
    "
  >
    <div class="projectContainer flex justify-center">
      <AppNavbar />

      <slot />
    
        <AppSideBar class="absolute top-0 left-0 w-full" />
   
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutProject",
};
</script>
<style lang="scss">
.projectContainer {
  @apply absolute w-full  p-2 lg:p-5 overflow-x-auto bg-slate-100;
}
</style>

  
