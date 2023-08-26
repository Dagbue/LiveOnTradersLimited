<template>
  <div class="download-app-container">
    <div class="download-app-intro">
      <p class="download-intro">Ready To Work with Us</p>
     <div class="seperate">
       <i class='bx bxs-phone'></i>&nbsp;&nbsp;
       <p class="download-sub">+44 3300010876</p>
     </div>
      <div class="seperate">
        <i class='bx bx-mail-send' ></i>&nbsp;&nbsp;
        <a href="mailto:support@liveontradersltd.com" class="download-sub">support@liveontradersltd.com</a>
      </div>
      <div class="seperate">
        <i class='bx bxs-home' ></i>&nbsp;&nbsp;
      <p class="download-sub">202-208 12c - Live On Traders, Cheetham Hill Road, Manchester, England, M8 8LW</p>
      </div>
      <div class="app-store-container">
      </div>
    </div>
    <div class="download-app-image">
      <img src="@/assets/boxes.svg" alt="logo"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs"
}
</script>

<style scoped>
.download-app-container{
  background-color: #071333;;
  display: flex;
  justify-content: space-around;
  height: 350px;
  margin-top: 5%;
  margin-left: 12%;
  margin-right: 12%;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
}
.download-app-intro{
  font-family: GTEestiProDisplay-Regular,serif;
  padding-top: 20px;
}


.download-intro{
  font-size: 30px;
  line-height: 50px;
  color: white;
}

.seperate{
  display: flex;
}

i{
  padding-top: 2%;
  font-size: 25px;
  color: #fff;
}

.download-sub{
  color: #9CABCB;
  font-size:18px;
  line-height: 28px;
  padding-top: 2%;
  font-family: GTEestiProDisplay-Regular,serif;
}

@media (max-width: 990px) {
  .download-intro {
    font-size: 24px;
    line-height: normal;
  }
  .download-sub{
    font-size: 17px;
    line-height: normal;
    padding-top: unset;
  }
  .download-app-container{
    height: 250px;
    padding-top: 29px;
  }
  img{
    width: 110%;
  }
}

@media (max-width: 500px){
  .download-app-container {
    display: none;
  }
}

</style>

