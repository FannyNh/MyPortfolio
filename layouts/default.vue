<template>
  <div class="layout layout--default bg-slate-50  h-screen relative overflow-x-auto">
    <LayoutBackgroundDefault />
    <div class=" absolute min-w-full h-fit  lg:h-screen flex justify-center">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutDefault",
};
</script>
