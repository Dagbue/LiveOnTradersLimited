<template>
<div class="alpha">
  <p class="section-header-1">Reassurance</p>
  <p class="section-header">Your money is in safe hands</p>
  <div class="section-2-content">
    <div class="section-2-content-alpha">
      <img src="@/assets/first.png" alt="logo"/>
      <h3 class="section-2-content-header">Registered Company</h3>
      <p>Live On Traders Limited is a fully registered company. Live On Traders Limited has its FCA and PRA licensing, and We abide by the
         rules and regulations by host nations.</p>
    </div>
    <div class="section-2-content-alpha">
      <img src="@/assets/second.png" alt="logo"/>
      <h3 class="section-2-content-header">Security Conscious</h3>
      <p>Security comes first! your personal information and trading activities are encrypted and can't be accessed by
        third party companies. All your activities here are protected.</p>
      <a @click.prevent="onPostClick" class="btn btn-white btn-animated">CREATE ACCOUNT</a>
    </div>
    <div class="section-2-content-alpha">
      <img src="@/assets/last.png" alt="logo"/>
      <h3 class="section-2-content-header">World Class System</h3>
      <p>Semi-automated trading system that guarantees daily return on investment. Tested and trusted by thousands of
         users. Our support is available 24/7 to assist you and answer your questions.</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "reassurance",
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.alpha{
  background-color: #f0f2f4;
}

.section-header{
  font-size: 25px;
  color: rgba(125, 144, 184, 1);
  text-align: center;
  font-weight: 300;
  font-family: GTEestiProDisplay-Bold, serif;
}
.section-header-1{
  font-size: 32px;
  color: #D23535;
  font-weight: bold;
  padding-top: 3%;
  padding-bottom: 0;
  margin-bottom: 0;
  letter-spacing: 1px;
  text-align: center;
  font-family: GTEestiProDisplay-Regular, serif;
}

img{
  width: 23%;
}

.section-2-content{
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  text-align: center;
  padding: 3% 8% 5%;
  color: #676767;
  margin-top: 0;
}


.section-2-content-header{
  font-size: 28px;
  padding-top: 20px;
  font-family: GTEestiProDisplay-Regular,serif;
  font-weight: bold;
  color: #D23535;
}

p{
  font-family: GTEestiProDisplay-Light,serif;
  padding-top: 10px;
  line-height: 1.5;
  color: #676767;
}

.section-2-content-alpha{
  padding-right: 15px;
  width: 33%;
  line-height: 27px;
}

.btn:link,
.btn:visited {
}
.btn:hover {
  background-color: #222222;
  border-color: #222222;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
}
.btn:active {
  background-color: #D23535;
  border-color: #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.6);
}

.btn-white {
  background-color: #D23535;
  border: #D23535;
  color: white;
  font-size: 15px;
  font-family: GTEestiProDisplay-Regular,serif;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 50px;
  margin-top: 10%;
  display: inline-block;
  transition: all .2s;
  position: relative;
  border-radius: 15px;
}

@media (max-width: 990px) {
  .section-2-header{
    font-size: 25px;
  }
  img{
    width: 28%;
  }
  .section-2-content-header{
    font-size: 25px;
  }
  p{
    font-size: 16px;
  }
}

@media (max-width: 550px) {
  .section-2-content{
    display: block;
    height: 100%;
  }
  .section-2-content-alpha{
    width: unset;
  }
  .section-2{
    height: 100%;
  }
  .btn-white {
    display: none;
  }
  .section-2-header{
    font-size: 18px;
    padding-top: 20px;
  }
  .section-2-content-header{
    font-size: 19px;
    padding-top: 25px;
  }
}

</style>