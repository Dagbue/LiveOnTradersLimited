<template>
  <div>
    <TestimonyHeader/>
<!--    <TestimonyVideo/>-->
    <testimonial-body/>
<!--    <TestimonyCards/>-->
    <TestimonyPartners/>
    <br/>
    <br/>
    <br/>
    <ready-to-work/>
    <br/>
    <br/>
    <br/>
    <Footer/>
  </div>
</template>

<script>
import TestimonyHeader from "@/components/TESTIMONIES/header/TestimonyHeader";
// import TestimonyVideo from "@/components/TESTIMONIES/Body/TestimonyVideo";
// import TestimonyCards from "@/components/TESTIMONIES/Body/TestimonyCards";
import TestimonyPartners from "@/components/TESTIMONIES/Body/TestimonyPartners";
import Footer from "@/components/BaseComponents/footer/Footer";
import TestimonialBody from "@/components/TESTIMONIES/Body/testimonial-body";
import ReadyToWork from "@/components/TESTIMONIES/Body/ready-to-work";
export default {
  name: "Testimonies",
  components: {ReadyToWork, TestimonialBody, Footer, TestimonyPartners, TestimonyHeader}
}
</script>

<style scoped>

</style>

