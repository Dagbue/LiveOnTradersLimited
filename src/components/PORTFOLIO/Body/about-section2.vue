<template>
  <div class="alpha">
    <p class="about-text-1">About Company</p>
    <h5 class="about-header-1">We Help Our Clients To Achieve Their Desire Goals</h5>
    <p class="about-text-2"> Live On Traders Limited  is a well-developed, secure, and, dependable digital Investment platform
      based on Bittrex's cutting-edge innovation.</p>
    <div class="about-alpha">
      <div class="about-section-1">


        <div class="box">
          <div class="about-content">
            <div class="about-content-text">
              <p>Live On Traders Limited is a private limited with share capital
                company based in 202-208 12c - Live On Traders, Cheetham Hill Road, Manchester, England, M8 8LW,
                Which employs 2 people.The company started
                trading on the British market since 21 November 2014.Company registration
                number 09321920.For 9 Years we have been at the verge of the financial markets,
                trading and helping our investors achieve financial freedom through a
                stream of passive income without breaking a sweat.Our company activities fall under professional administration of
                financial markets this gives us the room to manage investments and
                give returns legally throughout UK and the world in general .</p>
            </div>
          </div>
        </div>



      </div>

      <div class="about-section-2">
        <img alt="About-Image" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="about-image" />
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "about-section2"
}
</script>

<style scoped>
.alpha{
  background-color: #f0f2f4;
}

.about-alpha{
  display: flex;
  flex-direction: row-reverse;
  padding-bottom: 5%;
}
.about-image{
  width: 90%;
  border-radius: 25px;
  box-shadow: 0 0 30px rgba(20, 49, 89, 0.4);
  margin-left: 10%;
  margin-top: 6%;
}
.about-content{
  display: flex;
  padding-top: 15px;
  padding-right: 25px;
}
.about-content-text{
  padding-left: 20px;
  margin-top: 3%;
  font-family: GTEestiProDisplay-Bold, serif;
}
.about-content-text p{
  font-size: 20px;
  line-height: 1.5;
  color: #222222;
  font-family: GTEestiProDisplay-Bold, serif;
}
.about-section-1{
  width: 80%;
  padding-right: 7%;
  color: #222222;
  font-family: GTEestiProDisplay-Regular, serif;
}

.box{
  /*box-shadow: 0 0 20px rgba(20, 49, 89, 0.4);*/
  /*padding: 15px;*/
  /*border-radius: 15px;*/
  /*margin-bottom: 12px;*/
  margin-top: 5%;
  margin-left: 10%;
  position: relative;
  /*background-color: white;*/
}


.about-text-1{
  text-align: center;
  font-size: 32px;
  color: #222222;
  font-weight: bold;
  padding-top: 4%;
  font-family: GTEestiProDisplay-Bold, serif;
}

.about-header-1{
  text-align: center;
  font-weight: bold;
  font-family: GTEestiProDisplay-Regular, serif;
}


.header-button{
  padding: 15px 50px;
  background-color: #222222;
  border: #222222;
  border-radius: 15px;
  margin-top: 5px;
  color: white;
  margin-left: 40px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.header-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.9);
  transition: 4ms ease-in;
}
.header-button:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
  transition: 4ms ease-in;
}


i{
  font-size: 35px;
  color: #222222;
  padding-right: 15px;
}

.about-content-text h4{
  font-size: 25px;
  color: #222222;
}
.about-text-2{
  text-align: center;
  font-size: 17px;
  color: rgba(125, 144, 184, 1);
}

@media (max-width: 990px) {
  .about-alpha{
    display: flex;
    margin-left: 18%;
    flex-direction: column-reverse;
  }
  .about-section-2{
    padding-left: 1%;
  }
  .about-image{
    width: 63%;
    height: 30%;
    margin-left: 8%;
    margin-top: unset;
  }
  .about-text-2{
    width: 90%;
    margin-left: 4%;
  }
}

@media (max-width: 500px) {
  .box{
    padding: 10px;
    margin-left: unset;
  }
  .about-section-1{
    width: 100%;
    padding-right: 7%;
  }
  .about-alpha{
    margin-left: 10%;
  }
  .about-section-2{
    padding-left: unset;
  }
  .about-image{
    width: 90%;
    height: 30%;
    margin-left: 2%;
  }
  .about-text-2{
    width: 90%;
    margin-left: 4%;
  }
}
</style>

