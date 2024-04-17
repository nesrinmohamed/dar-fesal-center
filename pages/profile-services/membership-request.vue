<script setup >
definePageMeta({
  layout: "profile-services",
});
import RoutesManager from "~/core/RoutesManager";
import AssetsManager from "~/core/AssetsManager";
import { rules } from "~/utils/rules.js";

const localePath = useLocalePath();
const name = ref("");
const phone = ref("");
const email = ref("");
const university = ref("");
const college = ref("");
const department = ref("");
const messageTitle = ref("");
const messageLevel = ref("");
const files = ref([]);
const isFormValid = ref(false);
const terms = ref(false);
const academicInstitution = ref("");
const academicDegree = ref("");

// ===========ACTIONS ==========
const items = ref(["Foo", "Bar", "Fizz", "Buzz"]);

const handleFileChange = (file) => {
  console.log("file", file);
};
const submitForm = () => {
  // Clear previous errors
  errors.value = {};
  // Perform validation on each field
  let isValid = true;
  // if (!rules.required(name.value)) {
  //   errors.value.name = rules.required(name.value);
  //   isValid = false;
  // }
  if (!rules.name(name.value)) {
    errors.value.name = rules.name(name.value);
    isValid = false;
  }
  if (!rules.email(email.value)) {
    errors.value.email = rules.email(email.value);
    isValid = false;
  }

  if (!rules.required(files.value)) {
    errors.value.files = rules.required(files.value);
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
  if (!rules.required(phoneNumber.value)) {
    errors.value.phoneNumber = rules.required(phoneNumber.value);
    isValid = false;
  }
  if (!rules.phoneNumber(phoneNumber.value)) {
    errors.value.phoneNumber = rules.phoneNumber(phoneNumber.value);
    isValid = false;
  }
  if (!rules.agreeRules(agreeRules.value)) {
    errors.value.agreeRules = rules.agreeRules(agreeRules.value);
    isValid = false;
  }
  if (isValid) {
    // Perform form submission logic here, e.g., send data to a server
    console.log("Form submitted successfully");
  }
};
// ===========ACTIONS ==========
</script>

<template>
  <v-sheet width="100%" color="transparent" class="request-assistance body-bg">
    <v-row dir="rtl">
      <v-col md="4" v-if="!$vuetify.display.smAndDown">
        <BaseSidebar> </BaseSidebar>
      </v-col>

      <v-col cols="12" md="8">
        <div class="surve-request relative">
          <div>
            <h3 class="survey-title text-h5 font-weight-bold text-N100">
              {{ $t("newMmbership") }}
            </h3>
            <v-sheet
              color="transparent"
              class="back-to-home"
              width="100px"
              height="26px"
            >
              <NuxtLink
                :to="localePath(RoutesManager.back)"
                class="d-flex align-center"
              >
                <span class="text-primary-200">{{ $t("back") }}</span>
                <v-img
                  :src="AssetsManager.undoIcon"
                  width="20"
                  height="20"
                  contain
                >
                </v-img>
              </NuxtLink>
            </v-sheet>
          </div>
          <!-- #########[STEPERS]########  -->
          <v-sheet
            color="transparent"
            class="pt-10 d-flex align-center justify-center"
          >
            <v-card width="610px" class="card" elevation="2">
              <v-container>
                <h3 class="text-N100 font-weight-bold text-h5 pt-5">
                  {{ $t("newMmbership") }}
                </h3>
                <v-form ref="form" class="mt-5">
                  <!-- الاسم الثلاثى  -->
                  <v-text-field
                    v-model="name"
                    :rules="[rules.required, rules.name]"
                    :label="$t('fullName3')"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <!-- الجهة العلمية  -->
                  <v-text-field
                    v-model="academicInstitution"
                    :rules="[rules.required]"
                    :label="$t('academicInstitution')"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="academicDegree"
                    :rules="[rules.required]"
                    :label="$t('academicDegree')"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <!-- رقم الجوال  -->
                  <v-text-field
                    v-model="phone"
                    :rules="[rules.required, rules.phoneNumber]"
                    :label="$t('phone')"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <!-- البريد الالكترونى -->
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    :label="$t('email')"
                    required
                    variant="outlined"
                  ></v-text-field>

                  <!--   المرفقات  -->
                  <v-file-input
                    v-model="files"
                    variant="outlined"
                    accept="image/*"
                    :label="$t('subject_certifcate')"
                    prepend-icon=""
                    append-inner-icon="mdi-paperclip"
                    required
                    :rules="[rules.required, rules.files]"
                  >
                  </v-file-input>
                  <div class="d-flex align-center">
                    <h4 class="text-N100">{{ $t("cost") }}</h4>
                    <span>20 ريال</span>
                  </div>
                  <div class="d-flex flex-column">
                    <v-btn
                      class="mt-4"
                      color="primary-200"
                      block
                      @click="submitForm"
                      type="submit"
                    >
                      {{ $t("subscribeNow") }}
                    </v-btn>
                  </div>
                </v-form>
              </v-container>
            </v-card>
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style lang="scss" scoped>
.survey-request {
  .survey-title {
    position: absolute;
    right: 10px;
    top: 20px;
  }
}
.title {
  z-index: 55555;
  position: relative;
  width: 80%;
  margin: auto;
  margin-top: 10%;
  .link-name {
    font-size: 10px;
  }
}
</style>