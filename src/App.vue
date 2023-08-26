<template>
  <template v-if="!$route.meta.hideNavigation">
    <!--  <div class="topmost-header" v-if="$route.name !== 'DashHome'" >-->
    <!--    <div class="topmost-header-1">-->
    <!--      <p class="topmost-header-text">-->
    <!--        <i class='bx bxs-map' ></i>-->
    <!--        Suite 12 Station Court, Townmead Road Fulham, London, SW6 2PY-->
    <!--      </p>-->
    <!--      <p class="topmost-header-text">-->
    <!--        <i class='bx bxs-time-five' ></i>Mon – Sat: 9:00am–18:00pm.-->
    <!--      </p>-->
    <!--      <p class="topmost-header-text">-->
    <!--        <i class='bx bxs-phone' ></i>+443300010876-->
    <!--      </p>-->
    <!--    </div>-->
    <!--  </div>-->

    <div class="style-4" v-if="$route.name !== 'DashHome'">

      <img alt="company logo" src="../src/assets/companylogo.svg" class="logo" />

      <ul class="menu-4" v-show="!mobile">
        <li><router-link data-hover="HOME" to="/">HOME</router-link></li>
        <li><router-link data-hover="COMPANY PORTFOLIO" to="/offer">COMPANY PORTFOLIO</router-link></li>
        <li><router-link data-hover="TESTIMONIES" to="/testimonies">TESTIMONIES</router-link></li>
        <li><router-link data-hover="CONTACT" to="/contact">CONTACT</router-link></li>
        <li><router-link data-hover="F.A.Q" to="/faq">F.A.Q</router-link></li>
        <li><router-link data-hover="SIGNUP" to="/register">SIGNUP</router-link></li>
        <li><router-link data-hover="LOGIN" to="/login">LOGIN</router-link></li>
      </ul>

      <div>

        <ul class="dropdown-nav" v-show="mobileNav">
          <li @click="toggleMobileNav2"><router-link data-hover="HOME" to="/">HOME</router-link></li>
          <li @click="toggleMobileNav2"><router-link data-hover="COMPANY PORTFOLIO" to="/offer">COMPANY PORTFOLIO</router-link></li>
          <li @click="toggleMobileNav2"><router-link data-hover="TESTIMONIES" to="/testimonies">TESTIMONIES</router-link></li>
          <li @click="toggleMobileNav2"><router-link data-hover="CONTACT" to="/contact">CONTACT</router-link></li>
          <li @click="toggleMobileNav2"><router-link data-hover="F.A.Q" to="/faq">F.A.Q</router-link></li>
          <li @click="toggleMobileNav2"><router-link data-hover="SIGNUP" to="/register">SIGNUP</router-link></li>
          <li @click="toggleMobileNav2"><router-link data-hover="LOGIN" to="/login">LOGIN</router-link></li>
          <hr />
          <p class="copyright">
            © 2022 Live On Traders Limited | All Rights Reserved
          </p>
        </ul>


      </div>

      <div class="icon">
        <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
      </div>



    </div>



  </template>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>


<script>
export default {
  data()  {
    return {
      value1: false,
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
};
</script>

<style>

.bx-menu{
  font-size: 45px;
  margin-top: 7px;
  cursor: pointer;
  transition: .8s ease all;
}
.icon-active{
  transform: rotate(180deg);
}

.logo {
  width: 14%;
  margin-left: 2%;
  padding-top: 10px;
}

.style-4 {
  display: flex;
  padding-left: 8%;
  padding-bottom: 5px;
}

.menu-4 {
  /*text-align: center;*/
  /*text-transform: uppercase;*/
  /*font-weight: 500;*/
  padding-top: 2.5%;
  padding-left: 5%;
  /*display: none;*/
}
.menu-4 * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.menu-4 li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.3em;
  overflow: hidden;
  font-family: GTEestiProDisplay-Bold, serif;
  padding-right: 8px;
  padding-left: 10px;
  font-weight: bold;
  font-size: 14px;
}
.menu-4 a {
  padding: 0.3em 0;
  color: #222222;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
  font-family: GTEestiProDisplay-Regular, serif;
}

.menu-4 a:before,
.menu-4 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.menu-4 a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  background-color: #D23535;
}

.menu-4 a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #222222;
  white-space: nowrap;
}

.menu-4 li:hover a,
.menu-4 .current a {
  transform: translateY(100%);
  color: #222222;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  cursor: pointer;
  counter-reset: Serial;
  background-color: rgb(255, 255, 255);
}

a{
  text-decoration: none;
}

@font-face {
  font-family: "GTEestiProDisplay-Bold";
  src: local("GTEestiProDisplay"),
  url("fonts/GTEestiProDisplay/GTEestiProDisplay-Bold.woff") format("woff");
}
@font-face {
  font-family: "GTEestiProDisplay-Light";
  src: local("GTEestiProDisplay"),
  url("fonts/GTEestiProDisplay/GTEestiProDisplay-Light.woff") format("woff");
}
@font-face {
  font-family: "GTEestiProDisplay-Medium";
  src: local("GTEestiProDisplay"),
  url("fonts/GTEestiProDisplay/GTEestiProDisplay-Medium.woff") format("woff");
}
@font-face {
  font-family: "GTEestiProDisplay-Regular";
  src: local("GTEestiProDisplay"),
  url("fonts/GTEestiProDisplay/GTEestiProDisplay-Regular.woff") format("woff");
}
@font-face {
  font-family: "GTEestiProDisplay-Thin";
  src: local("GTEestiProDisplay"),
  url("fonts/GTEestiProDisplay/GTEestiProDisplay-Thin.woff") format("woff");
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 1s ease-in;
}

.topmost-header {
  background-color: #222222;
  padding-top: 10px;
  color: white;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.topmost-header-1 {
  display: flex;
  margin-left: 12%;
}

.topmost-header-text {
  font-size: 11px;
  padding-right: 28px;
  font-family: GTEestiProDisplay-Regular, serif;
  display: flex;
}
i{
  padding-right: 4px;
  font-size: 14px;
}

.dropdown-nav{
  display: flex;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding-right: 7%;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background-color: #071333;
  font-size: 19px;
  text-align: center;
}

.dropdown-nav li {
  /*display: inline-block;*/
  margin-top: 10%;
  overflow: hidden;
  list-style: none;
  font-family: GTEestiProDisplay-Regular, serif;
  /*padding-right: 10px;*/
  /*padding-left: 10px;*/
  font-weight: bold;
}

.dropdown-nav * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav a {
  padding: 0.3em 0;
  color: #676767;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
  font-family: GTEestiProDisplay-Regular, serif;
}

.dropdown-nav a:before,
.dropdown-nav a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  background-color: #D23535;
}

.dropdown-nav a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}

.dropdown-nav li:hover a,
.dropdown-nav.current a {
  color: #D23535;
}

hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  margin-top: 95px;
}

.copyright {
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  opacity: 0.75;
  color: white;
  margin-top: 20px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-250px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}



@media (min-width: 1286px) {
  .hamburger {
    display: none;
  }
  /*.menu-4{*/
  /*  display: flex;*/
  /*}*/
}

@media (max-width: 861px) {
  .topmost-header {
    display: none;
  }
}

@media (max-width: 990px) {
  .style-4 {
    display: flex;
    justify-content: space-between;
  }
}

@media (max-width: 550px) {
  .bx-menu{
    font-size: 40px;
    margin-top: 17px;
  }
  .logo {
    width: 20%;
    margin-left: unset;
    padding-left: unset;
  }

  .dropdown-nav{
    padding-right: 10%;
    max-width: 220px;
    font-size: 12px;
  }

  .dropdown-nav li {
    margin-top: 8%;
  }

  hr {
    margin-top: 95%;
  }

  .copyright {
    font-size: 10px;
    margin-top: 6px;
  }

}

</style>
