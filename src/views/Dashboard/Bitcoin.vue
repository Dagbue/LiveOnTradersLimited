<template>
  <dash-content>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <form>
      <div class="bank-trans">
        <div class="bank-trans-form2">
          <label>Select Wallet For Deposit</label>
          <select  v-model="selected2" aria-required="">
            <option value="3CDA5QN6vZHfUFR3LE5TiEhnbDYVeuKxmc">Bitcoin</option>
            <option value="0x8ca10304c0E398Cb4ecc52053120Dd28258A1c61">Ethereum</option>
          </select>
        </div>
        <div class="bank-trans-form">
          <label class="crypto-label">Copy The Wallet Address</label>
          <h1 class="crypto">{{ selected2 }}</h1>
        </div>
        <p class="note">KINDLY NOTE: After making your deposit,Kindly send a screenshot/proof of deposit to
          <span class="note-span"><a href="mailto:support@liveontradersltd.com" class="para-last">support@liveontradersltd.com</a></span> for documentation and to boost the funding process
        </p>
      </div>
      <router-link to="/dash-board" class="bank-trans-btn" @click="message">Done</router-link>
    </form>
<!--    <div class="content-sep">-->
<!--      <hr class="line">-->
<!--      <p class="foot">© 2022 Crypto Investment Limited | All Rights Reserved</p>-->
<!--    </div>-->
  </dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
export default {
  name: "Bitcoin",
  components: {DashContent},
  data() {
    return {
      selected2: ""
    }
  },
  methods: {
    message() {
      alert("Deposit Request Sent")
    }
  }
}
</script>

<style scoped>
.bank-trans{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  color: #FFFFFF;
  margin-top: 8%;
  margin-right: 22%;
  margin-left: 13%;
  padding: 5% 5% 5% 6%;
  border-radius: 12px;
}
.bank-trans-form{
  display: flex;
  flex-direction: column;
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
}
input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: aliceblue;
  border: none;
  border-radius: 10px;
  font-family: GTEestiProDisplay-Regular,serif ;
  font-size: 17px;
}
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: aliceblue;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
option{
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
}
label{
  padding-bottom: 12px;
  font-size: 19px;
  color: #D23535;
  font-weight: 700;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.content-sep {
  margin-top: 25%;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}
.foot{
  text-align: center;
  padding-top: 5px;
}
p{
  font-family: GTEestiProDisplay-Regular,serif ;
}
.crypto{
  background-color: white;
  color: #D23535;
  padding: 18px;
  border-radius: 15px;
  font-size: 18px;
  font-family: GTEestiProDisplay-Regular,serif ;
  letter-spacing: 1px;
}
option{
  font-family: GTEestiProDisplay-Regular,serif ;
  font-size: 17px;
}
.crypto-label{
  padding-top: 15px;
  padding-bottom: 8px;
  font-size: 17px;
  color: #D23535;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.note{
  text-align: center;
  padding-top: 6%;
  font-size: 16px;
  font-family: GTEestiProDisplay-Regular,serif ;
  line-height: 1.2;
  color: darkred;
}
.note-span{
  color: #D23535;
  font-size: 16px;
  font-weight: 700;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.bank-trans-btn{
  margin-left: 17%;
  padding: 15px 85px;
  color: white;
  background-color: #D23535;
  border-color: #D23535;
  border-radius: 10px;
  font-size: 17px;
  font-family: GTEestiProDisplay-Regular,serif ;
  text-decoration: none;
}

.para-last{
  padding-bottom: 10%;
  list-style: none;
  text-decoration: none;
  color: #D23535;
}

.para-last:hover{
  font-size: 17.5px;
  font-weight: bold;
  transition:font-size 4ms ease-in;
}

@media (max-width: 550px) {
  .bank-trans{
    margin-right: unset;
    margin-left: unset;
  }
  .note-span{
    width: 100%;
  }

  .crypto{
    padding: 14px;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: unset;
  }
}
</style>
