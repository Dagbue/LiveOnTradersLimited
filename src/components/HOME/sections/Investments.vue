<template>
  <div class="career-choice">

    <p class="one">{{ career.title }}</p>
    <p class="two">
      {{ career.description }}
    </p>
    <p class="three">
      {{ career.subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Investments",
  props: {
    career: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.career-choice{
  display: flex;
  flex-direction: column;
  background-color: rgba(242, 250, 253, 0.5);
  border-radius: 10px;
  padding-left: 40px;
  padding-top: 40px;
  width: 45%;
  margin: 10px auto;
}

.career-choice .one{
  font-family: GTEestiProDisplay-Bold,serif;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0;
  text-align: left;
  color: #222222;
  margin: 0;
  padding-top: 30px;
  padding-bottom: 20px;
}

.career-choice .two {
  font-family: GTEestiProDisplay-Light,serif;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0;
  color: rgba(125, 144, 184, 1);
  margin: 0;
  padding-bottom: 70px;
  padding-right: 50px;
}

.career-choice .three{
  font-family: GTEestiProDisplay-Bold,serif;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0;
  color: #D23535;
  padding-bottom: 35px;
  margin: 0;
}


.career-choice button{
  border: none;
  background: transparent;
  outline: none;
}
@media (max-width: 990px) {
  .career-choice .one{
    font-size: 21px;
  }
  .career-choice .two{
   font-size: 17px;
  }
}

@media (max-width: 990px) {
  .career-choice{
    width: unset;
  }
}
@media (max-width: 500px) {
  .career-choice .one{
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }
  .career-choice .two {
    font-size: 15px;
    line-height: 20px;
    padding-right: unset;
  }
  .career-choice{
    padding-right: 30px;
  }
  .career-choice .three{
    font-size: 14px;
    line-height: 17px;
  }
}
</style>


