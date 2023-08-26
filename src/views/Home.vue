<template>
  <div class="home">
    <slider/>
    <br/>
    <product-card/>
    <investment-help/>
    <investment-principles/>
    <benefit-investing/>
    <how-it-works/>
    <trusted/>
    <br/>
    <partners/>
    <contact-us/>
    <br/>
    <br/>
    <br/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src


import Slider from "@/components/HOME/slideshow/Slider";
import ProductCard from "@/components/HOME/cards/ProductCard";
import InvestmentHelp from "@/components/HOME/sections/InvestmentHelp";
import InvestmentPrinciples from "@/components/HOME/sections/investment-principles";
import BenefitInvesting from "@/components/HOME/sections/BenefitInvesting";
import HowItWorks from "@/components/HOME/sections/how-it-works";
import Trusted from "@/components/HOME/sections/Trusted";
import Partners from "@/components/HOME/sections/Partners";
import ContactUs from "@/components/HOME/sections/ContactUs";
import Footer from "@/components/BaseComponents/footer/Footer";
export default {
  name: 'Home',
  components: {
    Footer,
    ContactUs,
    Partners,
    Trusted, HowItWorks, BenefitInvesting, InvestmentPrinciples, InvestmentHelp, ProductCard, Slider},
}
</script>
