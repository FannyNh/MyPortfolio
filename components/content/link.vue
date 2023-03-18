<template>

</template>
<script setup>
const localePath = useLocalePath()
const locale = useI18n()
defineProps({
  link: {
    type: String
  },
  text: {
    type: String
  },
})
</script>
<style lang="scss">
.contentLink{
  @apply text-center;
  &.router-link-active{
       @apply text-violet-600 border rounded-md border-violet-600 ;
    }
}
</style>
