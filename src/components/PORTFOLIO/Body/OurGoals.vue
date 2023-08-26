<template>
  <div>
    <h1 class="header">Our Goals</h1>
    <div class="vision">

      <div class="vision-text">
        <p class="vision-text-para">We strive to be at the forefront of the financial market,providing our clients the
          latest technology and most profitable options in the industry. Our clients success is our top priority and
        our constantly expanding asset index is proof of that commitment. Our goal is to make trading in cryptocurrency,
        stocks,forex and other commodities profitable for every single one of our clients Live On Traders Limited
        was established as a way for people who wish to earn from the ever growing and profitable financial markets and
          break free from the norm of a 9-5 job but do not have the sufficient knowledge to trade by themselves this is
        achievable through our expertise. Our investment plan endeavour to make the trading process as simple and
        profitable as possible </p>
      </div>

      <div class="vision-image">
        <img :src="`https://cdn.pixabay.com/photo/2020/01/22/09/38/meeting-4784909_960_720.jpg`" class="image" alt="vision"/>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "OurGoals"
}
</script>

<style scoped>
div{
  background-color: rgba(242, 250, 253, 0.3);
  padding-top: 10px;
  padding-bottom: 10px;
  height: 100%;
}

.header{
  color: #222222;
  font-size: 30px;
  padding-top: 2%;
  padding-left: 36%;
  font-family: GTEestiProDisplay-Bold,serif;
  padding-bottom: 0;
  margin-bottom: 0;
}

.vision{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 7%;
  padding-right: 11%;
  padding-top: 0;
  margin-top: 0;
}

.vision-image{
  padding-right: 180px;
  margin-left: 20px;
}


.vision-text-para{
  color: #222222;
  font-size: 19px;
  font-family: GTEestiProDisplay-Bold,serif;
  line-height: 1.8;
  margin-right: 10%;
  margin-top: 0;
  padding-top: 0;
}

.image{
  width: 300%;
  border-radius: 20px;
  box-shadow: 0 9px 17px rgba(0, 0, 0, 0.9);
}

@media (max-width: 990px){
  .image{
    width: 440%;
  }
  .header{
    font-size: 23px;
    padding-left: 45%;
    padding-bottom: unset;
  }
  .vision-text-para{
    font-size: 18px;
    line-height: 1.5;
  }
  .vision{
    padding-left: 7%;
    padding-right: 12%;
  }
}

@media (max-width: 800px){
  .image{
    width: 490%;
  }
  .header{
    font-size: 18px;
    padding-left: 40%;
  }
  .vision-text-para{
    font-size: 17px;
    line-height: 1.5;
  }
  .vision{
    padding-left: 7%;
    padding-right: 12%;
  }
}

@media (max-width: 500px){
  .vision{
    display: block;
  }
  .image{
    width: 100%;
  }
  .vision-text{
    text-align: center;
    padding-top: 0;
  }
  .vision-image{
    padding-right: unset;
    margin-left: unset;
  }
  .header{
    font-size: 28px;
    padding-left: 36%;
    margin-bottom: 2%;
  }
  .vision-text-para{
    font-size: 17px;
    line-height: 1.6;
    margin-right: unset;
  }
}

</style>

