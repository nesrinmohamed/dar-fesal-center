<script setup >
definePageMeta({
  layout: "profile-services",
});
import RoutesManager from "~/core/RoutesManager";
import AssetsManager from "~/core/AssetsManager";
import { rules } from "~/utils/rules.js";

const localePath = useLocalePath();
const title = ref("");
const name = ref("");
const university = ref("");
const email = ref("");
const password = ref("");
const phone = ref("");
const files = ref([]);
const showPassword = ref(false);
const isFormValid = ref(false);
const terms = ref(false);
const Keywords = ref("");
const specialization = ref("");
const descriptionOfTheSubject = ref("");
const el = reactive(1);
// ===========ACTIONS ==========

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

const RequestAssistanceItemsLinks = ref({
  title: "StepsCertificate",

  links: [
    { icon: "mdi mdi-check", name: "استيفاء البيانات الشخصية" },
    {
      icon: "mdi mdi-check",
      name: "كتابة عنوان بحث واحد فقط بدون مقدمات أو تعليقات وان يكون بشكل واضح",
    },
    {
      icon: "mdi mdi-check",
      name: "تسديد رسوم 35 'الرسوم شاملة القيمة المضافة ريال للحصول على إفادة رسمية بعد التأكد من أن الموضوع لم يبحث'",
    },
    {
      icon: "mdi mdi-check",
      name: "بعد دفع رسوم الإفادة يرجى ارسال ايصال الإيداع",
    },
  ],
});
</script>

<template>
  <v-sheet width="100%" color="transparent" class="request-assistance body-bg">
    <v-row dir="rtl">
      <v-col md="4" v-if="!$vuetify.display.smAndDown">
        <BaseSidebar>
          <div class="title text-white">
            <h4 class="mr-5 font-weight-meduim">
              {{ $t(RequestAssistanceItemsLinks.title) }}
            </h4>
            <v-list bg-color="transparent">
              <v-list-item
                v-for="(link, index) in RequestAssistanceItemsLinks.links"
                :key="index"
              >
                <div class="d-flex">
                  <v-icon size="20" class="mt-1">{{ link.icon }}</v-icon>
                  <div>
                    <span class="link-name mx-1">{{ link.name }}</span>
                  </div>
                </div>
              </v-list-item>
            </v-list>
          </div>
        </BaseSidebar>
      </v-col>

      <v-col cols="12" md="8">
        <div class="surve-request relative body-bg">
          <div class="pb-15">
            <h3 class="survey-title text-h5 font-weight-bold text-N100">
              {{ $t("certificate_request") }}
            </h3>
            <v-sheet
              color="transparent"
              class="back-to-home mt-5"
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
          <v-stepper
            alt-labels
            :class="$vuetify.display.name"
            bg-color="transparent"
            hide-actions
            v-model="el"
          >
            <template v-slot:default="{ prev, next }">
              <v-stepper-header>
                <v-stepper-item
                  :title="$t('certificate_request')"
                  value="1"
                  editable
                  :complete="e1"
                ></v-stepper-item>

                <v-divider></v-divider>

                <v-stepper-item
                  :title="$t('review_order')"
                  value="2"
                  editable
                  :complete="el"
                ></v-stepper-item>

                <v-divider></v-divider>

                <v-stepper-item
                  :title="$t('select_refrence')"
                  value="3"
                  editable
                  :complete="e1"
                ></v-stepper-item>
                <v-divider></v-divider>

                <v-stepper-item
                  :title="$t('select_pages')"
                  value="4"
                  editable
                  :complete="e1"
                ></v-stepper-item>
                <v-divider></v-divider>

                <v-stepper-item
                  :title="$t('pay_the_fees')"
                  value="5"
                  editable
                  :complete="e1"
                ></v-stepper-item>
              </v-stepper-header>

              <v-stepper-window>
                <v-stepper-window-item value="1" complete editable>
                  <v-sheet
                    class="pt-10 mb-5 d-flex align-center justify-center"
                    color="transparent"
                  >
                    <v-card
                      width="600px"
                      class="card elevation-2 rounded-lg"
                      elevation-2
                    >
                      <v-container>
                        <h3 class="text-N100 font-weight-bold text-h5 pt-5">
                          {{ $t("certificate_request") }}
                        </h3>
                        <v-form ref="form" class="mt-5">
                          <v-text-field
                            v-model="title"
                            :rules="[rules.required]"
                            :label="$t('certificate_request')"
                            required
                            variant="outlined"
                          ></v-text-field>

                          <v-text-field
                            v-model="specialization"
                            :rules="[rules.required]"
                            :label="$t('specialization')"
                            required
                            variant="outlined"
                          ></v-text-field>
                          <v-textarea
                            v-model="descriptionOfTheSubject"
                            :rules="[rules.required]"
                            :label="$t('descriptionOfTheSubject')"
                            required
                            variant="outlined"
                          ></v-textarea>

                          <v-text-field
                            v-model="Keywords"
                            :rules="[rules.required]"
                            :label="$t('Keywords')"
                            required
                            variant="outlined"
                          ></v-text-field>
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
                </v-stepper-window-item>

                <v-stepper-window-item value="2" complete editable>
                  <v-card
                    max-width="600px"
                    class="my-5 mt-15 mx-auto rounded-lg d-flex flex-column align-center justify-start py-5"
                  >
                    <div>
                      <v-img
                        :src="AssetsManager.reviewsImg"
                        width="100px"
                        height="100px"
                      ></v-img>
                    </div>
                    <h3 class="my-8 text-N200">جارى مراجعة طلب الإستقصاء</h3>
                    <span class="text-N100"
                      >سيتم اعلامكم بنتيجة الطلب قريبآ</span
                    >
                    <BaseButton
                      class="green-noborder mt-15"
                      @click="
                        router.push(localePath(RoutesManager.personalInfo))
                      "
                    >
                      {{ $t("back_person_page") }}</BaseButton
                    >
                  </v-card>
                </v-stepper-window-item>

                <v-stepper-window-item value="3" complete editable>
                  <v-sheet
                    color="transparent elevation-0 mx-auto"
                    max-width="632px"
                    class="mt-10"
                  >
                    <h4 class="text-N75">
                      {{ $t("subject_title") }} :
                      <span class="text-N100">السياحة فى السعودية</span>
                    </h4>
                    <v-card class="px-10 py-5 mt-5">
                      <h4 class="text-N75 mb-10">
                        يرجى اختيار المراجع المطلوبة :
                      </h4>
                      <v-checkbox
                        v-model="checkbox1"
                        color="success"
                        base-color="success"
                        :label="'اسم المرجع يكتب هنا'"
                        v-for="(item, i) in 4"
                        :key="i"
                        class="mt-n10"
                      ></v-checkbox>

                      <base-button class="green-noborder w-25" @click="next">{{
                        $t("save")
                      }}</base-button>
                    </v-card>
                    <v-card color="#E6F3F0" class="rounded-lg my-5 px-5 py-5">
                      <h4>{{ $t("important_info") }} :</h4>
                      <ul class="px-3 text-secondary-600 mt-2 text-subtitle-1">
                        <li>
                          المواضيع المختارة هى مواضيع يرغب الباحث فى تصويرها
                        </li>
                        <li>التصوير بنسبة 20%</li>
                      </ul>
                    </v-card>
                  </v-sheet>
                </v-stepper-window-item>
                <v-stepper-window-item value="4" complete editable>
                  <v-sheet color="transparent" max-width="800" class="mx-auto">
                    <v-card
                      color="#E6F3F0"
                      class="rounded-lg my-5 mt-15 px-5 py-5"
                    >
                      <h4>{{ $t("important_info") }} :</h4>
                      <ul class="px-3 text-secondary-600 mt-3 text-subtitle-2">
                        <li class="mb-2">
                          نرجو الإطلاع على ملف الفهرس للموضوع وتحديد عدد الصفحات
                          التى ترغب فى أخذ نسخ لها
                        </li>
                        <li>
                          يجب أن تكون نسبة التصوير لا تتجاوز 20% من عدد صفحات
                          الكتاب الإجمالى
                        </li>
                      </ul>
                    </v-card>
                    <v-card>
                      <v-row>
                        <v-col cols="3" sm="3" md="2">
                          <span class="text-subtitle-1">{{
                            $t("refrences")
                          }}</span>
                        </v-col>
                        <v-col cols="3" sm="3" md="2">
                          <span class="text-subtitle-1">{{ $t("index") }}</span>
                        </v-col>
                        <v-col cols="6" sm="3" md="2">
                          <span class="text-subtitle-1">{{
                            $t("pages_number")
                          }}</span>
                        </v-col>
                        <v-col cols="6" sm="3" md="6">
                          <span class="text-subtitle-1">
                            {{ $t("choose_pages_number") }}</span
                          >
                        </v-col>
                      </v-row>
                    </v-card>

                    <v-card
                      color="transparent"
                      v-for="i in 4"
                      :key="i"
                      class="elevation-0"
                    >
                      <v-sheet color="transparent" height="60px" class="my-2">
                        <v-row>
                          <v-col cols="3" sm="2">
                            <span class="text-small boonk-name"
                              >اسم المرجع</span
                            >
                          </v-col>
                          <v-col cols="2" sm="2">
                            <span class="text-primary-200">pdf</span>
                          </v-col>
                          <v-col cols="2" sm="2">
                            <span class="text-primary-200">100</span>
                          </v-col>
                          <v-col cols="5" sm="6" class="d-flex">
                            <div class="d-flex">
                              <label for="" class="mx-2">من</label>
                              <v-text-field
                                v-model="from"
                                min="1"
                                type="number"
                                variant="outlined"
                                :style="{
                                  width: '71px',
                                  height: '90px',
                                }"
                                base-color="primary-100"
                                required
                                :rules="[rules.required]"
                              ></v-text-field>
                            </div>
                            <div class="d-flex mx-3">
                              <label for="" class="mx-2">الى</label>
                              <v-text-field
                                v-model="to"
                                min="1"
                                variant="outlined"
                                type="number"
                                required
                                :rules="[rules.required]"
                                base-color="primary-100"
                                :style="{
                                  width: '71px',
                                  height: '90px',
                                }"
                              ></v-text-field>
                            </div>
                          </v-col>
                        </v-row>
                      </v-sheet>

                      <v-divider></v-divider>
                    </v-card>

                    <div
                      class="d-flex align-center justify-space-between flex-wrap my-10"
                    >
                      <BaseButton
                        class="green-noborder mb-2"
                        width="227px"
                        @click="next"
                        >{{ $t("follow_up") }}</BaseButton
                      >
                      <BaseButton
                        class="outlined-2"
                        width="227px"
                        @click="prev"
                        >{{ $t("back") }}</BaseButton
                      >
                    </div>
                  </v-sheet>
                </v-stepper-window-item>
                <v-stepper-window-item value="5">
                  <v-card class="mt-15 mx-auto py-5 px-10" max-width="605px ">
                    <h4 class="text-N75">
                      {{ $t("subject_certifcate") }} :
                      <span class="text-N100">موضوع الافادة يكتب هنا</span>
                    </h4>
                    <p class="text-N75 py-5">
                      {{ $t("cost") }} : <span class="text-N100">20ريال</span>
                    </p>
                    <p class="text-N100 mb-5">
                      نرجو ادخال الاسم المراد طباعة الافادة له
                    </p>
                    <v-text-field
                      variant="outlined"
                      :label="$t('fullName3')"
                      required
                      :rules="[rules.required, rules.name]"
                    ></v-text-field>
                    <div
                      class="d-flex align-center justify-space-between flex-wrap"
                    >
                      <BaseButton class="green-noborder mt-2" width="227px">{{
                        $t("complete_buy")
                      }}</BaseButton>
                      <BaseButton width="227px" class="cancel mt-2">{{
                        $t("cancel")
                      }}</BaseButton>
                    </div>
                  </v-card>
                </v-stepper-window-item>
              </v-stepper-window>
              <!-- <v-stepper-actions
                @click:prev="prev"
                @click:next="next"
              ></v-stepper-actions> -->
            </template>
          </v-stepper>
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