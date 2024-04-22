<script setup >
import AssetsManager from "~/core/AssetsManager";
</script>

<template>
  <div class="studies-journal">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <v-row>
            <v-col cols="12" sm="7">
              <h2 class="text-secondary-500 font-semibold">
                {{ $t("studies") }}
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
              :src="AssetsManager.studiesBook"
              width="100%"
              height="154px"
              cover
            ></v-img>
            <div class="studies-content mx-5 text-main-color">
              <div class="d-flex mb-3">
                <v-img
                  :src="AssetsManager.book"
                  max-width="20"
                  height="20"
                  class="mx-2"
                  contain
                ></v-img>
                <span>دراسات</span>
              </div>
              <h6 class="font-weight-bold">
                الأمراض الخبيثة وحلاوة الدعاء: ترسيم وتجاوز الحدود في العوالم
                السحرية لمسلمي تشنغهاي (الصين)
              </h6>
              <div>
                <v-img :src="AssetsManager.alt" width="20" height="20"></v-img>
                <span>المحرر:ألكسندر رى</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card></v-card>
  </div>
</template>

<style lang="scss" scoped>
</style>