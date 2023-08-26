<template>
  <div class="the-footer">
    <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10" ></div>
    <div class="bottom">

      <div class="footer-container">

<!--          <img src="@/assets/companylogo.svg" alt="logo" class="footer-img" />-->


        <div class="footer-link-container">
          <h3 class="footer-title">About Us</h3>
          <p class="footer-link">
            Live On Traders Limited Incorporated on 21 November 2014. Located at 202-208 12c - Live On Traders,
            Cheetham Hill Road, Manchester, England, M8 8LWis legally
            registered with company house with company number 09321920  is a
            secure, reliable and advanced digital asset trading platform
            developed for international customers and built on Bittrex’s
            cutting-edge technology We're proud to provide cutting-edge
            expertise in areas of Financial Administration; Risk Management with
            Investment and Return Provisioning.
          </p>
        </div>

        <div class="footer-link-container2">
          <h3 class="footer-title">Links</h3>
          <a @click.prevent="onPostClick1" class="footer-link">Home</a>
          <a @click.prevent="onPostClick2" class="footer-link">Login</a>
          <a @click.prevent="onPostClick4" class="footer-link">Register</a>
          <a @click.prevent="onPostClick5" class="footer-link">F.A.Q</a>
          <a @click.prevent="onPostClick6" class="footer-link">Contacts</a>
          <a href="https://find-and-update.company-information.service.gov.uk/company/09321920" class="footer-link">Certifications</a>
        </div>

        <div class=" stay-connected">
          <h3 class="footer-title">Stay connected</h3>
          <div class="socials-container">
            <div class="social-logo">
              <div class="last-div">
                <i class='bx bxs-phone' ></i>
                <p class="last-div-para">+443300010876</p>
              </div>
            </div>
            <div class="social-logo">
              <div class="last-div">
                <i class='bx bxs-map' ></i>
                <p class="last-div-para">202-208 12c - Live On Traders, Cheetham Hill Road, Manchester, England, M8 8LW</p>
              </div>
            </div>
            <div class="social-logo">
              <div class="last-div">
                <i class='bx bx-mail-send' style='color:#ffffff'></i>
<!--                <p class="last-div-para">support@liveontraderslimited.com</p>-->
                <a href="mailto:support@liveontradersltd.com" class="last-div-para">support@liveontradersltd.com</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <hr />
    <div class="copyright-content">
      <p class="copyright">
        © 2023 Live On Traders Limited. All rights reserved
      </p>
      <p class="copyright">
        Privacy Policy
      </p>

      <p class="copyright">
        Terms & Conditions
      </p>
    </div>
  </div>
</template>



<script>
export default {
  name: "Footer",
  methods: {
    onPostClick1() {
      this.$router.push('/');
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push('/login');
      window.scrollTo(0, 0);
    },
    onPostClick4() {
      this.$router.push('/register');
      window.scrollTo(0, 0);
    },
    onPostClick5() {
      this.$router.push('/faq');
      window.scrollTo(0, 0);
    },
    onPostClick6() {
      this.$router.push('/contact');
      window.scrollTo(0, 0);
    }
  },
};
</script>




<style scoped>
.the-footer {
  background-color: #071333;
  color: #ffffff;
  padding: 5vh 1vh 1vh 1vh;
}

.copyright-content{
  display: flex;
  justify-content: space-around;
}


.footer-title {
  font-size: 22px;
  line-height: 20px;
  padding-bottom: 5px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.footer-link {
  display: block;
  font-size: 17px;
  line-height: 25px;
  opacity: 0.8;
  padding-top: 10px;
  font-family: GTEestiProDisplay-Regular, serif;
}
.footer-container {
  margin-top: 3%;
  display: flex;
  /*justify-content: space-around;*/
  font-family: GTEestiProDisplay-Regular, serif;
}
.footer-link-container {
  margin-left: 10%;
  margin-right: 5%;
  width: 40%;
}
.footer-link-container2{
  padding-right: 5%;
}
.stay-connected{
  margin-right: 2%;
  width: 40%;
}
.socials-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
  font-family: GTEestiProDisplay-Regular, serif;
}


hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  opacity: 0.15;
  margin-top: 80px;
}

.copyright {
  font-size: 14px;
  /*line-height: 12px;*/
  text-align: center;
  opacity: 0.75;
  font-family: GTEestiProDisplay-Regular, serif;
}
.footer-img {
  width: 17%;
  margin-right: 1.5%;
  margin-left: 1%;
}
a {
  text-decoration: none;
  color: white;
  transition: ease 0.3s;
  font-family: GTEestiProDisplay-Regular, serif;
}
a:hover{
  color: #D23535;
  font-size: 22px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.bit{
  margin-bottom: 25px;
}
.bx {
  font-size: 28px;
}
.bx-mail-send{
}
.last-div{
  display: flex;
  margin-bottom: 15px;
  font-family: GTEestiProDisplay-Regular, serif;
}
.last-div-para{
  font-size: 16px;
  padding-left: 10px;
  line-height: 1.3;
  font-family: GTEestiProDisplay-Regular, serif;
}
p{
  font-family: GTEestiProDisplay-Regular, serif;
}
.footer-title{
  color: #D23535;
  /*font-size: 30px;*/
  font-weight: bold;
  padding-bottom: 0;
  margin-bottom: 0;
}
@media (max-width: 760px) {
  .bottom {
    display: block;
    align-content: center;
    text-align: center;
  }
  .footer-container {
    display: block;
    align-content: center;
    text-align: center;
  }
  .the-footer {
    margin-top: unset;
  }
  .footer-img {
    width: 50%;
    min-width: unset;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
    margin-bottom: 15%;
    margin-top: 10%;
  }
  .footer-link-container2 {
    margin-bottom: 18%;
  }
  .last-div{
    margin-right: 10%;
    margin-bottom: unset;
  }
  .copyright{
    font-size: 17px;
  }
}
@media (max-width: 500px) {
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
  }
  .stay-connected{
    margin-right: unset;
    width: unset;
  }
  .socials-container {
    justify-content: center;
    padding-left: 30px;
  }
  .footer-link {
    display: block;
    font-size: 16px;
  }
  .footer-title {
    font-size: 21px;
    padding-bottom: unset;
  }
  .footer-img {
    width: 43%;
  }
  .copyright{
    font-size: 13px;
  }
  .bx{
    font-size: 18px;
  }
  .last-div-para{
    font-size: 16px;
    padding-left: 8px;
  }
}
</style>
