<script setup >
import AssetsManager from "~/core/AssetsManager";
const unitImages = ref([
  AssetsManager.unitImage1,
  AssetsManager.unitImage2,
  AssetsManager.unitImage3,
]);
</script>

<template>
  <div class="saudi-memory-unit" :class="$vuetify.display.name">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("saudi_memory_unit") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <v-img
        :src="AssetsManager.saudiMemoryUnit"
        max-width="1158px"
        max-height="493px"
      ></v-img>

      <v-row>
        <v-col cols="12" sm="10" md="8">
          <!-- ==========WHO US ========== -->

          <div class="who-us">
            <h2 class="text-secondary-500 font-semibold my-5">
              {{ $t("who_us") }}
            </h2>

            <v-sheet
              class="learnings-description  my-5 line-height line-2 font-medium text-N100"
              max-width="900px"
            >
              صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل، الأمين العام لمركز
              الملك فيصل للبحوث والدراسات الإسلامية منذ أغسطس ٢٠٢٢م، وقد التحقت
              سموها بالمركز في عام ٢٠١١م. شغلت سابقًا منصب مستشارة سمو رئيس مجلس
              الإدارة في المدة من (٢٠١٦– ٢٠٢٢م) ونائب الأمين العام والمشرفة
              العامة على إدارة البحوث في المدة من (٢٠١٣ – ٢٠١٦م) ومديرة دارة آل
              فيصل ومساعدة الأمين العام للشؤون العلمية في المدة من (٢٠١١ –
              ٢٠١٣م). حاصلة على درجة البكالوريوس في علم الاجتماع من جامعة الملك
              عبد العزيز. لسموها نشاط ثقافي حافل، وقد نشرت عددًا من الأعمال
              الإبداعية في مجال الرواية والكتابة للأطفال.
            </v-sheet>

            <v-divider class="my-4"></v-divider>
          </div>

          <!-- ========== UNIT GOALS ========== -->
          <div class="unit-goals">
            <h2 class="text-secondary-500 font-semibold my-5">
              {{ $t("unit_goals") }}
            </h2>
            <div
              class="learnings-description  my-5 line-height line-2 font-medium text-N100"
            >
              <h5>
                التعريف بالموروث التاريخي والاجتماعي والثقافي لسكان شبه الجزيرة
                العربية.
              </h5>
              <ul>
                <li>
                  ‎٠‏ توثيق التاريخ الاجتماعي والثقافي والفني والأدبي في المملكة
                  العربية السعودية.
                </li>
                <li>
                  ‎٠‏ توثيق التاريخ الاجتماعي والثقافي والفني والأدبي في المملكة
                  العربية السعودية.
                </li>
                <li>
                  ‎٠‏ توثيق التاريخ الاجتماعي والثقافي والفني والأدبي في المملكة
                  العربية السعودية.
                </li>
                <li>
                  ‎٠‏ توثيق التاريخ الاجتماعي والثقافي والفني والأدبي في المملكة
                  العربية السعودية.
                </li>
                <li>
                  ‎٠‏ توثيق التاريخ الاجتماعي والثقافي والفني والأدبي في المملكة
                  العربية السعودية.
                </li>
              </ul>
              <v-divider class="my-4"></v-divider>
            </div>
          </div>

          <!-- ==========FIND UNIT RESOURCES =========== -->
          <div class="unit-goals">
            <h2 class="text-secondary-500 font-semibold my-5">
              {{ $t("find_resources") }}
            </h2>
            <h5
              class="learnings-description my-5 line-height line-2 font-medium text-N100"
            >
              توفر الوحدة قاعدة بيانات تشمل الكتب والمواد السمعية والبصرية.
              يمكنكم العثور على المصادر للوحدة من خلال قواعد البيانات
              الببليوجرافية أو خدمات للباحثين بمكتبة مركز الملك فيصل. وبإمكانكم
              زيارة المكتبة أيضًا للاطلاع على الكتب والمواد السمعية والبصرية، من
              يوم الأحد وحتى الخميس من الساعة ٩ صباحًا وحتى الساعة ٣ مساءً.
              يشترط على الباحث الزائر خطاب موجه إلى مركز الملك فيصل للبحوث
              والدراسات الإسلامية من الجهة الرسمية التي ينتمي لها الباحث. كما
              يتطلب السماح بالاستماع للمواد الصوتية حجز موعد مسبق.
            </h5>
          </div>
        </v-col>
      </v-row>
      <!-- ============IMAGES=========== -->
      <v-sheet class="footer-images">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(img, i) in unitImages"
            :key="i"
          >
            <v-img :src="img" width="100%" max-height="160px"></v-img>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.saudi-memory-unit {
  &.xl,
  &.xs {
    .footer-images {
      width: 80%;
      margin: auto;
    }
  }
}
</style>