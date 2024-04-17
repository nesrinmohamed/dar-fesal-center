<script setup >
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
import { useRouter } from "vue-router";
const router = useRouter();
const search = ref("");
const bookCards = ref([
  {
    id: 1,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 2,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 3,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 4,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 5,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 6,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 7,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 8,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 9,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
]);
</script>

<template>
  <div class="my-library py-10 body-bg">
    <v-sheet
      class="home-header d-flex align-center justify-space-between px-10 my-5"
      height="90px"
    >
      <h4 class="text-secondary-500 font-semibold">
        {{ $t("my_library") }}
      </h4>
      <BaseButton
        @click="router.push(localePath(RoutesManager.back))"
        class="transparent back-btn"
      >
        <span class="text-secondary-500 mx-2">{{ $t("back") }}</span>
        <v-img :src="AssetsManager.undoIcon" width="20" height="20" contain>
        </v-img>
      </BaseButton>
    </v-sheet>
    <v-sheet color="transparent">
      <v-row>
        <v-col cols="12" sm="4" md="3" v-for="(item, i) in bookCards" :key="i">
          <BaseCard :item="item"></BaseCard
        ></v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<style lang="scss" scoped>
</style>