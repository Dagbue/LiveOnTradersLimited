<template>
  <div>
    <company-header />
    <about-section1/>
    <about-section2/>
    <our-goals />
    <about-section3/>
    <our-commitment />
    <what-we-offer/>
    <our-values/>
    <reassurance/>
    <news-letter/>
    <Footer />
  </div>
</template>

<script>
import CompanyHeader from "../components/PORTFOLIO/header/CompanyHeader";
import OurGoals from "../components/PORTFOLIO/Body/OurGoals";
import OurCommitment from "../components/PORTFOLIO/Body/OurCommitment";
import Footer from "../components/BaseComponents/footer/Footer";
import NewsLetter from "@/components/PORTFOLIO/Body/NewsLetter";
import AboutSection1 from "@/components/PORTFOLIO/Body/about-section1";
import AboutSection2 from "@/components/PORTFOLIO/Body/about-section2";
import AboutSection3 from "@/components/PORTFOLIO/Body/about-section3";
import WhatWeOffer from "@/components/PORTFOLIO/Body/what-we-offer";
import OurValues from "@/components/PORTFOLIO/Body/our-values";
import Reassurance from "@/components/PORTFOLIO/Body/reassurance";

export default {
  name: "Companyportfolio",
  components: {
    Reassurance,
    OurValues,
    WhatWeOffer,
    AboutSection3,
    AboutSection2,
    AboutSection1,
    NewsLetter,
    CompanyHeader,
    // Slider2,
    Footer,
    // WhatWeOffer,
    OurCommitment,
    OurGoals,
  },
};
</script>

<style scoped></style>
