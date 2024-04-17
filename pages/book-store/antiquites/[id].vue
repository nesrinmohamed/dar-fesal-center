<script setup >
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="antiquites-details mt-n5" :class="$vuetify.display.name">
    <BaseHeader>
      <div class="d-flex align-center py-10">
        <v-container class="py-10">
          <v-row>
            <v-col cols="12" md="5">
              <v-card class="px-2 py-2" max-height="495.91px" max-width="377px">
                <v-img
                  :src="AssetsManager.cardImage"
                  width="100%"
                  max-height="474.29px"
                  contain
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" md="7">
              <h3 class="antiquite-name text-N100">
                العلوم الاسلامية وقيام النهضة الأوروبية (مترجم)
              </h3>
              <h6 class="auther my-5 text-primary-100">
                المؤلف: د. جورج صليبا
              </h6>
              <p class="price text-primary-dark">السعر: ٨٥ ريال</p>
              <v-sheet
                max-width="759px"
                height="242px"
                class="py-5 px-5 book-description rounded-lg my-5"
              >
                <h5>السنة: ٢٠٢٣</h5>
                <h5>اللغة: عربي</h5>
                <h5>السلسلة: سلسلة الكتب المترجمة</h5>
                <h5>الطبعة: ١</h5>
                <h5>الغلاف: عادى</h5>
              </v-sheet>
              <div
                class="d-flex align-center justify-space-around flex-wrap mt-5 add-to-card-buttons"
              >
                <v-btn
                  class="direct-buy text-white"
                  color="secondary-200"
                  elevation="0"
                  >{{ $t("buy") }}</v-btn
                >
                <v-btn
                  class="add-to-card text-white"
                  color="primary-100"
                  elevation="0"
                  @click="router.push(localePath(RoutesManager.cart))"
                >
                  {{ $t("add_to_card") }}</v-btn
                >
                <v-btn
                  color="transparent"
                  class="add-favorite d-flex align-center px-2"
                  elevation="0"
                >
                  <v-icon color="secondary-200">mdi mdi-heart-outline</v-icon>
                  <span class="text-secondary-200">{{
                    $t("add_to_favorite")
                  }}</span>
                </v-btn>
              </div>

              <div>
                <p class="text-subtitle-2 mt-5">
                  {{ $t("you_can_buy") }}
                  <NuxtLink
                    :to="RoutesManager.soldPoints"
                    class="text-secondary-200"
                    >{{ $t("center_sold_points") }}</NuxtLink
                  >
                </p>
              </div>
            </v-col>
          </v-row>

          <!-- ABOUT BOOK  -->
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <v-sheet class="about-book-description" max-width="752px">
        <!-- ABOUT BOOK  -->
        <v-sheet class="about-book my-5">
          <h2 class="text-secondary-500 my-3">{{ $t("about_book") }}</h2>
          <p
            class="font-size-small text-N100 font-weight-meduim line-height line-2"
          >
            هذا الكتاب هو بالدرجة الأولى محاولة لدراسة تاريخ العلوم الإسلامية
            والعربية. إذ يتناول بالنقد النظريات الشائعة حول مكانة هذه العلوم
            ويحاول الاستفادة من أحدث نتائج البحث التاريخي لصياغة سردية جديدة
            يمكنها تقديم تفسير أفضل للتطورات العلمية على نحو خاص والاتجاهات
            الكبرى في التاريخ الفكري للحضارة الإسلامية على نحو أشمل. يتطرق
            الكتاب إلى التقسيم المرحلي للعلوم، وارتباطها بمحيطها الفكري الواسع،
            والأبعاد الاجتماعية والسياسية للإنتاج العلمي، والعلاقة بين التفاصيل
            العلمية التقنية في علم بعينه والتقدير والدعم الاجتماعي الذي حظيت به
            العلوم. ويُعنى مركز الملك فيصل للبحوث والدراسات الإسلامية منذ تأسيسه
            عام ١٤٠٣هـ/ ١٩٨٣م بتراث الحضارة العربية والإسلامية، وانطلاقًا من
            رسالته العلمية التي تهدف إلى نشر المعرفة، والعناية بالتراث، وتعزيز
            الهوية العربية؛ أطلق المركز مبادرة (المروية العربية) كمشروع جديد
            يمثّل موجةً من المثاقفة الأممية التي تكشف عن السردية الموضوعية لما
            كانت عليه حضارة العرب والمسلمين عبر التاريخ من تفوُّقٍ وإبداع، وما
            لها من آثارٍ على تطور العلوم الإنسانية وغيرها من المجالات، ولعل
            التصفُّح الموضوعي لتاريخ العلوم العربية الإسلامية على وجه الخصوص؛
            يكشف لنا عن أبعاد وآليات تأثيرها العميق في قيام النهضة الأوربية التي
            أفادت من علوم الحضارة الإسلامية في عصورها الأولى، وقد عمد المركز إلى
            تخيُّر أرفع الدراسات الأكاديمية والبحوث العلمية التي تصبُّ في تحقيق
            الرؤية الموضوعية لــ(المروية العربية) ونشرها لتكون بين أيدي القرّاء
            في بيانٍ مشرق، ودقة عالية، إسهامًا في تطوير الوعي بالذات، والاعتزاز
            بالهوية، وإحياء الريادة العربية الإسلامية، وتعزيز المفهوم الحضاري
            للثقافة العربية لدى أجيالنا الحاضرة. ومن هذه الدراسات المهمة المتقنة
            التي أولاها المركز عناية كبيرة؛ كتاب «العلوم الإسلامية وقيام النهضة
            الأوروبية»، لمؤلفه البروفيسور جورج صليبا، المؤرِّخ والباحث المعروف،
            وقد نقله إلى العربية المترجِم المقتدر الدكتور حكمت درباس، وقام فريق
            النشر في المركز بمراجعته والعناية بإنتاجه حتى يخرج بصورةٍ مُرضية.
            يندرج هذا الكتاب ضمن الأعمال العلمية الجادة التي تتناول (تاريخ
            العلوم)، ويعني بالعلوم تلك التي أنتجتها الحضارة العربية الإسلامية.
            (الإسلامية) بالمعنى الحضاري العميق الذي يشمل كل مَن يستظل بتلك
            الحضارة من مسلمين وغير مسلمين، و(العربية) بالمعنى الثقافي للهوية
            العربية التي كانت لغة العلم طيلة تلك القرون المزدهرة، حيث يدور
            الكتاب حول علم الفلك بأبعادٍ مختلفة؛ من سؤال البدايات، مرورًا
            بالتطوّر، فالتأثير، وصولًا إلى تحليل ما وُصف بعصر الانحطاط وتراجع
            الفكر العلمي، وما تلا ذلك العصر من إنجازات علمية إسلامية أفرزت
            نتائجها كثيرًا من الأسئلة حول مصطلح الانحطاط، وأهمية تحليل أبعاده،
            وربما إعادة تفكيك مفهومه برؤية علمية موضوعية وجديدة. كل ذلك برصدٍ
            تاريخي، وتحليلٍ فلسفي، ومناقشةٍ موضوعية، لوضع هذا المنجز الحضاري في
            موضعه اللائق به، والإسهام في تأسيس رؤية معرفية لتحقيق أهداف (المروية
            العربية) في سياق يربط بين الماضي والحاضر في آنٍ واحد. ونحن في مركز
            الملك فيصل؛ نرجو أن يكون نشرنا لهذا الكتاب المهم إضافة نوعية للمكتبة
            العربية، ودعوة للتأمل في تاريخ العلوم التي أنتجتها الحضارة العربية
            والإسلامية في مختلف المجالات.
          </p>
        </v-sheet>
        <v-divider class="my-5"></v-divider>
        <!-- ABOUT AUTHER  -->
        <v-sheet class="about-auther my-5">
          <h2 class="text-secondary-500 my-3">{{ $t("about_auther") }}</h2>
          <p
            class="font-size-small text-N100 font-weight-meduim line-height line-2"
          >
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى
            نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
          </p>
        </v-sheet>
        <v-divider class="my-5"></v-divider>
        <!-- ABOUT INDEX  -->
        <v-sheet class="about-index my-5">
          <h2 class="text-secondary-500 my-3">{{ $t("index") }}</h2>
          <p
            class="font-size-small text-N100 font-weight-meduim line-height line-2"
          >
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى
            نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
          </p>
        </v-sheet>
        <v-divider class="my-5"></v-divider>
        <!-- ADD INFORMATION  -->
        <v-sheet class="add-info my-5">
          <h2 class="text-secondary-500 my-3">{{ $t("add_info") }}</h2>
          <p
            class="font-size-small text-N100 font-weight-meduim line-height line-2"
          >
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى
            نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
          </p>
        </v-sheet>
      </v-sheet>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.antiquites-details {
  .antiquite-description {
    h5 {
      margin: 15px 0;
      color: $N100;
      font-size: 14px;

      font-weight: 500;
    }
  }
  .add-to-card-buttons {
    .v-btn {
      min-width: 225px;
      margin: 5px 0;
      &.add-favorite {
        border: 1px solid $secondary-200;
        min-width: 156px !important;
      }
    }
  }
  &.md {
    .add-to-card-buttons {
      .v-btn {
        min-width: 150px !important;
      }
    }
  }
  &.xs {
    .v-btn {
      &.add-favorite {
        min-width: 225px !important;
      }
    }
  }
}
</style>