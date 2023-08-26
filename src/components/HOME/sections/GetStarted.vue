<template>
  <div class="section-2">
    <h1 class="section-2-header">How To Get Started</h1>
    <div class="section-2-content">
      <div class="section-2-content-alpha">
        <img src="https://img.icons8.com/color/96/000000/user-female-circle--v1.png" alt="logo"/>
        <h3 class="section-2-content-header">Create Account</h3>
      </div>
      <div class="section-2-content-alpha">
        <img src="https://img.icons8.com/color/96/000000/data-arrived.png" alt="logo"/>
        <h3 class="section-2-content-header">Verify your Account</h3>
      </div>
      <div class="section-2-content-alpha">
        <img src="https://img.icons8.com/color/100/000000/choose.png" alt="logo"/>
        <h3 class="section-2-content-header">Choose an Investment Plan</h3>
      </div>
      <div class="section-2-content-alpha">
        <img src="https://img.icons8.com/color/100/000000/initiate-money-transfer.png" alt="logo"/>
        <h3 class="section-2-content-header">Deposit into your Investment Account</h3>
      </div>
    </div>
    <a @click.prevent="onPostClick" class="btn btn-white btn-animated">GET STARTED</a>
  </div>
</template>

<script>
export default {
  name: "GetStarted",
  methods: {
    onPostClick() {
      this.$router.push('/register');
      window.scrollTo(0, 0);
    }
  },
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
      rgba(5, 5, 33, 0.89),
      rgba(5, 5, 33, 0.89)),
      url("https://images.unsplash.com/photo-1641437742032-59968473af20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 90vh, 0 90%);
  margin-bottom: 0;
  padding-bottom: 10px;
}
.section-2-header{
  text-align: center;
  padding-top: 7%;
  font-size: 30px;
  font-family: GTEestiProDisplay-Regular,serif;
  text-transform: uppercase;
}

.section-2-content{
  display: flex;
  justify-content: space-between;
  padding-top: 3%;
  font-size: 16px;
  text-align: center;
  padding-left: 8%;
  padding-right: 8%;
}

.section-2-content-header{
  font-size: 16px;
  letter-spacing: 1px;
  padding-top: 20px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: GTEestiProDisplay-Regular,serif;
}

.section-2-content-alpha{
  padding-right: 10px;
  width: 33%;
  line-height: 20px;

}

.btn:link,
.btn:visited {
}
.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background-color: #0098da;
  color: white;
}
.btn:active {
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
}
.btn-white {
  background-color: rgba(242, 250, 253, 0.8);
  color: black;
  font-size: 17px;
  font-family: GTEestiProDisplay-Regular,serif;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 3%;
  margin-left: 45%;
  padding: 10px 40px;
  display: inline-block;
  transition: all .3s;
  position: relative;
  border-radius: 20px;
}
img{
  width: 26%;
}

@media (max-width: 990px) {
  .section-2{
    height: 68vh;
    clip-path: unset;
    padding-top: 15px;
  }
  .btn-white{
    margin-left: 39%;
  }
  .section-2-header{
    font-size: 30px;
  }
  .section-2-content-header{
    font-size: 18px;
  }
}

@media (max-width: 800px) {
  .section-2 {
    height: 68vh;
  }
}

@media (max-width: 550px){
  .section-2-content {
    display: block;
    /*margin-left: 30%;*/
  }
  .section-2 {
    height: 100%;
  }
  img{
    width: 18%;
  }

  .section-2-header{
    font-size: 19px;
  }

  .section-2-content-alpha{
    padding-right: unset;
    width: unset;
    line-height: unset;

  }

  .btn-white {
    margin-top: 4%;
    margin-bottom: 2%;
    margin-left: unset;
    padding: 9px 30px;
    font-size: 15px;
  }
  .section-2-content-header{
    font-size: 13px;
    padding-top: 5%;
  }
  .section-2{
    display: block;
    justify-content: space-between;
    padding-top: 3%;
    text-align: center;
  }
}

</style>
