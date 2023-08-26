<template>
<div>

  <div class="section-1">
    <h1 class="section-1-header">Choose your Plan</h1>
    <p class="section-1-para">Pick the best plan that meets your business needs.
      A free trial is available to help you with the decision-making.</p>
    <button class="section-1-btn" @click="showDialog">GET STARTED</button>
    <base-modal3 @click="handleSubmit" v-if="dialogIsVisible">

        <div class="modal-select">
          <label>Please select a Plan</label>
          <select  name="selected" v-model="selected">
            <option value="LOW INCOME CONTRACT" >LOW INCOME CONTRACT</option>
            <option value="AVERAGE INCOME CONTRACT">AVERAGE INCOME CONTRACT</option>
            <option value="HIGH INCOME CONTRACT">HIGH INCOME CONTRACT</option>
            <option value="ELITE INCOME CONTRACT">ELITE INCOME CONTRACT</option>
          </select>

          <label>Please select Daily ROI</label>
          <select  name="selected" v-model="ROI">
            <option value="5" >LOW INCOME CONTRACT</option>
            <option value="7">AVERAGE INCOME CONTRACT</option>
            <option value="10">HIGH INCOME CONTRACT</option>
            <option value="13">ELITE INCOME CONTRACT</option>
          </select>
          <button @click="handleSubmit" class="btn-sub">Proceed to Deposit</button>
        </div>


    </base-modal3>
  </div>


  <div class="section-2">
    <div class="section-2-card">
      <h3>LOW INCOME CONTRACT</h3>
      <p><span>5%</span>/Daily</p>
      <i class='bx bx-chevron-down-circle' ></i>
      <p> £1,000 - £4,999</p>
      <p>5% referral bonus</p>
      <p>Contract duration: 12 months</p>
      <p>Monthly compounding</p>
      <p>Minimum investment period: 30 days</p>
      <p>Personal account manager</p>
      <p>Service commission: 10%</p>
    </div>
    <div class="section-2-card">
      <h3>AVERAGE INCOME CONTRACT</h3>
      <p><span>7%</span>/Daily</p>
      <i class='bx bx-chevron-down-circle' ></i>
      <p> £5,000 - £9,999</p>
      <p>6% referral bonus</p>
      <p>Contract duration: 24 months</p>
      <p>Monthly compounding</p>
      <p>Minimum investment period: 90 days</p>
      <p>Personal account manager</p>
      <p>Service commission: 10%</p>
    </div>
  </div>


  <div class="section-2">
  <div class="section-2-card">
    <h3>HIGH INCOME CONTRACT</h3>
    <p><span>10%</span>/Daily</p>
    <i class='bx bx-chevron-down-circle' ></i>
    <p> £10,000 - £49,999</p>
    <p>10% referral bonus</p>
    <p>Contract duration: 5 years</p>
    <p>Monthly compounding</p>
    <p>Minimum investment period: 180 days</p>
    <p>Personal account manager</p>
    <p>Service commission: 5%</p>
  </div>
  <div class="section-2-card">
    <h3>ELITE INCOME CONTRACT</h3>
    <p><span>13%</span>/Daily</p>
    <i class='bx bx-chevron-down-circle' ></i>
    <p>£50,000 - £99,999</p>
    <p>10% referral bonus</p>
    <p>Contract duration: 10 years</p>
    <p>Monthly compounding</p>
    <p>Minimum investment period: 180 days</p>
    <p>Personal account manager</p>
    <p>Service commission: 0%</p>
  </div>
  </div>

</div>
</template>

<script>
import BaseModal3 from "@/components/BaseComponents/modal/BaseModal3";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {getAuth} from "firebase/auth";
import {doc, getFirestore, setDoc} from "firebase/firestore";

export default {
  name: "Pacakages",
  components: {BaseModal3},
  data() {
    return {
      dialogIsVisible: false,
    }
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
  },

  setup() {
    const selected = ref('')
    const  ROI = ref('')
    const error = ref(null)

    const router = useRouter()

    const handleSubmit = async () => {
      try {
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        // setDoc(doc(db,auth.currentUser.uid, "investment"), {
        //   selected: selected.value,
        // },{ merge: true })
        //     .then(() => {
        //       console.log('saved to the database')
        //     })
        setDoc(doc(db, auth.currentUser.email, "USER"), {
          selected: selected.value,
          ROI: ROI.value,
        },{ merge: true })
            .then(() => {
              console.log('saved again')
            })
        await router.push('/deposit')
      }
      catch (err) {
        error.value = err.message
      }
    }

    const auth = getAuth();
    const db = getFirestore();

    return {
      selected, handleSubmit, error,
      ROI
    }

  }
}
</script>

<style scoped>

.section-1{
  display: flex;
  justify-content: space-evenly;
  padding-top: 5%;
  padding-bottom: 4%;
}

.section-1-header{
  width: 20%;
  font-size: 32px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.section-1-para{
  width: 35%;
  font-size: 17px;
  font-family: GTEestiProDisplay-Regular,serif ;
  line-height: 1.5;
}
.section-1-btn{
  width: 25%;
  padding: 15px 25px;
  margin-right: 20px;
  border-radius: 12px;
  color: white;
  background-color: #D23535;
  border-color: #D23535;
  font-family: GTEestiProDisplay-Regular,serif ;
  font-size: 16px;
}
.section-1-btn:hover{
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  font-family: GTEestiProDisplay-Bold,serif ;
}
i{
  font-size: 24px;
  color: #D23535;
}

.section-2{
  display: flex;
  justify-content: space-evenly;
  padding-top: 2%;
}
.section-2-card{
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.6);
  padding: 50px;
  line-height: 2;
  text-align: center;
  font-size: 21px;
  border-radius: 15px;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

span{
  font-weight: 700;
  font-size: 20px;
  font-family: GTEestiProDisplay-Regular,serif ;
}
h2{
  font-family: GTEestiProDisplay-Regular,serif ;
}
p{
  font-family: GTEestiProDisplay-Regular,serif ;
}
h3{
  color: #D23535;
  font-weight: 700;
  font-size: 25px;
}
.btn-sub{
  padding: 12px 25px;
  margin-right: 50px;
  margin-left: 50px;
  border-radius: 12px;
  font-size: 15px;
  color: white;
  background-color: #D23535;
  border-color: #D23535;
  font-family: GTEestiProDisplay-Regular,serif ;
}
.modal-select{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
}

label{
  font-family: GTEestiProDisplay-Regular,serif ;
  font-size: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 10px;
}

select{
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 10px;
  margin-bottom: 7%;
  font-weight: bold;
}

option{
  font-family: GTEestiProDisplay-Regular,serif ;
  padding-bottom: 22px;
  font-size: 16px;
}

@media (max-width: 990px) {
  .section-1-header{
    width: 20%;
    font-size: 28px;
    font-family: GTEestiProDisplay-Regular,serif ;
  }
}

@media (max-width: 550px) {
  .section-1-header{
    width: unset;
    font-size: 20px;
    text-align: center;
  }
  .section-1-para{
    width: unset;
    font-size: 15px;
    margin-left: 12px;
    margin-right: 7px;
  }
  .section-1-btn{
    width: unset;
    padding: 10px 22px;
    margin-right: unset;
    border-radius: 12px;
    font-size: 14px;
  }
  .section-2{
    display: block;
  }
  .section-2-card{
    padding: 23px;
    font-size: 17px;
    line-height: 1;
    letter-spacing: unset;
  }
  h3{
    font-size: 20px;
  }
}

</style>

