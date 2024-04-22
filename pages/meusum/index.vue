<script setup >
import AssetsManager from "~/core/AssetsManager";

const swiperItems = ref([
  {
    image: AssetsManager.swiperImage1,
    icon: "mdi mdi-calendar-range-outline",
    date: "٩ ربيع الثاني ١٤٤٤هـ الموافق ٣ نوفمبر ٢٠٢٢م.",
    desc: "جدّدت إدارة المتحف متحفها بمطبوعتين نادرتين من مقتنيات المركز",
  },
  {
    image: AssetsManager.swiperImage2,
    icon: "mdi mdi-calendar-range-outline",
    date: "٩ ربيع الثاني ١٤٤٤هـ الموافق ٣ نوفمبر ٢٠٢٢م.",
    desc: "جدّدت إدارة المتحف متحفها بمطبوعتين نادرتين من مقتنيات المركز",
  },
  {
    image: AssetsManager.swiperImage1,
    icon: "mdi mdi-calendar-range-outline",
    date: "٩ ربيع الثاني ١٤٤٤هـ الموافق ٣ نوفمبر ٢٠٢٢م.",
    desc: "جدّدت إدارة المتحف متحفها بمطبوعتين نادرتين من مقتنيات المركز",
  },
  {
    image: AssetsManager.swiperImage2,
    icon: "mdi mdi-calendar-range-outline",
    date: "٩ ربيع الثاني ١٤٤٤هـ الموافق ٣ نوفمبر ٢٠٢٢م.",
    desc: "جدّدت إدارة المتحف متحفها بمطبوعتين نادرتين من مقتنيات المركز",
  },
  {
    image: AssetsManager.swiperImage1,
    icon: "mdi mdi-calendar-range-outline",
    date: "٩ ربيع الثاني ١٤٤٤هـ الموافق ٣ نوفمبر ٢٠٢٢م.",
    desc: "جدّدت إدارة المتحف متحفها بمطبوعتين نادرتين من مقتنيات المركز",
  },
]);
</script>


<template>
  <div class="mesum">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("fesal_meusm") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card
            width="100%"
            height="90px"
            class="d-flex align-center rounded-lg px-5"
            variant="outlined"
            color="secondary-500"
          >
            <v-img
              :src="AssetsManager.clockIcon"
              max-width="20"
              height="20"
            ></v-img>
            <span class="text-main-color mx-2 font-regular"
              >مواعيد الزيارة: ٩ صباحًا – ٩ مساءً (مغلق يوم الجمعة)، الدخول
              مجانًا</span
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card
            width="100%"
            height="90px"
            class="d-flex align-center rounded-lg px-5"
            variant="outlined"
            color="secondary-500"
          >
            <v-img
              :src="AssetsManager.locationIIcon"
              max-width="20"
              height="20"
            ></v-img>
            <span class="text-main-color mx-2 font-regular"
              >بجوار مؤسسة الملك فيصل الخيرية وبرج الفيصلية.</span
            >
            <NuxtLink
              to="/"
              class="text-primary-blue text-decoration-underline"
              >{{ $t("show_address") }}</NuxtLink
            >
          </v-card>
        </v-col>
      </v-row>

      <v-sheet class="meusum-description" max-width="769px">
        <v-img
          class="rounded-lg"
          :src="AssetsManager.sidebarImage"
          width="100%"
          max-height="373px"
          cover
        >
        </v-img>
        <h4 class="mesum-title text-secondary-500 font-semibold my-5 text-h6">
          نرحّب بزيارتكم للمتحف، ونأمل منكم قراءة إرشادات الزوّار أدناه قبل
          الزيارة:
        </h4>
        <ul class="text-N100 font-regular">
          <li>الدخول مجاني لجميع الزوّار.</li>
          <li>
            زيارة الأفراد لا تتطلب حجز مسبق، ونحثّكم على تسجيل حضوركم من خلال
            مسح رمز الاستجابة السريعة (QR code) عند بوابة الدخول.
          </li>
          <li>
            زيارة الأفراد لا تتطلب حجز مسبق، ونحثّكم على تسجيل حضوركم من خلال
            مسح رمز الاستجابة السريعة (QR code) عند بوابة الدخول.
          </li>
          <li>
            زيارة الأفراد لا تتطلب حجز مسبق، ونحثّكم على تسجيل حضوركم من خلال
            مسح رمز الاستجابة السريعة (QR code) عند بوابة الدخول.
          </li>
          <li>
            زيارة الأفراد لا تتطلب حجز مسبق، ونحثّكم على تسجيل حضوركم من خلال
            مسح رمز الاستجابة السريعة (QR code) عند بوابة الدخول.
          </li>
        </ul>
      </v-sheet>
      <v-divider class="my-5"></v-divider>

      <div class="news">
        <h2 class="text-secondary-500 font-semibold">
          {{ $t("news") }}
        </h2>

        <v-row>
          <v-col cols="12" lg="10" class="mx-auto">
            <StaticSectionsSwiper :items="swiperItems"></StaticSectionsSwiper>
          </v-col>
        </v-row>
      </div>
      <v-divider class="my-5"></v-divider>

      <v-row>
        <v-col cols="12" sm="10" md="8">
          <!-- ========== CURRENT EVENT ============== -->
          <div class="current-event">
            <h2 class="text-secondary-500 font-semibold mb-5">
              {{ $t("current_event") }}
            </h2>

            <v-img
              :src="AssetsManager.cuurentEvent"
              max-width="769px"
              max-height="373px"
            ></v-img>
            <v-divider class="my-5"></v-divider>
          </div>

          <!-- ####VIRTUAL EVENT########  -->
          <div class="virtual-event">
            <h2 class="text-secondary-500 font-semibold mb-5">
              {{ $t("virtual_event") }}
            </h2>
            <v-img
              :src="AssetsManager.virtualEvent"
              max-width="769px"
              max-height="373px"
            ></v-img>
            <div class="d-flex align-center py-5">
              <v-icon size="15" class="text-secondary-500"
                >mdi mdi-calendar-range-outline</v-icon
              >
              <span class="font-size-small mx-1 text-N100"
                >٩ ربيع الثاني ١٤٤٤هـ الموافق ٣ نوفمبر ٢٠٢٢م.</span
              >
            </div>
            <p class="text-secondary-500">
              "وهج: زينة الصفحة المخطوطة" – يُعرض فيه ٦٠ نموذجًا من مختلف أنواع
              المخطوطات المزخرفة.
            </p>
            <v-divider class="my-5"></v-divider>
          </div>
          <!-- #########ALWAYS EVENT ##########  -->
          <div class="always-event">
            <h2 class="text-secondary-500 font-semibold mb-5">
              {{ $t("always_event") }}
            </h2>
            <v-img
              :src="AssetsManager.virtualEvent"
              max-width="769px"
              max-height="373px"
            ></v-img>

            <p class="text-secondary-500 py-5">
              يعرض هذا المعرض الرئيس مجموعة الفن العربي الإسلامي التي يحفظها
              مركز الملك فيصل تحت عنوان "سردية الحضارة العربية الإسلامية".
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>