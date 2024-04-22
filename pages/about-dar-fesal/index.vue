<script setup>
import AssetsManager from "~/core/AssetsManager";

const darFesalImages = ref([
  AssetsManager.darFesalImg1,
  AssetsManager.darFesalImg2,
  AssetsManager.darFesalImg3,
  AssetsManager.darFesalImg4,
]);
</script>

<template>
  <div class="about-dar-fesal">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("dar_fesal") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <v-row>
        <v-col
          cols="6"
          sm="3"
          v-for="(img, i) in darFesalImages"
          :key="i"
          max-height="252px"
        >
          <v-img :src="img" width="100%" height="100%" cover> </v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="10" md="8">
          <p class="description-1 text-main-color line-height line-1 my-5">
            أُنشئت دارة آل فيصل في 1432هــ/2011م لتكون المنبع والمزود الرسمي
            والرئيس لتاريخ الملك فيصل بن عبدالعزيز آل سعود - رحمه الله - وذريته
            كونه جزءًا لا يتجزأ من تاريخ المملكة العربية السعودية. ولتحقيق هذا
            الهدف تسعى الدارة إلى جمع كل ما يتعلق بالملك فيصل وذريته سواء كان
            موثقًا أم مطبوعًا، أم مصورًا أم مرئيًا وسمعيًا، داخل المملكة
            وخارجها. كما تحتفظ الدارة بكل ما يخص الملك فيصل وذريته من الخطب،
            والمقابلات والمؤتمرات الصحفية التي صدرت عنهم في مراحل مختلفة من
            حياتهم طوال مسيرتهم في خدمة الدين والوطن.
          </p>
          <div>
            <v-img
              :src="AssetsManager.darFesalContent1"
              width="100%"
              max-height="430px"
            ></v-img>
          </div>

          <p class="description-2 line-height line-1 my-5">
            أُنشئت دارة آل فيصل في 1432هــ/2011م لتكون المنبع والمزود الرسمي
            والرئيس لتاريخ الملك فيصل بن عبدالعزيز آل سعود - رحمه الله - وذريته
            كونه جزءًا لا يتجزأ من تاريخ المملكة العربية السعودية. ولتحقيق هذا
            الهدف تسعى الدارة إلى جمع كل ما يتعلق بالملك فيصل وذريته سواء كان
            موثقًا أم مطبوعًا، أم مصورًا أم مرئيًا وسمعيًا، داخل المملكة
            وخارجها. كما تحتفظ الدارة بكل ما يخص الملك فيصل وذريته من الخطب،
            والمقابلات والمؤتمرات الصحفية التي صدرت عنهم في مراحل مختلفة من
            حياتهم طوال مسيرتهم في خدمة الدين والوطن.
          </p>
          <div>
            <v-img
              :src="AssetsManager.darFesalContent2"
              width="100%"
              max-height="430px"
            ></v-img>
            <p class="description-3 line-height line-1 my-5">
              يتكون الفلم الوثائقي من أربعة أجزاء، يركز الجزء الأول على نشأه
              الأمير سعود، وأخلاقه وشخصيته. بينما يسلط الجزء الثاني الضوء على
              مرحله شبابه وصولًا لتعيينه وزير الخارجية، من أواخر السبعينات إلى
              بداية الثمانينات، عند وقوع الأحداث الرئيسة، كالثورة في إيران،
              والحرب العراقية الإيرانية، وتأسيس مجلس التعاون الخليجي. ويبرز
              الجزء الثالث الفترة الزمنية من منتصف الثمانينات إلى أوائل القرن
              الحادي والعشرين كأحداث الحرب الأهلية في لبنان، وحرب الخليج
              الثانية، وقضايا الفلسطين، وأحداث ١١ سبتمبر. ويناقش الجزء الرابع
              عدة قضايا، من ضمنها غزو العراق، واغتيال رفيق الحريري، والانتفاضات
              العربية، وعاصفة الحزم في اليمن.
            </p>
          </div>
          <div
            class="text-primary-blue text-decoration-underline my-5 font-weight-bold"
          >
            <a href="#">{{ $t("watch_youtube") }} </a>

            <a href="#" class="mx-5">{{ $t("watch_mbc") }}</a>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12" sm="10" md="8">
          <div class="footer-description">
            <p class="my-5 line-height line-1">
              تُسهِم أيضًا دارة آل فيصل بالتعاون مع دار الفيصل الثقافية بنشر كتب
              عن الملك فيصل وأسرته، تكمن هذه الإسهامات في مراجعة ما يُقدم للنشر
              من الكتب لضمان دقة المحتوى والمراجع، من أحدث ما تمت مراجعته كتاب
              "خطاب الملك فيصل" (نوف العويدي، 2020م) و"سعود الفيصل" (نزار مدني،
              2018م).
            </p>
            <div class="d-flex">
              <v-img
                :src="AssetsManager.darFesalfooter1"
                max-width="335px"
                max-height="473px"
              ></v-img>
              <v-img
                :src="AssetsManager.darFesalfooter2"
                max-width="335px"
                max-height="473px"
                class="mx-5"
              ></v-img>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>