<template>
  <div>
    <h3 class="header">What Is <span class="global">GLOBAL TRADE EXPRESS</span> Limited</h3>
    <div class="vision">
      <div class="vision-text">
        <p class="vision-text-para">
          GLOBAL TRADE EXPRESS LIMITED is a private limited with share capital
          compant based in Suite 12 Station Court, Townmead Road Fulham, London, SW6 2PY,
          United Kingdom,Which employs 2 people.The company started
          trading on the British market since 209-05-20.Company registration
          number 06911856.
        </p>
        <p class="vision-text-para">
          For 9 Years we have been at the verge of the financial markets,
          trading and helping our investors achieve financial freedom through a
          stream of passive income without breaking a sweat.
        </p>
        <p class="vision-text-para">
          Our company activities fall under professional administration of
          financial markets this gives us the room to manage investments and
          give returns legally throughout UK and the world in general
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatIs",
};
</script>


<style scoped>

div{
  height: 100%;
}

.header {
  color: #676767;
  padding-top: 4%;
  text-align: center;
  padding-bottom: 1%;
  font-family: GTEestiProDisplay-Regular, serif;
  text-transform: uppercase;
  font-weight: bold;
}

.vision {
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 5%;
}

.vision-text {
  line-height: 1.5;
  margin-right: 2%;
  margin-left: 2%;
}

.vision-text-para {
  color: #676767;
  font-size: 18px;
  font-family: GTEestiProDisplay-Regular, serif;
  text-align: center;
}
.global{
  color: #0098da;
}
@media (max-width: 990px){
  .header{
    font-size: 24px;
  }
  .vision-text{
    line-height: unset;
  }
  .vision-text-para{
    font-size: 18px;
  }
}
@media (max-width: 500px){
  .header{
    font-size: 17px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .vision-text-para {
    font-size: 16px;
  }
}
</style>
