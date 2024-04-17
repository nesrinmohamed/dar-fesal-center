<script  >
export default {
  data() {
    return {
      el: 0,
    };
  },
};
import { ref } from "vue";
// import { VStepper } from "vuetify/labs/VStepper";
// const props = defineProps(["data"]);
// props.data.currentStep--;
// const data = props.data;

// const cssStyle = computed(() => {
//   return {
//     "--active-color": data.value.activeColor,
//     "--passive-color": data.value.passiveColor,
//   };
// });
</script>

<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"
        >Name of step 1</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"
        >Name of step 2</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step step="3">Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<style lang="scss" scoped>
.stepes-container {
  margin-top: 31px;
  margin-bottom: -60px;

  .steps-list {
    display: flex;
    align-items: center;
    .step {
      display: flex;
      align-items: cenetr;
      flex-grow: 1;
      widows: 100%;
      height: 60px;
      position: relative;
      .step-bubble {
        width: 20px;
        height: 20px;
        border: 1px solid $N200;
        border-radius: 50%;
        background: var(--passive-color);
      }
    }
  }
}
</style>