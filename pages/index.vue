<template>
  <main class="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 py-2">
    <div class="hero">
      <div class="hero__profil ">
        <img
          src="~/assets/img/photocv.jpeg"
          alt="profil image"
          class="profil__image"
        />
      </div>
      <h3 class="hero__title">
        Fanny Nhouyvanisvong
      </h3>
      <h5 class="hero__sub-title">
        Creative and Front-End Developer
      </h5>
      <p class="hero__description">
        Experimented Front end Developer I worked for : AIRFRANCE, STELLANTIS,
        RENAULT and SHOWROOM PRIVE, and for start-ups : ADventori, TeamInside
        and LOGOTEL.<br/>

        <nuxt-link to="mailto:nhouy.fanny@gmail.com"  target="__blank" class="my-3 flex items-center justify-center button--text   rounded-md bg-orange-600 text-white">
              Message Me
          </nuxt-link>
      </p>
    </div>
    <div class="navigation">
      <ul>
        <li>
          <nuxt-link to="/projects" class="link--hero">
            <div class="button button--hero bg-violet-800">
              <span>Projects</span>
            </div>
          </nuxt-link>
        </li>
        <li >
          <nuxt-link
            to="https://www.linkedin.com/in/fanny-nhouyvanisvong-design/"
            target="_blank"
            class="link--hero"
          >
            <div class="button button--hero bg-violet-500 ">
              <span>Linkedin</span>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="https://github.com/FannyNh" target="_blank" class="link--hero">
            <div class="button button--hero bg-orange-600 ">
              <span>Github</span>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="https://drive.google.com/file/d/1NB9uMEngF4lBcWSPgODz0ykahVCGYaHQ/view"
            target="_blank"
            class="link--hero"
          >
            <div class="button button--hero bg-orange-400 ">
              <span >Resume</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
export default {
  name: "IndexPage",
};
</script>
<style lang="scss" scoped>
ul{
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2;
  li{
    @apply flex justify-center items-center text-center w-full lg:justify-end
  }
}
.link--hero{
  @apply  w-full lg:max-w-xs;
}
.navigation{
  @apply px-5 grid;
}
.hero {
  @apply px-5 text-left grid;
  &__description {
  @apply h-auto md:max-h-56 bg-white w-full lg:w-11/12 rounded-md shadow-md lg:shadow-lg shadow-slate-100 my-5 p-6 text-base md:text-lg text-slate-600 flex justify-center flex-col
  }
  &__profil {
    @apply rounded-full mx-5 mb-5;
  height: 250px;
  width: 250px;
  overflow: hidden;
}
&__title{
 @apply text-violet-900 text-2xl lg:text-6xl font-black font-mono uppercase;
}
&__sub-title{
 @apply text-orange-600 text-2xl lg:text-4xl font-bold font-sans;
}
}

.button {
  border-radius: 0.375rem;
  &--hero {
    height: 100px;
    line-height: 100px;
    width: 208px;
    @apply flex items-center justify-center w-full text-slate-200 transform transition duration-500 hover:scale-105;
    span{
@apply text-3xl font-normal;
    }
  }
  &--text{
    @apply w-full h-11 md:max-w-xs;
  }
}
</style>