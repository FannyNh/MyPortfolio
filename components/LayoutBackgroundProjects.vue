<template>
  <div
    class="circles absolute h-screen fixed min-w-full flex justify-between items-center"
  >
    <div id="research" class="circle research"></div>
    <div id ="design" class="circle design"></div>
  </div>
</template>

<script >
</script>


<style lang="scss" scoped>

.circles {
  top: 0;
  backface-visibility: hidden;
  perspective: 1000;
}

.circle {
  position: relative;
  width: 1px;
  height: 1px;
  margin: calc(var(240px) / 2);
  border-radius: 50%;
  backface-visibility: hidden;
  perspective: 1000;
  opacity: 0.9;
}

.circle.design {
  box-shadow: 0 0 240px 240px #f97416b2;

  // animation-play-state: paused;
}

.circle.research {
  box-shadow: 0 0 240px 240px #5a21b6a7;
  // animation-play-state: paused;
}

.circle.research.animationRunning {
  animation-name: changeColorResearch;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  animation-play-state: running ;
}
.circle.design.animationRunning {
  animation-name: changeColorDesign;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: running ;
}

@keyframes changeColorDesign {
  0% {
    box-shadow: 0 0 240px 240px #f97416b2;
  }
  100% {
    box-shadow: 0 0 240px 240px #5a21b6a7;
  }
}
@keyframes changeColorResearch {
  0% {
    box-shadow: 0 0 240px 240px #5a21b6a7;
  }
  100% {
    box-shadow: 0 0 240px 240px #f97416b2;
  }
}
</style>