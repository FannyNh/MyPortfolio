<template>
  <main class="w-full py-20">
    <ContentDoc v-slot="{ doc }">
      <h2>{{ doc.head.title }}</h2>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
<script setup>
const { data: page } = await useAsyncData(
  "$route.path",
  queryContent("/").findOne
);
useContentHead(page);

definePageMeta({
  layout: "project",
});
</script>
<style lang="scss" scoped>
h2 {
  @apply text-violet-600 text-2xl lg:text-5xl text-center font-bold uppercase w-full py-5;
}
</style>
