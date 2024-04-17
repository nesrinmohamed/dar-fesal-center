<script setup>
import AssetsManager from "~/core/AssetsManager";

const giftsAndgreattDegre = ref({
  gifts: {
    title: "الجوائز",
    items: [
      {
        icon: AssetsManager.star,
        date: "عام 1438هـ/2017م",
        desc: "حصل سموه على درجة الدكتوراه الفخرية من جامعة جوميليُوف الأوراسية الوطنية في أستانا، جمهورية كازاخستان.",
      },

      {
        icon: AssetsManager.star,
        date: "عام 1438هـ/2017م",
        desc: "حصل سموه على درجة الدكتوراه الفخرية من جامعة جوميليُوف الأوراسية الوطنية في أستانا، جمهورية كازاخستان.",
      },

      {
        icon: AssetsManager.star,
        date: "عام 1438هـ/2017م",
        desc: "حصل سموه على درجة الدكتوراه الفخرية من جامعة جوميليُوف الأوراسية الوطنية في أستانا، جمهورية كازاخستان.",
      },

      {
        icon: AssetsManager.star,
        date: "عام 1438هـ/2017م",
        desc: "حصل سموه على درجة الدكتوراه الفخرية من جامعة جوميليُوف الأوراسية الوطنية في أستانا، جمهورية كازاخستان.",
      },
    ],
  },
  gratDegree: {
    title: "الدرجات الفخرية",
    items: [
      {
        icon: AssetsManager.diploma,
        date: "عام 1438هـ/2017م",
        desc: "حصل سموه على درجة الدكتوراه الفخرية من جامعة جوميليُوف الأوراسية الوطنية في أستانا، جمهورية كازاخستان.",
      },

      {
        icon: AssetsManager.diploma,
        date: "عام 1438هـ/2017م",
        desc: "حصل سموه على درجة الدكتوراه الفخرية من جامعة جوميليُوف الأوراسية الوطنية في أستانا، جمهورية كازاخستان.",
      },
      {
        icon: AssetsManager.diploma,
        date: "عام 1438هـ/2017م",
        desc: "حصل سموه على درجة الدكتوراه الفخرية من جامعة جوميليُوف الأوراسية الوطنية في أستانا، جمهورية كازاخستان.",
      },

      {
        icon: AssetsManager.diploma,
        date: "عام 1438هـ/2017م",
        desc: "حصل سموه على درجة الدكتوراه الفخرية من جامعة جوميليُوف الأوراسية الوطنية في أستانا، جمهورية كازاخستان.",
      },
    ],
  },
});
</script>

<template>
  <div class="center-manager mb-5">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("center-manager") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <!-- ==========ABOUT MANAGER =========== -->
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-sheet
            color="transparent"
            class="manager-img rounded-lg my-5"
            max-width="475px"
            max-height="440px"
          >
            <v-img
              :src="AssetsManager.user"
              width="100%"
              height="100%"
              contain
              class="rounded-lg"
            ></v-img>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="8">
          <h3 class="text-secondary-500 font-semibold">
            صاحب السمو الملكي الأمير تركي الفيصل بن عبد العزيز آل سعود
          </h3>

          <div
            class="text-body-2 font-light my-2 text-main-color line-height line-1"
          >
            <p>
              صاحب السمو الملكي الأمير تركي الفيصل مؤسس وعضو مجلس أمناء مؤسسة
              الملك فيصل، ورئيس مجلس إدارة مركز الملك فيصل للبحوث والدراسات
              الإسلامية.
            </p>
            <p>
              وُلد سموه في الثالث من ربيع الأول 1364هـ/الموافق الخامس عشر من
              فبراير 1945م، في مكة المكرمة بالمملكة العربية السعودية. وقد بدأ
              سموه دراسته في المدرسة النموذجية في الطائف، ثم أكمل دراسته
              الثانوية في مدرسة لورانسفيل في نيو جيرسي، الولايات المتحدة
              الأمريكية، وأتم دراسته في جامعة جورج تاون.
            </p>
            <p>
              عُيّن سموه مستشاراً في الديوان الملكي في عام 1393هـ/1973م. وفي عام
              1397هـ/1977م عُيّن رئيساً للاستخبارات العامة، وهي الجهاز الرئيس
              الذي يُعنى بالاستخبارات الخارجية في المملكة العربية السعودية،
              بمرتبة وزير، وقد شغل سموه هذا المنصب حتى 1422هـ/2001م.
            </p>
            <p>
              وفي 1423هـ/2002م، عُيّن سموه سفيراً للمملكة العربية السعودية لدى
              المملكة المتحدة وجمهورية أيرلندا، وشغل هذا المنصب حتى
              1426هـ/2005م، عندما عُيّن سفيراً لدى الولايات المتحدة الأمريكية،
              وتقاعد سموه في 1428هـ/2007م.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <!-- ==========GIFTS AND GREAT DEGREE =============== -->

      <div v-for="(giftItem, i) in giftsAndgreattDegre" :key="i">
        <h3 class="text-secondary-500">{{ giftItem.title }}</h3>
        <v-list>
          <v-list-item
            v-for="(item, index) in giftItem.items"
            :key="index"
            class="d-flex align-center"
          >
            <template v-slot:prepend>
              <v-img
                :src="item.icon"
                width="20"
                height="20"
                class="mt-n5 ml-3"
              ></v-img>
            </template>

            <v-list-item-desc
              class="text-primary-100 mb-2 text-subtitle-2 font-medium"
              >{{ item.date }}</v-list-item-desc
            >
            <v-list-item-title
              class="text-subtitle-2 text-main-color font-medium"
              >{{ item.desc }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </div>

      <!-- ===== THE NEWS =========== -->
      <v-row>
        <v-col cols="12" md="6" v-for="i in 6" :key="i">
          <BaseCard2></BaseCard2>
        </v-col>
      </v-row>

      <BaseButton class="dark-btn my-5">
        <span> عرض المزيد </span>
        <v-icon>mdi mdi-chevron-left</v-icon>
      </BaseButton>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.center-manager {
  .manager-img {
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: -10px;
      right: -10px;
      border: 1px solid $primary-75;
      border-radius: 20px;
    }
  }
}
</style>