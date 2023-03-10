<template>
  <div class="layout layout--default bg-slate-50  h-screen relative overflow-x-auto font-roboto">
    <LayoutBackgroundDefault />
    <div class=" absolute min-w-full h-fit  lg:h-screen flex pt-16">
      <slot />
    </div>
    <AppNavbar />
    <AppSideBar class="absolute top-0 left-0 w-full" />
  </div>
</template>
<script>
export default {
  name: "LayoutDefault",
  CONTENT: 'content',
  async asyncData({ $content, app }) {
    const contents = await $content(app.i18n.locale,'content').fetch()
    return {
      contents: contents.map((contentItem) => ({
        ...contentItem,
        path: contentItem.path.replace(`/${app.i18n.locale}`, ''),
      }))
    }
  },
};
</script>
<style lang="scss" scoped>
body {
    padding: 0 !important;
}
</style>
