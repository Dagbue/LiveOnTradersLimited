<template>
  <div>
    <ContactHeader />
    <ContactBody />
    <contact-map/>
    <news-letter/>
    <TestimonyPartners />
    <br/>
    <br/>
    <br/>
    <Footer />
  </div>
</template>

<script>
import ContactHeader from "../components/CONTACT/ContactHeader";
import ContactBody from "../components/CONTACT/ContactBody";
import TestimonyPartners from "../components/TESTIMONIES/Body/TestimonyPartners";
import Footer from "../components/BaseComponents/footer/Footer";
import NewsLetter from "@/components/PORTFOLIO/Body/NewsLetter";
import ContactMap from "@/components/CONTACT/contact-map";
export default {
  name: "Contact",
  components: {ContactMap, NewsLetter, Footer, TestimonyPartners, ContactBody, ContactHeader },
};
</script>

<style scoped></style>
