
<template>
  <div class="flex flex-wrap blockText my-5">
    <video
      v-for="image of images"
      :key="image.id"
      :src="`/images/${image.src}`"
      controls=""
      class="appvideo"
    ></video>
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { Video } from "@splidejs/splide-extension-video";
import { defineComponent } from "vue";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
defineProps({
  title: {
    type: String,
    default: "Default title",
  },
  images: {
    type: Object,
  },
});
const options = {
  rewind: true,
  heightRatio: 0.5625,
  perPage: 1,
  gap: "1rem",
  height: "15rem",
};
const extensions = { Video };
</script>
<style>
.appvideo{
  margin: 1.25rem auto;
}
</style>