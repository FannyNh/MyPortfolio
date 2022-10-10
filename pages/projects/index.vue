<script setup>
  const { data : projects, pending, error } = await useAsyncData('projects', () => queryContent('/projects').where({ draft: false }).only(['head', 'images','id','category','heroimage','_path']).find())
  console.log(projects)
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


