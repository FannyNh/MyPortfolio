<script setup>
import { useI18n, useLocalePath } from '#imports'
const { locale } = useI18n()
const path = `${locale.value}/projects`
const localePath = useLocalePath()
  const { data : projects, pending, error } = await useAsyncData('projects', () => queryContent(localePath('projects')).where({ draft: false }).only(['head', 'images','id','category','mainLabel','heroimage','_path','order']).sort({ order: 1 }).find())
  console.log(projects.value)
</script>

<template>
  <div v-if="!pending" class="grid">
    <div v-if="error"> {{error}} reload the page</div>
    <div  class="flex flex-wrap justify-center  item-center home">
      <AppCard
      v-for="project of projects"
      :key="project.id"
      :project="project"
       />
    </div>
  </div>
</template>

<style lang="scss">
 
</style>


