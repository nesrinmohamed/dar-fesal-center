<script setup >
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";

const items = ref([
  {
    image: AssetsManager.targeting,
    title: "الرؤية",
    desc: "أن نكون نبعًا إنسانيًّا للمعرفة العلمية والفكرية والثقافية.",
  },
  {
    image: AssetsManager.chat,
    title: "الرسالة",
    desc: "إثراء المشهدين العلمي والثقافي محليًّا وعالميًّا ببحوث أصيلة وموارد مميزة وخبرات فريدة.",
  },
  {
    image: AssetsManager.value,
    title: "القيم",
    desc: "نشر المعرفة – تمكين البحث العلمي – حفظ التراث الإنساني",
  },
]);

const centerLevels = ref([
  { title: "البحوث", path: RoutesManager.home },
  { title: "دا النشر", path: RoutesManager.home },
  { title: "المكتبة", path: RoutesManager.home },
  { title: "دار آل فيصل", path: RoutesManager.home },
  { title: "المتحف", path: RoutesManager.home },
]);
</script>

<template>
  <div class="who-us-page" :class="$vuetify.display.name">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("who_us") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>
    <!-- ==============WHO US============== -->
    <v-sheet>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="text-secondary-500 font-semibold">المركز فى سطور</h3>
            <h5 class="my-3 text-N200 font-bold">
              "نحن نريد أن تكون هذه المملكة، الآن وبعد خمسين سنة من الآن، إن شاء
              الله، مصدر إشعاع للإنسانية والسلام"
            </h5>
            <span class="text-primary-200 text-body-2"
              >الملك فيصل بن عبدالعزيز آل سعود (1395هـ/1975م)</span
            >
            <div
              class="text-subtitle-2 font-bold my-2 text-main-color line-height line-1"
            >
              <p>
                في عام 1403هـ/1983م، بعد ثماني سنوات من استشهاد الملك فيصل –رحمه
                الله– أسست مؤسسة الملك فيصل الخيرية مركز الملك فيصل للبحوث
                والدراسات الإسلامية، بهدف مواصلة الرسالة السامية للملك الراحل
                لنقل المعرفة بين المملكة العربية السعودية وبقية العالم. منذ ذلك
                الحين، أصبح المركز منارةً للبحث والعلم والثقافة.
              </p>
              <p class="my-5">
                يتمثل الدور الرئيس للمركز في توفير منصة معرفية تجمع الباحثين
                والمؤسسات البحثية محليًّا وإقليميًّا وعالميًّا لإنتاج بحوث أصيلة
                في العلوم الإنسانية والاجتماعية، والمشاركة في المناقشات العلمية
                والحوار بين الثقافات المختلفة. وعلاوة على ذلك، لا تقتصر مهامه
                على البحوث فحسب، بل يؤدي المركز أدوارًا متنوعة بدءًا من النشر
                والمكتبة إلى الأرشيف والمتحف.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-sheet
              color="transparent"
              class="who-us-img rounded-lg my-5"
              max-width="475px"
              max-height="440px"
            >
              <v-img
                :src="AssetsManager.sidebarImage"
                width="100%"
                height="100%"
                contain
                class="rounded-lg"
              ></v-img>
            </v-sheet>
          </v-col>
        </v-row>
        <p
          class="text-subtitle-2 font-bold my-2 text-main-color line-height line-1"
        >
          دار الفيصل الثقافية، وهي ذراع النشر للمركز، تصدر الكتب والدوريات في
          الموضوعات التي تهم المملكة والمجتمعات العربية والإسلامية والعالمية.
          وتقدم مكتبة مركز الملك فيصل خدمات متنوعة لمساعدة الباحثين. وتحفظ دارة
          آل فيصل تراث الملك فيصل وعائلته وترفع الوعي به. ويسهم متحف الفيصل في
          حفظ وعرض مقتنيات قيمة من الفنون العربية الإسلامية والمخطوطات النادرة،
          وذكريات الملك فيصل الراحل.
        </p>
      </v-container>
    </v-sheet>
    <!-- ==============WHO US CARDS============ -->
    <v-sheet
      color="transparent"
      min-height="475px"
      class="who-us-cards flex-center"
    >
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="(item, i) in items" :key="i">
            <v-card
              class="card flex-center flex-column text-white text-center px-3"
              height="250px"
              color="transparent"
            >
              <v-sheet width="80px" height="80px" class="img-card flex-center">
                <v-img
                  :src="item.image"
                  width="60%"
                  height="60%"
                  contain
                ></v-img>
              </v-sheet>
              <h3>{{ item.title }}</h3>
              <span class="text-subtitle-1 my-3 font-medium">{{
                item.desc
              }}</span>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- ==========أدوار المركز الرءيسية ============= -->
    <v-sheet
      class="py-10 text-secondary-500 text-center px-15"
      min-height="256px"
    >
      <h3 class="my-5">أدوار المركز الرئيسية</h3>
      <v-sheet class="levels-card">
        <v-container
          class="levels-container d-flex align-center justify-space-between flex-wrap"
        >
          <v-card
            width="150px"
            height="145px"
            color="#E9EEEF"
            base-color="#A3B7BE"
            class="rounded-lg text-secondary-500 flex-center mx-2 my-2 text-h6"
            v-for="(level, i) in centerLevels"
            :key="i"
          >
            <NuxtLink :to="level.path"> {{ level.title }}</NuxtLink>
          </v-card>
        </v-container>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<style lang="scss" scoped>
.who-us-page {
  .who-us-img {
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: -10px;
      left: -10px;
      border: 1px solid $primary-75;
      border-radius: 20px;
    }
  }
  .who-us-cards {
    width: 100%;
    height: 100%;
    background: url("~/assets/img/who-us-cards-bg.png") no-repeat center center;
    background-size: cover;
    .card {
      position: relative;
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 30%;
        background: #e6f3f0;
      }
      .img-card {
        border-radius: 50%;
        margin-bottom: 8px;
      }
    }
  }

  .levels-card {
    .levels-container {
      width: 90% !important;
      margin: auto auto -6px -20px;
    }
  }
  &.sm {
    .levels-card {
      .levels-container {
        width: 100% !important;
        margin: auto auto -6px -80px;

        .v-card {
          width: 180px !important;
        }
      }
    }
  }
  &.xs {
    .levels-card {
      .levels-container {
        width: 100% !important;
        margin: auto auto -6px -39px;
        .v-card {
          width: 250px !important;
        }
      }
    }
  }
}
</style>