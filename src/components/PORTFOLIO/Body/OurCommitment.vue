<template>
  <div>
    <h2 class="header">Our Commitments</h2>
    <div class="vision">

      <div class="vision-image">
        <img :src="`https://cdn.pixabay.com/photo/2020/02/18/08/35/finance-4858797_960_720.jpg`" class="image" alt="vision"/>
      </div>

      <div class="vision-text">
        <p class="vision-text-para">We are committed to creating the most user-friendly trading investment experience
        for all our clients while achieving maximum profitability. We strive to bring the most advanced technology and
        develop new tools to allow traders to trade with confidence and success. In addition to our tools, we also
          ensure that our customer service is of the highest level. Whatever request that you as an investor may make
        we will make every effort to ensure that it will be handled in a timely and professional manner. Join us today
        and experience trading in a greater way</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "OurCommitment"
}
</script>

<style scoped>

div{
  padding-bottom: 40px;
  height: 100%;
}

.header{
  color: #222222;
  font-size: 30px;
  padding-top: 4%;
  padding-left: 38%;
  font-family: GTEestiProDisplay-Bold,serif;
  letter-spacing: 1px;
}

.vision{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 7%;
  padding-right: 11%;
}

.vision-image{
  padding-right: 100px;
  width: 20%;
}
.vision-text{
  line-height: 1.5;
  width: 80%;
  padding-left: 220px;
}

.vision-text-header{
  color: #676767;
}

.vision-text-para{
  color: #222222;
  font-size: 20px;
  font-family: GTEestiProDisplay-Bold,serif;
}

.vision-text-header2{
  color: #676767;
  padding-bottom: 5px;
}

.image{
  width: 280%;
  border-radius: 20px;
  box-shadow: 0 9px 17px rgba(0, 0, 0, 0.9);
}

@media (max-width: 990px){
  .image{
    width: 440%;
  }
  .header{
    font-size: 24px;
    padding-left: 38%;
    margin-top: 15px;
    padding-bottom: unset;
  }
  .vision-text-para{
    font-size: 18px;
  }
  .vision{
    padding-left: 2%;
    padding-right: 5%;
    padding-top: 20px;
    padding-bottom: 0;
  }
}

@media (max-width: 800px){
  .image{
    width: 1200%;
  }
  .header{
    font-size: 28px;
    padding-left: 37%;
  }
  .vision-text-para{
    font-size: 18px;
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
  .vision-image{
    padding-right: unset;
    width: unset;
  }
  .vision-text{
    line-height: 1.5;
    width: unset;
    padding-left: unset;
    text-align: center;
  }
  .header{
    font-size: 28px;
    padding-left: 24%;
    margin-top: 15px;
  }
  .vision-text-para{
    font-size: 17px;
  }
}
</style>
