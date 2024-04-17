<script setup >
const historyItems = ref([
  { date: "١٣٩٥هـ/١٩٧٥م:", desc: "وفاة الملك فيصل رحمه الله." },
  {
    date: "١٣٩٦هـ/١٩٧٦م::",
    desc: "تأسست مؤسسة الملك فيصل الخيرية على يد أبناء الراحل الملك فيصل.",
  },
  {
    date: "١٣٩٧هـ/١٩٧٧م:",
    desc: "تأسست دار الفيصل الثقافية وصدر العدد الأول من «مجلة الفيصل».",
  },
  {
    date: "١٤٠٢هـ/١٩٨١م:",
    desc: "أبرمت الاتفاقية بين مؤسسة الملك فيصل الخيرية ومنظمة الأمم المتحدة للتربية والعلوم والثقافية (اليونيسكو) لتأسيس مركز بحوث به مكتبة.",
  },
  {
    date: "١٣٩٥هـ/١٩٧٥م:",
    desc: "تأسس مركز الملك فيصل للبحوث والدراسات الإسلامية وعُيِّن صاحب السمو الملكي تركي الفيصل رئيساً لمجلس الإدارة و د. زيد الحسين مديرًا عامًا (المسمى السابق للأمين العام).",
  },
  {
    date: "١٣٩٥هـ/١٩٧٥م:",
    desc: "بدأ تشغيل المركز؛ بدأت مكتبة المركز بتقديم خدماتها؛ أُقيم أول معرض بعنوان وحدة الفن الإسلامي",
  },
  {
    date: "١٣٩٥هـ/١٩٧٥م:",
    desc: "اُفتتحت قاعة الملك فيصل التذكارية لإحياء إرث الملك الفيصل رحمه الله. ظلت القاعة نشطة حتى عام ١٤٣٣هـ/٢٠١٢م.",
  },
  {
    date: "١٣٩٥هـ/١٩٧٥م:",
    desc: "انضمت دار الفيصل الثقافية للمركز (قُرر في عام ١٤٠٨هـ/١٩٨٨م).",
  },
  {
    date: "١٣٩٥هـ/١٩٧٥م:",
    desc: "عُيِّن د. يحيى بن جنيد الأمين العام الثاني للمركز؛ تم تدشين برنامج الباحث الزائر؛ وتدشين «مجلة الدراسات اللغوية».",
  },
  {
    date: "١٣٩٥هـ/١٩٧٥م:",
    desc: "تأسس معهد الفيصل لتنمية الموارد البشرية.",
  },
  {
    date: "١٣٩٥هـ/١٩٧٥م:",
    desc: "تم تدشين «مجلة الفيصل العلمية» بالتعاون مع مدينة الملك عبدالعزيز للعلوم والتقنية. ظلت المجلة نشطة حتى عام ١٤٤٠هـ/٢٠١٩م.",
  },
]);
</script>

<template>
  <div class="history-page">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("history") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <v-list>
        <v-list-item
          v-for="(item, i) in historyItems"
          :key="i"
          class="history-item my-5 mx-10 px-8"
        >
          <v-list-item-subtitle class="text-secondary-500 font-medium py-2">{{
            item.date
          }}</v-list-item-subtitle>
          <v-list-item-title class="text-N600 font-medium">{{
            item.desc
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.history-page {
  .history-item {
    position: relative;
    &:last-child {
      &::before {
        display: none;
      }
    }
    &::after {
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      top: 5px;
      right: -10px;
      border-radius: 50%;
      background: #e9eeef;
      z-index: 3333;
      opacity: 1;
      border: 0;
      outline: none;
    }
    &::before {
      content: "";
      width: 2px;
      height: 100%;
      position: absolute;
      top: 25px;
      right: -1px;
      background: #e9eeef;
    }
  }
}
</style>