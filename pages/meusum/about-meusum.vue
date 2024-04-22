<script setup>
import AssetsManager from "~/core/AssetsManager";
const aboutMeusumImages = ref([
  { image: AssetsManager.aboutMeusumImg1 },
  { image: AssetsManager.aboutMeusumImg2 },
  { image: AssetsManager.aboutMeusumImg3 },
  { image: AssetsManager.aboutMeusumImg4 },
  { image: AssetsManager.aboutMeusumImg5 },
  { image: AssetsManager.aboutMeusumImg6 },
]);
</script>

<template>
  <div class="about-mesum">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("about_meusum") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>
    <v-container>
      <v-row>
        <v-col cols="12" md="10">
          <h5 class="text-N75 my-5 line-height line-2 font-medium text-N100">
            يعرض متحف الفيصل للفن العربي الإسلامي مجموعات يحفظها مركز الملك فيصل
            للبحوث والدراسات الإسلامية. يحافظ المتحف على التراث الإنساني، ويثري
            المشهديْنِ الأكاديميّ والثقافيّ بإتاحة مصادر تُلهِم زائريه للإبحار
            في عبق الماضي وتوسيع آفاقهم، إضافة إلى حَفْزِ الحوار بين الباحثين
            والمفكرين والفنانين وكل من لديه فضول للمعرفة. للمتحف أربعة مهام
            رئيسة وهي: إدارة المقتنيات، وتقديم الدراسات والأبحاث، وترميم وتجليد
            المخطوطات، وتنسيق المعارض والفعاليات.
          </h5>
        </v-col>
      </v-row>

      <!-- ========ABOUT MESUM ========= -->
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(item, i) in aboutMeusumImages"
          :key="i"
        >
          <v-img :src="item.image" width="100%" max-height="377px"></v-img>
        </v-col>
        <v-divider class="my-5"></v-divider>
      </v-row>

      <!-- =========== TRANINGS AND LEARNINGS ============= -->
      <v-row>
        <v-col cols="12" md="10">
          <h2 class="text-secondary-500 font-semibold mb-5">
            {{ $t("learning_trainings") }}
          </h2>

          <diV class="d-flex align-center">
            <v-img
              :src="AssetsManager.learningImg1"
              max-width="100%"
              max-height="377px"
            ></v-img>
            <v-img
              :src="AssetsManager.learningImg2"
              max-width="100%"
              max-height="377px"
              class="mx-2"
            ></v-img>
          </diV>

          <h5
            class="learnings-description text-N75 my-5 line-height line-2 font-medium text-N100"
          >
            يُسهِم متحف الفيصل في تعزيز التدريب والتعليم في المملكة. فعلى سبيل
            المثال، في سنة ٢٠١٧م، نسق المتحف دورة تدريبية بعنوان "التجليد وزخرفة
            المخطوطات"، بالإضافة إلى تعاونه مع برنامج "عيش السعودية" للسياحة
            والتراث الوطني. كما عمل المتحف على إتاحة فرص التدريب التعاوني لطلاب
            وطالبات الجامعات منذ ٢٠١٨م، إذ انضم ٤١ طالب وطالبة من جامعتي الملك
            سعود والأميرة نورة للبرامج التدريبة وذلك منذ ٢٠١٨م وحتى ٢٠٢١م. ويقدم
            المتحف أيضًا ورش عمل ومحاضرات عن الفن، والتاريخ، والثقافة (للاطلاع
            على المعارض والفعاليات).
          </h5>
        </v-col>
        <v-divider class="my-5"></v-divider>
      </v-row>

      <!-- ===========MESUM HISTORY ============= -->
      <v-row>
        <v-col cols="12" md="10">
          <h2 class="text-secondary-500 font-semibold mb-5">
            {{ $t("meusum_history") }}
          </h2>

          <diV class="d-flex align-center">
            <v-img
              :src="AssetsManager.historyMeusumImg1"
              max-width="100%"
              max-height="377px"
            ></v-img>
            <v-img
              :src="AssetsManager.historyMeusumImg2"
              max-width="100%"
              max-height="377px"
              class="mx-2"
            ></v-img>
          </diV>

          <h5
            class="learnings-description text-N100 my-5 line-height line-2 font-medium"
          >
            منذ تأسيسه سنة ١٤٠٣هـ/ ١٩٨٣م، قام مركز الملك فيصل للبحوث والدراسات
            الإسلامية بجمع القطع الفنية العربية الإسلامية من جميع أنحاء العالم.
            أقام المركز أول معرض له في ١٤٠٥هـ/ ١٩٨٥م بعنوان "وحدة الفن الإسلامي"
            بمناسبة افتتاح منشآت المركز. كما كانت إدارة الشؤون الثقافية مسؤوله
            عن المقتنيات والمعارض حتى ٢٠١٦م حيث أُقيمت المعارض في مواقعٍ مختلفة
            كقاعة الفن الإسلامي بمركز الملك فيصل وقاعة الملك فيصل التذكارية في
            مؤسسة الملك فيصل الخيرية. متحف الفيصل على شكله الحالي، أُنشِئ في
            ٢٠١٦م، وأُفتُتِح في ١ يونيو ٢٠١٧م بإشراف مديرته الأولى فريدة
            الحسيني.
          </h5>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped></style>
