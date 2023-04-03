<template>
  <main class="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 py-2">
    <div class="hero">
      <div class="hero__profil">
        <img
          src="~/assets/img/photocv.jpeg"
          alt="profil image"
          class="profil__image"
        />
      </div>
      <div>
        <h3 class="hero__title">
        Fanny Nhouyvanisvong
      </h3>
      <h5 class="hero__sub-title">{{$t('home.profil.job')}}</h5>
      <p class="hero__description">
        {{$t('home.profil.message')}}
        <nuxt-link
          to="mailto:nhouy.fanny@gmail.com"
          target="__blank"
          class="my-3 flex items-center justify-center button--text rounded-md bg-orange-600 text-white"
        >
        {{$t('home.profil.cta')}}
        </nuxt-link>
      </p>
      </div>
    </div>
    <div class="navigation">
      <ul>
        <li>
          <nuxt-link :to="localePath('/projects')" class="link--hero">
            <div class="button button--hero bg-violet-800">
              <span>Projects</span>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="https://www.linkedin.com/in/fanny-nhouyvanisvong/"
            target="_blank"
            class="link--hero"
          >
            <div class="button button--hero bg-violet-500">
              <span>Linkedin</span>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="https://github.com/FannyNh"
            target="_blank"
            class="link--hero"
          >
            <div class="button button--hero bg-orange-600">
              <span>Github</span>
            </div>
          </nuxt-link>
        </li>
        <li>
          <a
            :href="`${$t('home.navigation.linkResume')}.pdf`"
            target="_blank"
            class="link--hero"
            download
          >
            <div class="button button--hero bg-orange-400">
              <span>{{$t('home.navigation.resume')}}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </main>
</template>
<script setup>
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath()
</script>
<style lang="scss" scoped>
ul {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2;
  li {
    @apply flex justify-center items-center text-center w-full lg:justify-end;
  }
}
.link--hero {
  @apply w-full lg:max-w-xs;
}
.navigation {
  @apply px-5 grid;
}
.hero {
  @apply px-5 text-left flex flex-col justify-center;
  &__description {
    @apply h-auto md:max-h-56 bg-white w-full lg:w-10/12 rounded-md shadow-md lg:shadow-lg shadow-slate-100 my-5 p-6 text-base md:text-lg text-slate-600 flex justify-center flex-col;
  }
  &__profil {
    @apply rounded-full mx-5 mb-5;
    height: 250px;
    width: 250px;
    overflow: hidden;
  }
  &__title {
    @apply text-violet-900 text-xl lg:text-4xl font-black font-mono uppercase;
  }
  &__sub-title {
    @apply text-orange-600 text-xl lg:text-2xl font-bold font-sans;
  }
}

.button {
  border-radius: 0.375rem;
  &--hero {
    height: 100px;
    line-height: 100px;
    width: 208px;
    @apply flex items-center justify-center w-full text-slate-200 transform transition duration-500 hover:scale-105;
    span {
      @apply text-sm lg:text-2xl font-normal;
    }
  }
  &--text {
    @apply w-full h-11 md:max-w-xs;
  }
}
</style>
