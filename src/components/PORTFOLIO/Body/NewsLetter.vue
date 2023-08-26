<template>
  <div class="newsletter">

    <div class="parent-wrapper">
      <span class="close-btn glyphicon glyphicon-remove"></span>
      <div class="subscribe-wrapper">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <form class="newsletter-form">

          <input
              required
              type="email"
              name="email"
              autocomplete="off"
              v-model="newsletter.email2"
              class="subscribe-input"
              placeholder="Your e-mail"
          />

        <button class="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NewsLetter",
  data() {
    return {
      newsletter: {
        email2: "",
      },
    };
  },
}
</script>

<style scoped>
.newsletter {
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 60px;
}

.parent-wrapper {
  position: relative;
  width: 400px;
  height: 270px;
  margin: 50px auto 0;
  background-image: url('http://www.imgbase.info/images/safe-wallpapers/digital_art/1_miscellaneous_digital_art/41750_1_miscellaneous_digital_art_simple_dark_shapes.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -600%;
  background-color: #D23535;
  border-radius: 4px;
  color: #FFF;
  box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.5);
}

.close-btn {
  margin: 20px;
  font-size: 18px;
  cursor: pointer;
}

.subscribe-wrapper {
  position: absolute;
  left: -30px;
  right: -30px;
  height: 200px;
  padding: 30px;
  background-position-x: 272%;
  background-position-y: -1px;
  background-repeat: no-repeat;
  background-color: #FFF;
  border-radius: 4px;
  color: #333;
  box-shadow: 0 0 60px 5px rgba(0, 0, 0, 0.4);
}

.subscribe-wrapper:after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: 71px;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #D23535;
}

.subscribe-wrapper h4 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  padding-top: 25px;
  line-height: 28px;
  font-family: GTEestiProDisplay-Regular,serif;
}

.subscribe-wrapper input {
  position: absolute;
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 65%;
  background: transparent;
  transition: all .25s ease;
  font-family: GTEestiProDisplay-Regular,serif;
}

.subscribe-wrapper input:focus {
  outline: none;
  border-bottom: 1px solid #D23535;
}

.subscribe-wrapper .submit-btn {
  position: absolute;
  border-radius: 20px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background-color: #D23535;
  border-color: #D23535;
  color: #FFF;
  padding: 12px 25px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  right: -10px;
  bottom: 30px;
  cursor: pointer;
  transition: all .25s ease;
  box-shadow: -5px 6px 20px 0 rgba(51, 51, 51, 0.4);
  font-family: GTEestiProDisplay-Regular,serif;
}

.subscribe-wrapper .submit-btn:hover {
  background-color: #222222;
  border: #222222;
  font-family: GTEestiProDisplay-Regular,serif;
}

@media (max-width: 500px){
  .parent-wrapper {
    position: relative;
    width: 300px;
    height: 270px;
    margin: 50px auto 0;
  }
  .subscribe-wrapper h4 {
    font-size: 17px;
    padding-top: 20px;
  }
}

</style>
