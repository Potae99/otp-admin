<template>
  <v-container fluid>

    <div style=" z-index: 10;" class=" text-center">
      <h1 class="text">OTP ADMIN</h1>
    </div>

    <p></p>
    <v-sheet class="fill-height border box-shadow " color="pink lighten-4"
      style="position: relative; z-index: 0; overflow: hidden;">
      <div v-for="(shape, index) in shapes" :key="index" class="shape-background box-shadow1" :style="shape"></div>



      <v-row justify="center" align="center" class="fill-height">

        <v-col cols="12" md="4" class="d-none z d-md-flex justify-center">
          <img src="../image/Saly-11.png" alt="Person Image" class="person-image">
        </v-col>

        <v-col cols="12" md="4" class="d-flex z  justify-center">
          <v-card class="elevation-12" color="teal lighten-4" width="400" max-width="400">
            <v-toolbar color="teal lighten-4" dark flat>
              <v-toolbar-title class=" black--text text-uppercase font-weight-bold">Login</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field label="Username" outlined prepend-icon="mdi-email" label-class="black" required
                  type="text" color="black" class="mb-4 black--text "></v-text-field>
                <v-text-field label="Password" outlined prepend-icon="mdi-lock" label-class="black" required
                  type="password" color="black" class="mb-4 black--text"></v-text-field>
                <v-btn color="white" dark block  class="mt-4 text-login">Login</v-btn>
                <div class="text-center mt-4">
                </div>
              </v-form>
            </v-card-text>

          </v-card>
        </v-col>

      </v-row>
    </v-sheet>

  </v-container>
</template>

<style scoped>
.fill-height {
  height: 80vh;
}

.text-login {
  color: black;
}

.elevation-12 {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: height 0.3s ease;
  overflow: hidden;
}

.expanded {
  height: 450px;
  /* Set the height you want when expanded */
}

.rotate45 {
  rotate: 330deg;

}

.shape-background {
  position: absolute;
  width: 100px;
  /* Adjust width and height for your shape */
  height: 100px;
  background-color: #F6F7C4;
  /* Color of the shape */
  border-radius: 10px;
  /* For rectangle, adjust border-radius for circle */
  z-index: 0;
  /* Place behind the content */
  animation: moveAndRotate 15s linear infinite;
  /* Apply animation to each shape-background */
}
@media (max-width: 100px) {
  .shape-background {
    position: absolute;
    z-index: -1;
  }
  .box-shadow1 {
    box-shadow: none;
  }
}


@keyframes moveAndRotate {
  0% {
    transform: translate(-100%, -100%) translateX(-100px) rotate(0deg);
  }

  50% {
    transform: translate(-100%, -100%) translateX(100px) rotate(180deg);
  }

  100% {
    transform: translate(-100%, -100%) translateX(200px) rotate(360deg);
  }
}

.v-btn--active,
.v-btn--active:hover {
  background-color: #b71c1c !important;
  /* Darken the button on click */
}

.transition-scale {
  transition: transform 0.2s ease-in-out;
}

.v-btn:hover:not(.v-btn--disabled):not(.v-btn--active) {
  transform: scale(1.05);
  /* Scale up on hover */
}

.person-image {
  max-width: 150%;
  height: auto;
}

.z {
  z-index: 1;
}

.border {
  border-radius: 25px;
}

.box-shadow1 {
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.box-rainbow {
  box-shadow:
    rgb(85, 91, 255) 0px 0px 0px 3px,
    rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px,
    rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
}

.text {

  text-transform: uppercase;
  font-family: verdana;
  font-size: 5em;
  font-weight: 700;
  color: #77d5f1;
  text-shadow: 1px 1px 1px #919191,
    1px 2px 1px #919191,
    1px 3px 1px #919191,
    1px 4px 1px #919191,
    1px 5px 1px #919191,
    1px 6px 1px #919191,
    1px 7px 1px #919191,
    1px 8px 1px #919191,
    1px 9px 1px #919191,
    1px 10px 1px #919191,
    1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2),
    1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
}
</style>
<script>
export default {
  layout:"clear",
  data() {
    return {
      shapes: [
        { top: '0%', left: '0%' },
        { top: '15%', left: '20%' },
        { top: '30%', left: '0%' },
        { top: '45%', left: '20%' },
        { top: '60%', left: '0%' },
        { top: '75%', left: '20%' },
        { top: '90%', left: '0%' },
        { top: '105%', left: '20%' },
        { top: '0%', left: '60%' },
        { top: '15%', left: '40%' },
        { top: '30%', left: '60%' },
        { top: '45%', left: '40%' },
        { top: '60%', left: '60%' },
        { top: '75%', left: '40%' },
        { top: '90%', left: '60%' },
        { top: '105%', left: '40%' },
        { top: '0%', left: '80%' },
        { top: '15%', left: '100%' },
        { top: '30%', left: '80%' },
        { top: '45%', left: '100%' },
        { top: '60%', left: '80%' },
        { top: '75%', left: '100%' },
        { top: '90%', left: '80%' },
        { top: '105%', left: '100%' }
      ]
    };
  },
  methods: {
    login() {
      // Handle login
    }
  }
};
</script>
