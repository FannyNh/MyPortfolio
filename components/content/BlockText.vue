<script setup>
defineProps({
  title: {
    type: String,
    default: "Tag list",
  },
  subtitle: {
    type: String,
    default: "Tag list",
  },
  textContent: {
    type: String,
    default: "Tag list",
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
  <div class="flex flex-wrap blockText my-5 lg:w-3/5">
 
    <h3 class="blockText__title">
      {{ title }}
    </h3>
    <h3 class="blockText__subtitle">
      {{ subtitle }}
    </h3>
    <p class="blockText__textContent" v-html="textContent"></p>
  </div>
  <!-- </div> -->
</template>
    
    <style lang="scss" scoped>
.blockText {
  min-height: 150px;
  @apply bg-white shadow-lg shadow-slate-100  p-3 rounded-lg relative overflow-hidden mx-auto;
  &__title {
    @apply text-violet-600 text-2xl lg:text-lg  font-semibold uppercase w-full pt-5;
  }
  &__subtitle {
    @apply text-orange-400 text-xl lg:text-base  font-medium w-full;
  }
  &__textContent {
    @apply text-slate-600 text-base  font-medium  w-full py-3;
  }
  &__tag {
    &--default {
      @apply bg-slate-100 text-slate-600;
    }
  }

}

</style>
