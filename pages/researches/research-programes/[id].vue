<script setup >
import AssetsManager from "~/core/AssetsManager";
import { useRoute } from "vue-router";
const route = useRoute();
const centerExports = ref([
  {
    jobTile:
      "ظائف أفضل للغد: الجاذبية والأهمية المتزايدة للمؤهلات البديلة في المملكة العربية السعودية",
    jobDesc: "دراسات، 2023م. (مع هناء المعيبد)",
  },
  {
    jobTile:
      "ظائف أفضل للغد: الجاذبية والأهمية المتزايدة للمؤهلات البديلة في المملكة العربية السعودية",
    jobDesc: "دراسات، 2023م. (مع هناء المعيبد)",
  },
  {
    jobTile:
      "ظائف أفضل للغد: الجاذبية والأهمية المتزايدة للمؤهلات البديلة في المملكة العربية السعودية",
    jobDesc: "دراسات، 2023م. (مع هناء المعيبد)",
  },
]);
const books = ref([
  {
    jobTitle: "I.B. Tauris, 2022. (Co-edited with Neil Quilliam)",
    jobDesc:
      "Governance and Domestic Policymaking in Saudi Arabia: Transforming Society, Economics, Politics and Cultur",
  },
  {
    jobTitle: "I.B. Tauris, 2022. (Co-edited with Neil Quilliam)",
    jobDesc:
      "Governance and Domestic Policymaking in Saudi Arabia: Transforming Society, Economics, Politics and Cultur",
  },
  {
    jobTitle: "I.B. Tauris, 2022. (Co-edited with Neil Quilliam)",
    jobDesc:
      "Governance and Domestic Policymaking in Saudi Arabia: Transforming Society, Economics, Politics and Cultur",
  },
]);
const exports = ref([
  {
    title:
      "“Societal Perceptions of the Saudi Government’s Response to the COVID-19 Pandemic”, in Stanley D. Brunn, Donna Gilbreath (eds.), COVID-19 and a World of Ad Hoc Geographies, Springer, 2022.",
  },
  {
    title:
      "“Societal Perceptions of the Saudi Government’s Response to the COVID-19 Pandemic”, in Stanley D. Brunn, Donna Gilbreath (eds.), COVID-19 and a World of Ad Hoc Geographies, Springer, 2022.",
  },
  {
    title:
      "“Societal Perceptions of the Saudi Government’s Response to the COVID-19 Pandemic”, in Stanley D. Brunn, Donna Gilbreath (eds.), COVID-19 and a World of Ad Hoc Geographies, Springer, 2022.",
  },
]);
</script>

<template>
  <div class="reaserher-details">
    <v-container>
      <v-card
        max-width="278px"
        max-height="348px"
        elevation="0"
        variant="outlined"
        color="secondary-500"
        class="text-center d-flex align-center justify-center flex-column px-2 py-1 rounded-lg"
      >
        <v-img
          :src="AssetsManager.user"
          width="100%"
          max-height="277px"
          contain
        ></v-img>
        <p class="user-name text-secondary-500 py-5">مارك جاسون</p>
      </v-card>
      <div>
        <h3 class="program-title my-3 text-N200 text-subtitle-1">
          برنامج الدراسات الاجتماعية الاقتصادية
        </h3>
        <p class="text-N400 line-height line-1">
          د. ثومبسون باحث رئيس بمركز الملك فيصل للبحوث والدراسات الإسلامية.
          عُيِّنَ رئيس برنامج الدراسات الاجتماعية الاقتصادية في أبريل 2020م. كان
          باحثًا متعاونًا بالمركز لعدة سنوات. وشغل سابقاً منصب أستاذ مساعد
          لدراسات الشرق الأوسط في جامعة الملك فهد للبترول والمعادن (KFUPM) منذ
          2012م، وقبل ذلك درّس في جامعة الأمير سلطان ومدرسة سلاح الإشارة التابعة
          للحرس الوطني السعودي. وحصل على درجة الدكتوراه من معهد الدراسات العربية
          والإسلامية، جامعة إكستر.
        </p>
        <div>
          <span>{{ $t("contact") }} : </span>
          <a href="" class="text-primary-blue text-decoration-underline"
            >mthompson@kfcris.com</a
          >
          <v-divider vertical> </v-divider>
          <a href="" class="text-primary-blue">{{ $t("show_cv") }}</a>
        </div>
        <v-divider class="my-5"></v-divider>
      </div>

      <div class="center-exports">
        <h3 class="program-title my-3 text-N300">
          {{ $t("center_exports") }}
        </h3>
        <div v-for="(item, i) in centerExports" :key="i">
          <span class="text-primary-blue my-2">{{ item.jobTile }}</span>
          <span>{{ item.jobDesc }}</span>
        </div>
        <v-divider class="my-5"></v-divider>
      </div>
      <div class="center-books my-5">
        <h3 class="program-title text-N300">
          {{ $t("books") }}
        </h3>
        <div v-for="(item, i) in books" :key="i" class="my-5">
          <span class="text-primary-blue">{{ item.jobDesc }}</span>
          <span>{{ item.jobTitle }}</span>
        </div>
        <v-divider class="my-5"></v-divider>
      </div>

      <div class="main_exports">
        <h3 class="program-title my-3 text-N300">
          {{ $t("main_exports") }}
        </h3>
        <div v-for="(item, i) in exports" :key="i" class="my-5">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.v-divider--vertical {
  border-width: 0px 1px 30px;
  margin: 0 12px 0;
  display: inline-flex;
  position: relative;
  top: 10px;
}
</style>