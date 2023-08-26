<template>
  <div class="section-2">
    <h1 class="section-2-header">partners</h1>
    <marquee-text :duration="30">
      <div class="section-2-content">
        <div class="section-2-content-alpha2">
          <img
            v-bind:src="
              require(`../../../assets/PikPng.com_bet-logo-png_2709965.png`)
            "
            height="80"
            width="80"
            alt="logo"
            class="product-logo"
          />
        </div>
        <div class="section-2-content-alpha2">
          <img
            v-bind:src="
              require(`../../../assets/PikPng.com_mckesson-logo-png_5285919.png`)
            "
            height="80"
            width="80"
            alt="logo"
            class="product-logo"
          />
        </div>
        <div class="section-2-content-alpha2">
          <img
            v-bind:src="
              require(`../../../assets/PikPng.com_ps4-logo-png_983171.png`)
            "
            height="80"
            width="80"
            alt="logo"
            class="product-logo"
          />
        </div>
        <div class="section-2-content-alpha2">
          <img
            v-bind:src="
              require(`../../../assets/PikPng.com_yp-logo-png_4193822.png`)
            "
            height="80"
            width="80"
            alt="logo"
            class="product-logo"
          />
        </div>
      </div>
    </marquee-text>
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";
export default {
  name: "TestimonyPartners",
  components: { MarqueeText },
};
</script>



<style scoped>
.section-2 {
  margin-top: 0;
  padding-top: 0;
}
.section-2-header {
  text-align: center;
  font-size: 35px;
  padding-top: 5%;
  font-family: GTEestiProDisplay-Bold, serif;
  color: #071333;
  letter-spacing: 1px;
}

.section-2-content {
  display: flex;
  justify-content: space-between;
  padding-top: 2%;
  font-size: 18px;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
}

.section-2-content-header {
  letter-spacing: 1px;
  padding-top: 5px;
  color: #071333;
  font-family: GTEestiProDisplay-Bold, serif;
}

.section-2-content-alpha {
  padding-right: 10px;
  width: 30%;
  line-height: 20px;
}

img{
  width: 40%;
}

.product-logo {
  width: 75%;
}

h1 {
  font-family: GTEestiProDisplay-Bold, serif;
}

p {
  font-family: GTEestiProDisplay-Bold, serif;
  padding-top: 5px;
  color: #071333;
}
@media (max-width: 990px) {
  .section-2-header{
    font-size: 30px;
  }

  .product-logo {
    width: 70%;
  }

  .section-2-content-alpha2 {
    padding-right: 5px;
    line-height: normal;
  }

  .section-2-content-header {
    font-size: 35px;
  }

  img{
    width: 40%;
  }
  .section-2 {
    margin-bottom: 10px;
    padding-top: 0;
  }
}

@media (max-width: 800px) {
  .section-2-content-alpha {
    display: none;
  }
  .section-2{
    display: none;
  }
}
</style>
