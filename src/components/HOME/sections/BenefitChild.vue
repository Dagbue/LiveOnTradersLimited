<template>
  <div class="section-2">

    <div class="text-box">
      <p class="heading-primary">
        <span class="heading-primary-main">Benefits & Risks</span>
        <span class="heading-primary-sub">Advantages of Managed Funds </span>
        <span class="heading-primary-sub">The benefits of using managed funds include the ability to gain exposure to different asset classes and market sectors.</span>
      </p>
      <div class="heading-primary-list-header">
        <ul class="heading-primary-list">
          <li>Diversification</li>
          <li>Potential wealth generation</li>
          <li>Cost-effective investment</li>
        </ul>
        <ul class="heading-primary-list">
          <li>Access to a range of assets</li>
          <li>Geared exposure</li>
          <li>Underperforming investments</li>
        </ul>
      </div>
      <a @click.prevent="onPostClick" class="btn btn-white btn-animated">CREATE ACCOUNT</a>
    </div>

  </div>
</template>

<script>
export default {
  name: "BenefitChild",
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
  height: 104vh;
  background-image:
      linear-gradient(to right bottom,
      rgba(5, 5, 33, 0.89),
      rgba(5, 5, 33, 0.89)),
      url("https://images.unsplash.com/photo-1640622661329-67f406a77d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
  background-size: cover;
  background-position: center;
  position: relative;
}

.text-box {
  padding-top: 7%;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.heading-primary-main {
  display: block;
  font-size: 26px;
  font-weight: bold;
  color: #0098DA;
  font-family: GTEestiProDisplay-Regular,serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 30px;
}
.heading-primary-sub {
  display: block;
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin-left: 50px;
  margin-right: 50px;
  font-family: GTEestiProDisplay-Regular,serif;
}
.btn:link,
.btn:visited {
}
.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}
.btn:active {
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
}
.btn-white {
  background-color: #0098DA;
  color: white;
  font-size: 14px;
  font-family: GTEestiProDisplay-Regular,serif;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 4%;
  margin-right: 34%;
  margin-left: 33%;
  padding: 8px 18px;
  display: inline-block;
  transition: all .2s;
  position: relative;
  border-radius: 20px;
}

.heading-primary-list-header{
  font-size: 20px;
  padding-top: 3%;
}

.heading-primary-list{
  list-style: none;
  line-height: 38px;
  letter-spacing: normal;
  text-align: center;
  align-content: center;
}

.heading-primary-list li {
  font-family: GTEestiProDisplay-Light,serif;
  font-weight: bold;
}
@media (max-width: 990px) {
  .heading-primary-list-header{
    padding-right: 20px;
  }


  @media (max-width: 800px){
    .section-2 {
      height: 93vh;
    }
  }

  @media (max-width: 500px){
    .heading-primary-main {
      font-size: 26px;
    }
  }
  .btn-white {
    margin-right: 23%;
    margin-left: 20%;
    margin-top: 10px;
    padding: 9px 18px;
    font-size: 13px;
  }
  .section-2 {
    height: 100%;
    padding-bottom: 30px;
  }
  .heading-primary-list-header{
    font-size: 17px;
    padding-top: 3%;
    display: block;
  }
  .heading-primary-list{
    list-style: circle;
    line-height: 25px;
    letter-spacing: unset;
    text-align: left;
    margin-left: 20%;
  }
  .heading-primary-sub {
    display: block;
    font-size: 17px;
    text-align: center;
  }
}
</style>

