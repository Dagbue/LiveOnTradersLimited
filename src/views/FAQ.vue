<template>
  <div>
    <FAQHeader/>
    <FAQBody/>
    <TestimonyPartners/>
    <br/>
    <br/>
    <br/>
    <Footer/>
  </div>
</template>

<script>
import FAQHeader from "@/components/FAQ/FAQHeader";
import FAQBody from "@/components/FAQ/FAQBody";
import Footer from "@/components/BaseComponents/footer/Footer";
import TestimonyPartners from "@/components/TESTIMONIES/Body/TestimonyPartners";
export default {
  name: "FAQ",
  components: {TestimonyPartners, Footer, FAQBody, FAQHeader}
}
</script>

<style scoped>

</style>

