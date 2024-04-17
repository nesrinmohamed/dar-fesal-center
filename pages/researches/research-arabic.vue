<script setup >
import AssetsManager from "~/core/AssetsManager";
</script>

<template>
  <div class="arabic-research">
    <BaseHeader>
      <div class="d-flex align-center justify-center py-10">
        <v-container
          class="d-flex align-center justify-space-between flex-wrap"
        >
          <h2 class="text-secondary-500 font-semibold mb-2">
            {{ $t("arabic-research") }}
          </h2>
          <div class="header-buttons d-flex">
            <BaseButton
              class="transparent mx-2 font-light text-secondary-200"
              width="147px"
              height="55px"
            >
              <v-icon size="20" class="mx-1">mdi mdi-heart-outline</v-icon>
              {{ $t("add_favorite") }}
            </BaseButton>
            <BaseButton class="dark-btn" width="147px" height="55px">
              {{ $t("show_exports") }}
            </BaseButton>
          </div>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <v-sheet width="897px" class="falsafa mb-">
        <v-img
          :src="AssetsManager.arabicResearhHeader"
          width="867px"
          height="367px"
          contain
          class="my-5"
        ></v-img>
        <h3 class="text-primary-100 my-5 text-h4">الفلسفة</h3>
        <p class="text-N200 line-height line-1">
          لكلِّ أُمَّةٍ مرويةٌ تحكيها لنفسِها وعنها وتُرْوَى بها جذورُ هي
          الحياةُ، تحيا بها أواصرُ الحصانةِ المجتمعيةِ وشغفُ الحُلْمِ الموروثِ
          وهاجسُ البحثِ عن الأصولِ؛ فما نشأ علمُ التأريخِ إلَّا مِنْ رحمِ ذلكَ
          الهمِّ. هي ليستِ الذاكرةَ فحسبُ، بل «الذاتَ» بالمعنى الأوسعِ، فَمَنْ
          فَقَدَ ذاكرتَهُ فَقَدَ نَسَقَهُ القِيَمِيَّ، كذلك الأُممُ. وَمَنْ
          فَقَدَ ذاتَهُ فَقَدَ جَوْهَرَهُ الفاعلَ، وأمْسَى قَدَرَهُ التخبُّطُ
          بين العَدَمِيَّةِ والهَوَى، كذلك الأُممُ. فماذا عنْ هؤلاءِ العربِ
          واستحقاقِهِمِ الحضارِيِّ؟
        </p>
        <p class="text-N200 line-height line-1">
          استحقاقٌ بِقَدْرِ ذلكَ الإنسانِ الأبيِّ الذي رسمَ بين النجومِ آمالَهُ
          يستهدِي بها، يناجي القِفارَ والمدَى، ويحاورُ الجبالَ والعُلا، بِلُغَةٍ
          عتيقةٍ مُعْجزةٍ، لغةِ شِعْرٍ وصلتْ إلى هامَةِ الوحْيِ؛ فلا أسوارَ ولا
          قِلاعَ. لا يخْشَوْنَ أحدًا، يعيشون أحرارًا، هكذا وَصَفَتْهُمُ
          الأسْفارُ القديمةُ. مَنْ أُولئكَ القومُ الذين قامتْ بِهِمُ الدُّنيا
          بنِبْراسِ رسولٍ عربيٍّ وكتابٍ عربيٍّ وأخلاقٍ عربيةٍ؟ مَنْ يروي
          قِصَّتَهُمْ بين ثباتِ الجغرافيا ومُتحَرِّكِ التاريخِ؟
        </p>

        <p class="text-N200 line-height line-1">
          تسعى «المرويةِ العربيةِ» إلى مُعالجةِ الالتباسِ والتراجُعِ
          الواقِعَيْْنِ في مفهومِ «حضارةِ العربِ»، والوُقُوفِ أمامَ المحاولاتِ
          الدَّؤوبِة لطَمْسِ وتهميشِ الاستحقاقِ الحضاريِّ لنا، بل وفي إشكالِ
          مفهومِ الحضارةِ ذاتِهِ؛ إبرازًا لقِصَّتِنا، وقِصَّةِ لُغَتِنا
          المعُْجزةِ، وتأكيدًا لاستحقاقنا الحضاريِّ الأصيلِ.
        </p>
      </v-sheet>
      <hr class="mt-5" inset />

      <v-sheet class="alroaya mb-5" width="897px">
        <h3 class="text-primary-100 my-5 text-h4">الرؤية</h3>
        <p class="text-N200 line-height line-1">
          دراسة سردية العرب وسيرة اللغة في الجزيرة العربية وخارجها، بمنهجية
          علمية رصينة، وبطريقة تجمع بين أدوات تفعيل الأفكار اجتماعيًّا، ووسائل
          التأسيس المعرفي، لإنتاج حوارات، ودراسات ميدانية، وقراءات نقدية،
          وكتابات علمية تأسيسية، في المجالات التاريخية، والآثارية، والاجتماعية،
          والفلسفية، والأدبية، والفنية.
        </p>
      </v-sheet>
      <hr class="mt-5" thickness="1" />

      <div class="masarat">
        <h3 class="text-primary-100 my-5 text-h4">المسارات</h3>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="i in 7" :key="i">
            <v-img
              :src="AssetsManager.masarImg"
              width="377px"
              height="100%"
              contain
            ></v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>