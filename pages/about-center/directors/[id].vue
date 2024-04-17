<script setup >
import AssetsManager from "~/core/AssetsManager";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="director-details py-15">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            width="274px"
            height="261px"
            elevation="0"
            variant="outlined"
            color="secondary-20"
            class="rounded-lg flex-center"
          >
            <v-img
              :src="AssetsManager.frame"
              width="90%"
              height="90%"
              contain
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="7" lg="6">
          <div>
            <h4 class="director-name my-2 text-primary-100">
              صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل
            </h4>
            <h6 class="job-name text-primary-65 text-subtitle-2 my-5">
              الأمين العام
            </h6>
            <p class="director-desc text-subtitle-2 text-main-color mt-10">
              صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل، الأمين العام لمركز
              الملك فيصل للبحوث والدراسات الإسلامية منذ أغسطس ٢٠٢٢م، وقد التحقت
              سموها بالمركز في عام ٢٠١١م. شغلت سابقًا منصب مستشارة سمو رئيس مجلس
              الإدارة في المدة من (٢٠١٦– ٢٠٢٢م) ونائب الأمين العام والمشرفة
              العامة على إدارة البحوث في المدة من (٢٠١٣ – ٢٠١٦م) ومديرة دارة آل
              فيصل ومساعدة الأمين العام للشؤون العلمية في المدة من (٢٠١١ –
              ٢٠١٣م). حاصلة على درجة البكالوريوس في علم الاجتماع من جامعة الملك
              عبد العزيز. لسموها نشاط ثقافي حافل، وقد نشرت عددًا من الأعمال
              الإبداعية في مجال الرواية والكتابة للأطفال.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>