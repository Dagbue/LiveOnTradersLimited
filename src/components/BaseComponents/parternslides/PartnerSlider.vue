<template>
  <div id="slider">
    <div class="arrowLeft" @click="arrowLeft()"></div>
    <partner-slides :image="images[chosenImage]" />
    <div class="arrowRight" @click="arrowRight()"></div>
  </div>
</template>

<script>
import PartnerSlides from "./PartnerSlides";
export default {
  name: "PartnerSlider",
  components: { PartnerSlides },
  data() {
    return {
      images: [
        {
          id: 0,
          url: "https://www.pikpng.com/pngl/b/270-2709965_bet365-online-casino-review-bet-365-logo-no.png",
        },
        {
          id: 1,
          img: "https://www.pikpng.com/pngl/b/528-5285919_file-mckesson-logo-svg-mckesson-logo-clipart.png",
        },
        {
          id: 2,
          img: "https://www.pikpng.com/pngl/b/44-443317_download-playstation-logo-transparent-vector-sony-playstation-stencil.png",
        },
        {
          id: 3,
          img: "https://www.pikpng.com/pngl/b/419-4193822_exxonmobile-exxon-mobil-transparent-logo-clipart.png",
        },
        {
          id: 4,
          img: "https://www.pikpng.com/pngl/b/64-646684_budweiser-logo-budweiser-logo-logok-ideas-new-budweiser.png",
        },
      ],
      chosenImage: 0,
      intervalObject: null,
    };
  },
  methods: {
    squares(id) {
      this.chosenImage = id;
      clearInterval(this.intervalObject);
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    arrowLeft() {
      clearInterval(this.intervalObject);
      this.moveLeft();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveLeft();
      }, 6000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveRight();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    moveLeft() {
      var flag = this.chosenImage;
      flag--;
      if (flag < 0) {
        flag = this.images.length - 1;
      }
      this.chosenImage = flag;
    },
    moveRight() {
      var flag = this.chosenImage;
      flag++;
      if (flag >= this.images.length) {
        flag = 0;
      }
      this.chosenImage = flag;
    },
  },
  created() {
    var self = this;
    this.intervalObject = setInterval(() => {
      self.moveLeft();
    }, 6000);
  },
};
</script>

<style scoped>
#slider {
  position: relative;
  overflow: hidden;
}
#slider .arrowLeft,
#slider .arrowRight {
  position: absolute;
  top: 50%;
  border: 20px solid transparent;
}
#slider .arrowLeft {
  border-right-color: #676767;
  z-index: 1;
}
#slider .arrowRight {
  right: 0;
  border-left-color: #676767;
}
#slider .squares div {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: inline-block;
  background-color: #676767;
  border-radius: 50%;
}
</style>
