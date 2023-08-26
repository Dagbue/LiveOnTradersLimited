<template>
  <div>
    <div class="landing-page-testimonial">
      <div class="landing-page-testimonial-header">
        <p class="landing-page-testimonial-header-two">
          Here's what people had to say about <span class="global">Global Trade Express</span> Limited
        </p>
      </div>
      <div class="landing-page-testimonial-body">
          <img class="testimony-image" src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="testimonial" />
        <div class="landing-page-testimonial-text">
          <p class="one">
            Global Trade Express Limited is the revelation, never has earning passive income been so easy to do and
            manage, from my mobile phone I earn daily and can withdraw anytime.I love this company
          </p>
          <p class="two">Greg A. Bartling</p>
        </div>
      </div>

      <div class="landing-page-testimonial-body-2">
        <img class="testimony-image" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="testimonial" />
        <div class="landing-page-testimonial-text">
          <p class="one">
            My only regret is not joining Global Trade Express Limited earlier, when I first learnt about it, but it's better late
            than never.and I have my whole family on this ship too sailing to financial freedom
          </p>
          <p class="two">Cheryl  w. Gill</p>
        </div>
      </div>

      <div class="landing-page-testimonial-body">
        <img class="testimony-image" src="https://images.unsplash.com/photo-1603707281027-aeaec3d0ecbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="testimonial" />
        <div class="landing-page-testimonial-text">
          <p class="one">
            Being with the right team is the best thing ever.My dad always told me to never retire until
            I was able to earn even during retirement and with the inflation in the price of real estate,
            investing in cryptocurrency was my only option and Global Trade Express came through.
            I was scared my retirement years would be hard, but right now, it's the best time of my life.
          </p>
          <p class="two">Lincoln Brown</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonyCards",
}
</script>

<style scoped>

.landing-page-testimonial{
  padding: 0 8%;
  background-color: rgba(247, 247, 249, 1);
}

.landing-page-testimonial-header {
  font-family: GTEestiProDisplay-Regular sans-serif;
  font-size: 40px;
  color: #192850;
  line-height: 44px;
}

.landing-page-testimonial-header{
  text-align: center;
  padding-top: 80px;
}


.landing-page-testimonial-header-two{
  font-family: GTEestiProDisplay-Light, sans-serif;
  font-size: 23px;
  line-height: 24px;
  text-align: center;
  color: #676767;
  margin: 0;
}

.testimony-image{
  width: 33%;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.landing-page-testimonial-body{
  display: flex;
  margin-top: 6%;
  padding-bottom: 3%;
}

.landing-page-testimonial-body-2{
  display: flex;
  margin-top: 6%;
  padding-bottom: 3%;
  flex-direction: row-reverse;
}

.landing-page-testimonial-text {
  padding-left: 4%;
  padding-right: 2%;
  padding-top: 50px;
}

.landing-page-testimonial-text .one{
  font-family: GTEestiProDisplay-Regular, sans-serif;
  font-size: 22px;
  line-height: 32px;
  color: rgba(25, 40, 80, 1);
  margin: 0;
}

.landing-page-testimonial-text .two{
  font-family: GTEestiProDisplay-Regular, sans-serif;
  font-size: 20px;
  line-height: 21px;
  letter-spacing: 0;
  text-align: left;
  color: rgba(125, 144, 184, 1);
  padding-bottom: 40px;
  padding-top: 20px;
  margin: 0;
  font-weight: 700;
}

.landing-page-testimonial button{
  padding-right: 20px;
  outline: none;
  border: none;
  background: transparent;
  transition:  0.3s ease-in;
}

.landing-page-testimonial button:hover, .landing-page-testimonial button:focus {
  transform: scale(1.2);
}
.global{
  color: #0098da;
  font-weight: 700;
}
@media (max-width: 990px) {
  .testimony-image{
    width: 50%;
    height: 100%;
    margin-top: 50px;
  }
}
@media (max-width: 500px){
  .landing-page-testimonial-header-two{
    font-size: 20px;
    text-align: center;
  }
  .landing-page-testimonial-body{
    display: block;
  }
  .landing-page-testimonial-body-2{
    display: block;
    flex-direction: unset;
  }
  .testimony-image{
    width: 90%;
    margin-left: 22px;
  }
  .landing-page-testimonial-text .one{
    font-size: 18px;
    line-height: 28px;
    text-align: center;
  }
  .landing-page-testimonial-text .two{
    text-align: center;
    font-size: 18px;
  }

}
</style>

