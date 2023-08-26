<template>
  <div class="alpha">
    <sequential-entrance delay="500">
      <div class="contact-text">
        <h1 class="contact-text-header">How to Find Us</h1>
        <p class="contact-text-para">
          If you have any questions, just fill in the contact form, and we will
          answer you shortly. If you are living nearby, come visit LawExpert at
          one of our comfortable offices.
        </p>
        <h2 class="contact-text-header-3">Headquarters</h2>
        <p class="contact-text-para-2">
          202-208 12c - Live On Traders, Cheetham Hill Road, Manchester, England, M8 8LW
        </p>
        <p class="contact-text-para-3">Telephone: +44 3300010876</p>
<!--        <p class="contact-text-para-4">E-mail: support@liveontraderslimited.com</p>-->
        <a href="mailto:support@liveontraderslimited.com" class="contact-text-para-4">E-mail: support@liveontraderslimited.com</a>
      </div>
    </sequential-entrance>

    <div id="contact-form" class="contact-form">
      <h1 class="contact-form_title">Get in Touch</h1>

      <form class="form" >
        <input
          required
          name="name"
          v-model="contact.name"
          placeholder="Name"
          type="text"
          autocomplete="off"
        />
        <input
          required
          name="email"
          v-model="contact.email"
          placeholder="E-mail"
          type="email"
        />
        <textarea
          name="message"
          v-model="contact.message"
          rows="4"
          placeholder="Message"
        ></textarea>
        <button class="button" @click.prevent="onPostClick">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactBody",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async onPostClick() {
      await this.$router.push('/');
      await alert("Message Sent");
      await window.scrollTo(0, 0);
    }
  },
};
</script>

<style scoped>
.alpha {
  display: flex;
  justify-content: space-between;
  padding-top: 7%;
  padding-bottom: 7%;
}

input{
  font-family: GTEestiProDisplay-Bold, serif;
}
::placeholder{
  font-family: GTEestiProDisplay-Bold, serif;
  color: #222222;
}
textarea{
  font-family: GTEestiProDisplay-Bold, serif;
}

.contact-text {
  padding-right: 15%;
  margin-left: 9%;
  color: #222222;
  font-size: 19px;
}
.contact-form {
  max-width: 600px;
  width: 100%;
  margin-right: 10%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  padding: 20px 30px;
  border-radius: 12px;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  text-align: center;
  font-size: 30px;
  padding-bottom: 12px;
  font-family: GTEestiProDisplay-Bold, serif;
  color: #D23535;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: "Roboto", sans-serif;
  padding: 20px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #D23535;
  border: solid 1px #D23535;
  color: white;
  cursor: pointer;
  padding: 10px 40px;
  text-align: center;
  text-transform: uppercase;
  font-family: GTEestiProDisplay-Bold, serif;
  border-radius: 12px;
}

.contact-form .button:hover {
  background: #222222;
  border: solid 1px #222222;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}

.contact-text-header {
  text-align: center;
  font-size: 30px;
  font-family: GTEestiProDisplay-Bold, serif;
  color: #D23535;
}

.contact-text-para {
  font-size: 20px;
  padding-top: 13px;
  padding-bottom: 13px;
  font-family: GTEestiProDisplay-Bold, serif;
  color: #222222;
}

.contact-text-header-3 {
  padding-bottom: 15px;
  font-family: GTEestiProDisplay-Bold, serif;
  color: #D23535;
}

.contact-text-para-2 {
  padding-bottom: 15px;
  font-family: GTEestiProDisplay-Bold, serif;
  color: #222222;
}

.contact-text-para-3 {
  padding-bottom: 17px;
  font-family: GTEestiProDisplay-Bold, serif;
  color: #222222;
}

.contact-text-para-4 {
  font-family: GTEestiProDisplay-Bold, serif;
  color: #222222;
}

@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-text{
    text-align: center;
  }
  .contact-text-para-2{
    padding-bottom: unset;
  }
  .contact-text-para-3{
    padding-bottom: unset;
  }
  .contact-form_title{
    font-size: 26px;
  }
}

@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }
}

@media (max-width: 500px){
  .contact-text-header {
    font-size: 30px;
  }
  .contact-text-para {
    font-size: 18px;
  }
  .contact-form{
    margin-left: 10px;
    margin-top: 12%;
    max-width: unset;
    width: unset;
    margin-right: 10px;
  }

}

</style>
