<template>
  <main class="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 content-center self-center">
    <div class="hero__main p-5 text-left">
      <div class="profil rounded-full m-5">
        <img
          src="~/assets/img/photocv.jpeg"
          alt="profil image"
          class="profil__image"
        />
      </div>
      <h3
        class="
          hero__title
          text-violet-900 text-2xl lg:text-6xl
          font-black font-mono
          uppercase
        "
      >
        Fanny Nhouyvanisvong
      </h3>
      <h5 class="hero__sub-title text-orange-600 text-2xl lg:text-4xl font-bold font-sans">
        Creative and Front-End Developer
      </h5>
      <p
        class="
          hero__description
          bg-white
          w-full
          lg:w-3/5
          rounded-md
          shadow-md shadow-slate-100
          my-5
          p-5
          text-slate-600
        "
      >
        Experimented Front end Developer I worked for : AIRFRANCE, STELLANTIS,
        RENAULT and SHOWROOM PRIVE, and for start-ups : ADventori, TeamInside
        and LOGOTEL.<br/>

        <nuxt-link to="mailto:nhouy.fanny@gmail.com"  target="__blank">
            <div class="button--text  rounded-ml text-orange-600">
              Message Me
            </div>
          </nuxt-link>
      </p>
    </div>
    <div class="navigation p-5 text-center flex justify-center lg:justify-end">
      <ul class="grid grid-cols-1">
        <!-- <li class="flex justify-center items-center">
          <nuxt-link to="/projects">
            <div class="button button--hero bg-violet-800 text-slate-200 m-2 transform transition duration-500 hover:scale-105">
              <span class="text-3xl font-normal">Projects</span>
            </div>
          </nuxt-link>
        </li> -->
        <li class="flex justify-center items-center">
          <nuxt-link
            to="https://www.linkedin.com/in/fanny-nhouyvanisvong-design/"
            target="_blank"
          >
            <div class="button button--hero bg-violet-500 text-slate-200 m-2 transform transition duration-500 hover:scale-105">
              <span class="text-3xl font-normal">Linkedin</span>
            </div>
          </nuxt-link>
        </li>
        <li class="flex justify-center items-center">
          <nuxt-link to="https://github.com/FannyNh" target="_blank">
            <div class="button button--hero bg-orange-600 text-slate-200 m-2 transform transition duration-500 hover:scale-105">
              <span class="text-3xl font-normal">Github</span>
            </div>
          </nuxt-link>
        </li>
        <li class="flex justify-center items-center">
          <nuxt-link
            to="https://drive.google.com/file/d/1NB9uMEngF4lBcWSPgODz0ykahVCGYaHQ/view"
            target="_blank"
          >
            <div class="button button--hero bg-orange-400 text-slate-200 m-2 transform transition duration-500 hover:scale-105">
              <span class="text-3xl font-normal">Resume</span>
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
.hero {
  &__description {

    height: 200px;
  }
}
.profil {
  height: 250px;
  width: 250px;
  overflow: hidden;
}
.button {
  border-radius: 0.375rem;
  &--hero {
    height: 100px;
    line-height: 100px;
    width: 208px;
  }
  &--text{
    height: 40px;
    line-height: 40px;
    width: 100px;
  }
}
</style>