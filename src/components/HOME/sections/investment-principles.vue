<template>
  <div class="section-2">

    <div class="text-box-2">
      <h4 class="benefit-header">Benefits & Risks</h4>
      <p class="benefit-text">Advantages of Managed Funds The benefits of using managed funds include the ability to gain exposure to
         different asset classes and market sectors.</p>
      <ul class="list-alpha">

        <li class="list-item">Diversification</li>
        <li class="list-item"> Potential wealth generation</li>
        <li class="list-item">Cost-effective investment</li>
         <li class="list-item"> Access to a range of assets</li>
         <li class="list-item">Geared exposure</li>
          <li class="list-item">Underperforming investments</li>
      </ul>

      <p class="benefit-text">You don't need to be an expert to build your Investment portfolio and digital wealth Investing in
        cryptocurrency can be intimidating, especially for beginners. Sometimes managing a crypto investment is
        daunting due to the uncertainty and volatility of the market, as well as the time investment needed to be
        successful.
      </p>



    </div>

    <div class="text-box">

      <h4 class="heading-primary-main-2">Why Invest With Bitcoin?</h4>
      <section class="video">
        <iframe width="770" height="400" src="https://www.youtube.com/embed/YIVAluSL9SU" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture" allowfullscreen>

        </iframe>
      </section>

      <div class="heading-primary">
        <p class="heading-primary-main">Our Investment Principles</p>
        <p class="heading-primary-sub">Our goal is to maximize investor return and minimize any potential loss by
          applying these principles in a disciplined and pragmatic process. We rely on facts, not speculation to
          purchase high return, predictable companies at significant discounts to intrinsic values</p>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "investment-principles"
}
</script>

<style scoped>
.section-2 {
  font-size: 16px;
  line-height: 1.7;
  color: #eee;
  height: 100vh;
  background-image:
      linear-gradient(to right bottom,
      rgba(5, 5, 33, 0.92),
      rgba(5, 5, 33, 0.92)),
      url("https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
}

.text-box {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.heading-primary-main {
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #D23535;
  font-family: GTEestiProDisplay-Regular,serif;
  letter-spacing: 1px;
  padding-bottom: 0;
}
.heading-primary-main-2{
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #D23535;
  font-family: GTEestiProDisplay-Regular,serif;
  letter-spacing: 1px;
  padding-bottom: 10px;
}

.heading-primary-sub {
  font-size: 17px;
  font-weight: 400;
  color: white;
  padding-left: 15%;
  padding-right: 15%;
  font-family: GTEestiProDisplay-Regular,serif;
}



iframe{
  width: 70%;
}

.text-box{
  width: 50%;
  margin-top: 3%;
}

.text-box-2{
  width: 50%;
  text-align: center;
  margin-top: 3%;
}
.benefit-header{
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #D23535;
  font-family: GTEestiProDisplay-Regular,serif;
  letter-spacing: 1px;
  padding-bottom: 10px;
}

.benefit-text{
  font-size: 18px;
  font-weight: 400;
  color: white;
  padding-left: 5%;
  padding-right: 5%;
  font-family: GTEestiProDisplay-Regular,serif;
}


.list-alpha{
  list-style: none;
  font-weight: bold;
  font-family: GTEestiProDisplay-Regular,serif;
  font-size: 18px;
  margin-top: 2%;
  margin-bottom: 6%;
}

.list-item{
  display: grid;
  place-items: center;
  position: relative;
  height: 40px;
  width: 55%;
  background: white;
  color: #071333;
  border-radius: 7px;
  margin-bottom: 15px;
  margin-left: 19%;
  font-family: GTEestiProDisplay-Regular, serif;
}

.list-item::before{
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  background: white;
  width: 12px;
  height: 12px;
  transform: translate(-50%,-50%) rotate(45deg);
}

@media (max-width: 990px) {
  .section-2 {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .text-box-2{
    width: 100%;
    text-align: center;
    margin-top: 3%;
  }
  .text-box{
    width: 100%;
    text-align: center;
    margin-top: 3%;
  }
}

</style>
