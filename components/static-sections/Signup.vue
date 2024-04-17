<script setup>
// import { useToast } from "vue-toastification";
// import { useLocalePath } from "vue-i18n-routing";
import RoutesManager from "~/core/RoutesManager";
import { rules } from "~/utils/rules.js";
const localePath = useLocalePath();
const name = ref("");
const email = ref("");
const password = ref("");
// const phone = ref("");
const showPassword = ref(false);
const isFormValid = ref(false);
const terms = ref(false);

// ===========ACTIONS ==========

const toggelPass = () => {
  showPassword.value = !showPassword.value;
};

const submitForm = () => {
  errors.value = {};
  let isValid = true;
  if (!rules.name(name.value)) {
    errors.value.name = rules.name(name.value);
    isValid = false;
  }
  if (!rules.required(email.value)) {
    errors.value.email = rules.required(email.value);
    isValid = false;
  }
  if (!rules.email(email.value)) {
    errors.value.email = rules.email(email.value);
    isValid = false;
  }
  if (!rules.required(password.value)) {
    errors.value.password = rules.required(password.value);
    isValid = false;
  }
  if (!rules.password(password.value)) {
    errors.value.password = rules.password(password.value);
    isValid = false;
  }
  // if (!rules.required(phoneNumber.value)) {
  //   errors.value.phoneNumber = rules.required(phoneNumber.value);
  //   isValid = false;
  // }
  // if (!rules.phoneNumber(phoneNumber.value)) {
  //   errors.value.phoneNumber = rules.phoneNumber(phoneNumber.value);
  //   isValid = false;
  // }
  if (!rules.agreeRules(agreeRules.value)) {
    errors.value.agreeRules = rules.agreeRules(agreeRules.value);
    isValid = false;
  }

  // If all fields are valid, proceed with form submission
  if (isValid) {
    // Perform form submission logic here, e.g., send data to a server
    console.log("Form submitted successfully");
  }
};
</script>

<template>
  <div class="static-section-sign-up body-bg relative">
    <BaseBackBtn></BaseBackBtn>
    <v-sheet
      color="transparent"
      class="pt-15 d-flex align-center justify-center"
    >
      <v-card width="610px" height="547px" class="card" elevation="2">
        <v-container>
          <h3 class="text-N100 font-weight-bold text-h5 pt-5">
            {{ $t("welcome") }}
          </h3>
          <v-form ref="form" class="mt-5">
            <v-text-field
              v-model="name"
              :rules="[rules.required, rules.name]"
              :label="$t('name')"
              required
              variant="outlined"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              :label="$t('email')"
              required
              variant="outlined"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="[rules.required, rules.passowrd]"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="!showPassword ? 'password' : 'text'"
              :label="$t('Password')"
              required
              @click:append-inner="toggelPass"
              variant="outlined"
            ></v-text-field>

            <v-checkbox
              v-model="terms"
              color="success"
              :label="$t('agreeOnRules')"
              :rules="[rules.required, rules.agreeRules]"
            ></v-checkbox>
            <div class="d-flex flex-column">
              <v-btn
                class="mt-4"
                color="primary-200"
                block
                @click="submitForm"
                type="submit"
              >
                {{ $t("createAccount") }}
              </v-btn>
            </div>
            <v-sheet
              color="transparent"
              width="50%"
              class="mt-2 mx-auto text-center d-flex align-center text-h6"
            >
              <h6 class="text-N100 mx-2">{{ $t("haveAcount") }}</h6>
              <NuxtLink
                :to="localePath(RoutesManager.login)"
                class="text-primary-200"
                >{{ $t("login") }}</NuxtLink
              >
            </v-sheet>
          </v-form>
        </v-container>
      </v-card>
    </v-sheet>
  </div>
</template>

<style lang="scss" scoped>
.static-section-sign-up {
  padding: 50px;
  .v-checkbox {
    .input {
      width: 20px !important;
    }
  }
}
.v-filed__filed {
  box-shadow: 1px 1px 2px grey;
}
</style>