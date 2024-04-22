<script setup >
import AssetsManager from "~/core/AssetsManager";

const submitForm = () => {
  errors.value = {};
  let isValid = true;
  if (!rules.name(name.value)) {
    errors.value.name = rules.name(name.value);
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

const contactInfo = ref([
  { icon: AssetsManager.callIcon, text: "+966114555504" },
  { icon: AssetsManager.printIcon, text: "+966114555504" },
  { icon: AssetsManager.callIcon, text: "is@kfcris.com" },
  {
    icon: AssetsManager.locationIcon,
    text: "+P.O. Box 51049 Riyadh 11543Kingdom of Saudi Arabia",
  },
]);
</script>

<template>
  <div class="contact-us">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("contactUs") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="8">
          <v-card elevation="3" class="px-10 py-10">
            <h2 class="write-your-message text-N100 font-regular">
              {{ $t("write_your_message") }}
            </h2>
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
                v-model="writeYourMessage"
                :rules="[rules.required]"
                :label="$t('write_your_message')"
                required
                variant="outlined"
              ></v-text-field>
              <v-text-field
                v-model="messsageSubject"
                :rules="[rules.required]"
                :label="$t('message_subject')"
                required
                variant="outlined"
              ></v-text-field>
              <div class="d-flex flex-column">
                <BaseButton
                  class="mt-4 dark-btn text-h6 py-5"
                  color="primary-200"
                  block
                  @click="submitForm"
                  type="submit"
                >
                  {{ $t("send") }}
                </BaseButton>
              </div>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="px-5 py-5">
            <h2 class="contact-info text-N100 font-regular mb-12">
              {{ $t("contact_info") }} :
            </h2>
            <div v-for="(item, i) in contactInfo" :key="i" class="mb-2 d-flex">
              <v-sheet
                width="48px"
                height="48px"
                class="rounded-xl d-flex align-center justify-center"
                color="primary-50"
              >
                <v-img :src="item.icon" width="50%" height="50%"></v-img>
              </v-sheet>
              <v-list-item-text>{{ item.text }}</v-list-item-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>