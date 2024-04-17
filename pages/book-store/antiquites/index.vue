<script setup >
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
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
  <div class="antiquites body-bg" :class="$vuetify.display.name">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <v-row>
            <v-col cols="12" sm="7">
              <h2 class="text-secondary-500 font-semibold">
                {{ $t("intiques") }}
              </h2>
            </v-col>
            <v-col cols="12" sm="5">
              <v-text-field
                class="search-input"
                :label="$t('search')"
                variant="outlined"
                elevation="0"
                rounded="lg"
                bg-color="#ffff"
                v-model="search"
                prepend-inner-icon="mdi-magnify"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </BaseHeader>
    <div class="antiques-cards">
      <v-row>
        <v-col cols="12" sm="4" md="3" v-for="(item, i) in bookCards" :key="i">
          <BaseCard :item="item"></BaseCard
        ></v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>