<template>
  <div class="career-choice-container">
    <div class="career-choice-header">
      <p class="one">Investment Help</p>
      <p class="two">
        Managing capital for institutions and private investors all over the
        world. Let investment professionals help you.
      </p>
    </div>
    <div class="career">
      <investments
        v-for="(career, index) in careerList"
        :key="index"
        :career="career"
      />
    </div>
  </div>
</template>

<script>
import Investments from "@/components/HOME/sections/Investments";
export default {
  name: "InvestmentHelp",
  components: { Investments },
  data() {
    return {
      careerList: [
        {
          titleImage: "wealth.png",
          title: "Wealth Management",
          description:
            "Wealth management is the ability of an advisor or advisory team to deliver a" +
            " full range of financial services and products to an affluent client in a consultative way.",
          subtitle: "LEARN MORE",
        },
        {
          titleImage: "Designer.svg",
          title: "Stocks, Bonds & Mutual Funds",
          description:
            "While stocks typically are higher risk investments due to market volatility, they offer" +
            " potentially high returns. Let us help you manage your portfolio and offer financial advice.",
          subtitle: "LEARN MORE",
        },
        {
          titleImage: "ProjectManagers.svg",
          title: "Insurance & Annuities",
          description:
            "We offer a variety of solutions from leading financial service providers, so you have many " +
            "options when deciding what type of annuity is right for you.",
          subtitle: "LEARN MORE",
        },
        {
          titleImage: "BusinessAnalyst.svg",
          title: "Retirement & College Savings",
          description:
            "Finding a balance with your money is a crucial part of personal finance. Saving for retirement " +
            "does not have to be mutually exclusive from saving for college.",
          subtitle: "LEARN MORE",
        },
      ],
    };
  },
};
</script>

<style scoped>
.career-choice-container {
  padding: 0 8%;
  background-color: white;
  margin-bottom: 100px;
}

.career-choice-header {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.career-choice-header .one {
  margin: 0;
  font-family: GTEestiProDisplay-Bold, serif;
  font-size: 30px;
  line-height: 46px;
  letter-spacing: 0;
  text-align: center;
  color: #222222;
  padding-bottom: 10px;
  width: 60%;
}

.career-choice-header .two {
  font-family: GTEestiProDisplay-Regular, serif;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  color: #222222;
  padding-bottom: 30px;
  width: 75%;
  margin: 0;
}

.career-choice-header button {
  outline: none;
  background: #0098da;
  border-radius: 70px;
  color: rgba(255, 255, 255, 1);
  font-family: GTEestiProDisplay-Bold, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: center;
  padding: 16px 25px;
  transition: background-color 0.5s ease-in;
  /*margin-bottom: 100px;*/
}

.career-choice-header button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.career-choice-header button:hover,
.career-choice-header button:focus {
  background-color: rgba(7, 19, 51, 1);
  color: white;
}

.career-choice-header button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: -3.5px;
  right: -20px;
  transition: 0.5s;
  font-size: 40px;
  color: white;
}

.career-choice-header button:hover span {
  padding-right: 25px;
}

.career-choice-header button:hover span:after {
  opacity: 1;
  right: 0;
}

.career {
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
}

.career-choice .three button img {
  animation: moveforwardbackward 2s infinite;
  animation-direction: reverse;
}

@keyframes moveforwardbackward {
  from {
    left: 0;
  }
  to {
    left: 200px;
  }
}

.career-choice button {
  border: none;
  background: transparent;
  outline: none;
}

@media (max-width: 990px) {
  .career-choice-header .one{
    font-size: 27px;
  }
  .career-choice-header .two{
    font-size: 17px;
  }
}

@media (max-width: 400px) {
  .career {
    display: block;
  }
  .career-choice-header .one {
    font-size: 24px;
    width: unset;
  }

  .career-choice-header .two {
    font-size: 15px;
    width: unset;
    line-height: 20px;
    padding-bottom: 28px;
  }
}

</style>
