<template>
  <div class="slides">
    <div class="slideParent" :key="image.id">
      <div class="slideImage" :style="setBackgroundImage"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnerSlides",
  props: ["image"],
  computed: {
    setBackgroundImage() {
      return { backgroundImage: "url(" + this.image.url + ")" };
    },
  },
};
</script>

<style scoped>
.slides .slideParent {
  height: 70vh;
  width: 100%;
}
.slides .slideImage {
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /*animation-fill-mode: forwards;*/
  /*animation-name: zoom;*/
  /*animation-duration: 4s;*/
  /*animation-iteration-count: 1;*/
}
/*@keyframes zoom {*/
/*  from {*/
/*    transform: scale(1);*/
/*  }*/
/*  to {*/
/*    transform: scale(1.1);*/
/*  }*/
/*}*/
.slideTitle {
  color: white;
  height: 100vh;
}

.slideTitle h2 {
  padding-top: 10%;
  margin-left: 15%;
  margin-right: 45%;
  font-size: 45px;
  font-weight: bold;
}

.slideTitle p {
  margin-left: 15%;
  margin-right: 45%;
  font-size: 18px;
  line-height: 2;
}

.slideTitle a {
  margin-left: 15%;
  margin-right: 45%;
  line-height: 2;
}

/*.fade-enter-active {*/
/*  animation-name: fadeEnter;*/
/*  animation-duration: 1s;*/
/*  animation-iteration-count: 1;*/
/*}*/
/*.fade-move {*/
/*  transition: all 1s;*/
/*}*/
/*.fade-leave-active {*/
/*  animation-name: fadeLeave;*/
/*  animation-duration: 1s;*/
/*  animation-iteration-count: 1;*/
/*  position: absolute;*/
/*}*/
/*@keyframes fadeEnter {*/
/*  from {*/
/*    opacity: 0;*/
/*  }*/
/*  to {*/
/*    opacity: 1;*/
/*  }*/
/*}*/
/*@keyframes fadeLeave {*/
/*  from {*/
/*    opacity: 1;*/
/*  }*/
/*  to {*/
/*    opacity: 0;*/
/*  }*/
/*}*/

/*.btn:link,*/
/*.btn:visited {*/
/*  text-transform: uppercase;*/
/*  text-decoration: none;*/
/*  padding: 10px 20px;*/
/*  display: inline-block;*/
/*  !*border-radius: 100px;*!*/
/*  transition: all 0.2s;*/
/*  position: relative;*/
/*}*/
/*.btn:hover {*/
/*  transform: translateY(-3px);*/
/*  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);*/
/*}*/
/*.btn:active {*/
/*  transform: translateY(-1px);*/
/*  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);*/
/*}*/
/*.btn-white {*/
/*  background-color: #0098da;*/
/*  color: white;*/
/*  font-size: 14px;*/
/*}*/
</style>
