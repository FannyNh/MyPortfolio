<script setup>
defineProps({
  project: {
    type: Object,
  },
});
</script>
<template>
  <nuxt-link :to="project._path" class="card__wrapper">
    <div class="card" :class="[project.category]">
    <div class="card__image">
      <img
        :src="`/images/${project.heroimage}`"
        class="object-cover"
        alt="image hero"
      />
    </div>
    <div class="card__texts">
      <h3>{{ project.head.title }}</h3>
      <p>{{ project.head.description }}</p>
    </div>
  </div>
  </nuxt-link>

</template>
<style lang="scss">
.card__wrapper{
  @apply flex justify-center w-full md:w-96 h-96;
}
.card {
  @apply w-full m-2 md:m-4 bg-white rounded-md shadow-md border  overflow-hidden transform transition duration-1000 hover:scale-105;
  &.design{
    @apply border-purple-600;
    h3 {
      @apply text-purple-600;
    }
  }
  &.tech{
    @apply border-orange-600;
    h3 {
      @apply text-orange-600;
    }
  }
  &__image {
    @apply w-full ;
    height: 210px;
    img{
      height: 100%;
      width: 100%;
      margin: 0 auto;
    }
  }
  &__texts {
    @apply text-center w-full p-3;
    p {
      @apply text-left text-slate-600 font-light;
    }
  }
}
</style>