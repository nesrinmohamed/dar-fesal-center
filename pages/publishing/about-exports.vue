<script setup>
const activeCard = ref("دراسات");
const changeActiveCard = (name) => {
  activeCard.value = name;
};
const searchPapers = ref([
  { name: "دراسات", desc: "ورقة بحثية تزيد على ٥٠٠٠ كلمة" },
  { name: "قراءات", desc: "ورقة بحثية تزيد على ٥٠٠٠ كلمة" },
  { name: "مسارات", desc: "ورقة بحثية تزيد على ٥٠٠٠ كلمة" },
  { name: "تعليقات", desc: "ورقة بحثية تزيد على ٥٠٠٠ كلمة" },
  { name: "متابعات أفريقية", desc: "ورقة بحثية تزيد على ٥٠٠٠ كلمة" },
  { name: "تقرير اسبوعى عن كوفيد 16", desc: "ورقة بحثية تزيد على ٥٠٠٠ كلمة" },
  {
    name: "تقرير اسبوعى عن أثار الكوفيد",
    desc: "ورقة بحثية تزيد على ٥٠٠٠ كلمة",
  },
  { name: "تقدير موقف", desc: "ورقة بحثية تزيد على ٥٠٠٠ كلمة" },
  { name: "تقارير خاصة", desc: "ورقة بحثية تزيد على ٥٠٠٠ كلمة" },
]);
</script>

<template>
  <section class="about-exports">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500">
            {{ $t("about_exports") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <div
        class="about-wxport-description text-main-color font-weight-bold text-h6"
      >
        <p>
          يقوم مركز الملك فيصل للبحوث والدراسات الإسلامية بنشر مختلف الإصدارات
          مثل الأوراق البحثية والكتب والدوريات.
        </p>
        <p class="py-1">حيث تتوفر الأوراق البحثية بصيغة PDF.</p>
        <p>
          كما تقوم دار الفيصل الثقافية والتي تعد ذراع النشر الخاصة بالمركز
          بطباعة الكتب والدوريات
          <span class="text-primary-blue"
            >التي تتوفر في المكتبات ومن خلال الموزعين بالإضافة إلى نقطة البيع
            الخاصة بالمركز.</span
          >
        </p>
        <v-divider class="my-4"></v-divider>
      </div>

      <div class="paper-search">
        <h2 class="text-primary-100 mb-5">
          {{ $t("paper_search") }}
        </h2>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
            v-for="(item, i) in searchPapers"
            :key="i + 's-k'"
          >
            <v-card
              height="140px"
              max-width="278px"
              variant="outlined"
              class="rounded-lg d-flex align-center justify-center px-5 card-item text-center"
              :class="{ active: item.name === activeCard }"
              @click="changeActiveCard(item.name)"
            >
              <div>
                <p class="font-weight-bold mb-5">
                  {{ item.name }}
                </p>
                <span class="text-main-color text-subtitle-2">{{
                  item.desc
                }}</span>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-divider class="my-5"></v-divider>
      </div>
      <div class="books">
        <h2 class="text-primary-100 mb-5">
          {{ $t("books") }}
        </h2>
        <p class="text-subtitle text-main-color font-weight-medium">
          تصدر دار الفيصل الثقافية كتبا باللغتين
          <span class="text-primary-blue">العربية والأنجليزية</span>
        </p>
        <v-divider class="my-5"></v-divider>
      </div>
      <div class="tracks">
        <h2 class="text-primary-100 mb-5">
          {{ $t("tracks") }}
        </h2>
        <p
          class="text-subtitle text-main-color font-weight-medium line-height line-2"
        >
          الدوريات التي تصدرها دار الفيصل الثقافية حالياً باللغة العربية هي
          <span class="text-primary-blue">«مجلة الدراسات اللغوية»</span> و
          <span class="text-primary-dark">«مجلة الفيصل»</span>
          <span class="text-primary-blue">و«المجلة الدولية للدراسات </span>. كما
          أصدرت الدار سابقاً دوريات أخرى مثل<span class="text-primary-blue">
            «مجلة الإسلامالإنسانية»</span
          >
          <span class="text-primary-blue"> «العالم المعاصر»</span>
          <span class="text-primary-blue">«مجلة الفيصل العلمية«</span>
          والتي قد يعاد نشرها مستقبلاً.
        </p>
      </div>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.about-exports {
  .card-item {
    color: $primary-100;
    &.active {
      border: 1px solid #446e7c;
      color: #446e7c !important;
      box-shadow: 0px 4px 4px 0px #0000001a;
    }
  }
}
</style>