<template>
    <div class="circles h-screen md:h-2/6  fixed min-w-full">
    <div class="circle research bg-violet-800 "></div>
    <div class="circle design bg-orange-500"></div>
  </div>
</template>
<style lang="scss" scoped>


.circles {
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: rotate;
  animation-duration: 25s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  backface-visibility: hidden;
  perspective: 1000;
}

.circle {
  position: relative;
  width: 1px;
  height: 1px;
  margin: calc( var(240px) / 2 );
  border-radius: 50%;
  backface-visibility: hidden;
  perspective: 1000;
  opacity: .9;
}

.circle.design {
  box-shadow: 0 0 240px 240px #f97416b2;
  animation-name: float;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.circle.research {
  box-shadow: 0 0 240px 240px #5a21b6a7;
  animation-name: float;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

@keyframes float {
  0%   { transform: translateX( calc( 240px * 0.0 ) ) translateZ( 0 ) }
  20%  { transform: translateX( calc( 240px * 0.5 ) ) translateZ( 0 ) }
  40%  { transform: translateX( calc( 240px * 1.0 ) ) translateZ( 0 ) }
  60%  { transform: translateX( calc( 240px * 1.5 ) ) translateZ( 0 ) }
  80%  { transform: translateX( calc( 240px * 0.5 ) ) translateZ( 0 ) }
  100% { transform: translateX( calc( 240px * 0.0 ) ) translateZ( 0 ) }
}

@keyframes rotate {
  0%   { transform: rotate( 0deg )   translateZ( 0 ) }
  100% { transform: rotate( 360deg ) translateZ( 0 ) }
}
</style>