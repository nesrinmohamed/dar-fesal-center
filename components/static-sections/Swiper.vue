<script setup >
import AssetsManager from "~/core/AssetsManager";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const props = defineProps(["items"]);

import {
  EffectFade,
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
} from "swiper/modules";
// ==========[STATUS]==========

// ======ACTIONS========

// ====== LYFCYCLE =========
</script>

<template>
  <swiper
    :pagination="{ clickable: true }"
    :modules="[Pagination]"
    class="mySwiper"
    :slides-per-view="3"
    :spaceBetween="10"
  >
    <swiper-slide v-for="i in items" :key="i">
      <v-card
        max-height="370px"
        class="rounded-lg text-secondary-500 my-15 py-1 px-1"
        validation="0"
        variant="outlined"
      >
        <v-img :src="i.image" width="100%" max-height="250px" cover></v-img>
        <div class="px-3 py-5 text-subtitle-2 text-main-color">
          <div class="d-flex align-center">
            <v-icon size="15" class="text-primary-50"
              >mdi mdi-calendar-range-outline</v-icon
            >
            <span class="font-size-small mx-1"
              >٩ ربيع الثاني ١٤٤٤هـ الموافق ٣ نوفمبر ٢٠٢٢م.</span
            >
          </div>
          <p class="font-weight-bold text-body-2 my-2">
            جدّدت إدارة المتحف متحفها
            <span class="text-decoration-underline"
              >بمطبوعتين نادرتين من مقتنيات المركز</span
            >
          </p>
        </div>
      </v-card>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
</style>