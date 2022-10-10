
<template>
  <Splide  :options="options" aria-label="My Favorite Images" class="slider">
    <SplideSlide v-for="image of images" :key="image.id">
      <img :src="`/assets/images/${image.src}`" :alt="image.alt">
    </SplideSlide>
  </Splide>
</template>

<script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';
  defineProps({
    title: {
      type: String,
      default: 'Default title'
    },
    images: {
      type: Object,
    }
  })
  const options = {
      rewind : true,
      perPage: 1,
      gap    : '1rem',
      height : '15rem',
      breakpoints: {
        1000: {
          perPage: 1,
        },
      },
    };
</script>
<style>
  .slider {
    @apply my-5;
    height: 600px;
  }
  .splide__slide {
    background: #f1f5f9
;
    height: 600px !important;
  }
  .splide__slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .splide--nav {
    margin-top: 1rem;
  }
  .splide__arrow {
    background-color: var(--secondary);
  }
  .splide__arrow svg{
    fill: var(--primary);
  } 
  </style>