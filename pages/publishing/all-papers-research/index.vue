<script setup >
import AssetsManager from "~/core/AssetsManager";
const page = ref(1);
const serach = ref("");
// onMounted(() => {
//   this.$vuetify.lang.defaultLocale = "ar";
//   this.$vuetify.lang.current = "ar";
// });
</script>

<template>
  <div class="paths">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <v-row>
            <v-col cols="12" sm="7">
              <h2 class="text-secondary-500 font-semibold">
                {{ $t("all_paper_researh") }}
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

    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="i in 6" :key="i">
          <v-card height="353px" class="mx-auto">
            <v-img
              :src="AssetsManager.readingsBook"
              width="100%"
              height="154px"
              cover
            ></v-img>
            <div class="reading-content mx-5 text-main-color">
              <div class="d-flex flex-0 align-center mb-3">
                <v-img
                  :src="AssetsManager.book"
                  max-width="20"
                  height="20"
                  class="mx-2"
                ></v-img>
                <span>جميع الاوراق البحثية</span>
              </div>
              <h5 class="font-weight-bold text-main-color">
                الأمراض الخبيثة وحلاوة الدعاء: ترسيم وتجاوز الحدود في العوالم
                السحرية لمسلمي تشنغهاي (الصين)
              </h5>
              <div class="d-flex align-center mt-15">
                <v-img
                  :src="AssetsManager.edit"
                  max-width="15"
                  height="15"
                  class="mx-2"
                ></v-img>
                <span>المحرر:ألكسندر رى</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center d-block w-100 my-10" dir="rtl">
        <v-pagination v-model="page" :length="4"></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>