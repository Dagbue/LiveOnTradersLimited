
<template>
  <div class="section-2">
    <h1 class="section-2-header">Benefits of Investing with us</h1>
    <div class="section-2-content">
      <div class="section-2-content-alpha">
        <img src="https://img.icons8.com/office/512/deposit.png" alt="logo"/>
        <h3 class="section-2-content-header">Fast Deposit</h3>
        <p>To make a deposit, please log in to your account Dashbaord.</p>
      </div>
      <div class="section-2-content-alpha">
        <img src="https://img.icons8.com/plasticine/512/24-hours-day-support.png" alt="logo"/>
        <h3 class="section-2-content-header">Efficient Support</h3>
        <p>To ensure we give you the best of what we have to offer, we have taken time to select well
          experienced customer care agents .</p>
        <a @click.prevent="onPostClick" class="btn btn-white btn-animated">CREATE ACCOUNT</a>
      </div>
      <div class="section-2-content-alpha">
        <img src="https://img.icons8.com/office/512/withdrawal.png" alt="logo"/>
        <h3 class="section-2-content-header">Instant Withdrawal</h3>
        <p>Instant Withdrawal With the Instant Withdrawal option, your money saved in Digit can arrive back
           to your bank account in a matter of minutes</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BenefitInvesting",
  methods: {
    onPostClick() {
      this.$router.push('/register');
      window.scrollTo(0, 0);
    }
  },
}
</script>

<style scoped>
.section-2{
  height: 100%;
}

.section-2-header{
  text-align: center;
  padding-top: 5%;
  font-size: 29px;
  background-color: rgba(242, 250, 253, 0.6);
  font-family: GTEestiProDisplay-Bold,serif;
  color: #071333;
  margin-bottom: 0;
}

.section-2-content{
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  text-align: center;
  padding: 3% 8% 5%;
  background-color: rgba(242, 250, 253, 0.6);
  color: #071333;
  margin-top: 0;
}


.section-2-content-header{
  font-size: 24px;
  letter-spacing: 1px;
  padding-top: 20px;
  font-family: GTEestiProDisplay-Regular,serif;
  font-weight: bold;
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

img{
  width: 35%;
}

.btn:link,
.btn:visited {
}
.btn:hover {
  background-color: #222222;
  border-color: #222222;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}
.btn:active {
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
}
.btn-white {
  background-color: #D23535;
  border-color: #D23535;
  color: white;
  font-size: 15px;
  font-family: GTEestiProDisplay-Regular,serif;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 20px;
  margin-top: 10%;
  display: inline-block;
  transition: all .2s;
  position: relative;
  border-radius: 12px;
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
