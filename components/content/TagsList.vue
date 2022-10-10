<script setup>
defineProps({
  title: {
    type: String,
    default: "Tag list",
  },
  tagList: {
    type: Object,
  },
});
</script>
<template>
  <!-- <div
    class="
      grid__col--12
      grid__col--sm--2
      grid__col--md--3
      grid__col--lg--4
      grid--sidelist
      
    "
  > -->

  <ul class="flex flex-wrap tagList">
    <div class="tagList__stroke "></div>
    <h3 class="tagList__title">
      {{ title }}
    </h3>
    <li
      v-for="tag of tagList"
      :key="tag.id"
      class="tagList__tag"
      :class="`tagList__tag--${tag.color}`"
    >
      {{ tag.name }}
    </li>
  </ul>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.tagList {
  width: 100%;
  min-height: 150px;
  @apply bg-white shadow-md shadow-slate-100 my-5 p-2 rounded-b-md relative overflow-hidden;
  &__stroke {
    @apply absolute w-full;
    height: 3px;
    background: linear-gradient(0.25turn, #7c3aed, #7c3aed);
    top: 0;
    left: 0;
  }
  &__title {
    @apply text-violet-600 text-2xl lg:text-lg mx-2 font-black font-mono uppercase w-full pt-5;
  }
  &__tag {
    width: fit-content;
    height: 35px;
    line-height: 35px !important;
    display: block;
    @apply m-2 px-3 rounded-full text-sm font-light font-mono;
    &--green {
      @apply bg-green-100 text-green-700;
    }
    &--purple {
      @apply bg-purple-100 text-purple-600;
    }
    &--red {
      @apply bg-red-100 text-red-600;
    }
    &--default {
      @apply bg-slate-100 text-slate-600;
    }
  }
}
</style>