<template>
<div class="video-bene">
  <div class="section-1">
    <h2 class="heading-primary-main-1">Why Invest With Bitcoin?</h2>

    <section class="video">
      <iframe width="660" height="415" src="https://www.youtube.com/embed/YIVAluSL9SU" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture" allowfullscreen>

      </iframe>
    </section>

  </div>
  <div class="section-2">


    <div class="text-box">
      <h3 class="heading-primary-main">Our Investment Principles</h3>
      <p class="heading-primary">
        <span class="heading-primary-sub">Our goal is to maximize investor return and minimize any potential loss by
          applying these principles in a disciplined and pragmatic process. We rely on facts, not speculation to
          purchase high return, predictable companies at significant discounts to intrinsic values </span>
      </p>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "BenefitVideo"
}
</script>

<style scoped>
.text-box{
  padding-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 4%;
  color: #676767;
  font-family: GTEestiProDisplay-Regular,serif;
}
.heading-primary {
  text-align: center;
  font-size: 17px;
}
.heading-primary-main {
  text-align: center;
  padding-top: 2%;
  padding-bottom: 2%;
  font-family: GTEestiProDisplay-Regular,serif;
  font-weight: bold;
}
.heading-primary-main-1 {
  text-align: center;
  font-size: 22px;
  padding-top: 5%;
  padding-bottom: 5%;
  font-family: GTEestiProDisplay-Regular,serif;
  color: #676767;
  text-transform: uppercase;
  font-weight: bold;
}
.heading-primary-sub {
  padding-left: 5%;
  padding-right: 10%;
  line-height: 1.5;
  font-family: GTEestiProDisplay-Light,serif;
  font-size: 17px;
}

.video{
  padding-left: 6%;
  padding-right: 3%;
}

iframe{
  max-width: 100%;
}
.section-1{
  display: flex;
  flex-direction: column;
  align-content: center;
}



@media (max-width: 990px) {
  .heading-primary-main-1{
    font-size: 22px;
  }
  .heading-primary-main{
    font-size: 24px;
  }
}

@media (max-width: 400px) {
  .heading-primary-main-1{
    font-size: 17px;
  }
  .heading-primary-main{
    font-size: 21px;
  }
  .text-box{
    padding-bottom: 5%;
  }
}

</style>

