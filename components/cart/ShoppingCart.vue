<script setup >
import AssetsManager from "~/core/AssetsManager";
</script>

<template>
  <v-sheet
    class="d-flex align-start relative mb-15 card-item"
    v-for="i in 4"
    :key="i"
    :class="$vuetify.display.name"
  >
    <v-row>
      <v-col cols="12" sm="4">
        <v-card max-width="300px" height="100%" class="px-2 py-2">
          <v-img
            :src="AssetsManager.cardImage"
            width="100%"
            height="100%"
            contain
          ></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <div class="mx-5 mt-2">
          <h2 class="card-title text-h6 text-N100">
            العلوم الاسلامية وقيام النهضة الاوروبية
          </h2>
          <!-- <h5 class="text-primary-100 my-1 font-medium text-subtitle-2">
        المؤلف: د. جورج صليبا
      </h5> -->
          <h5 class="text-primary-dark font-medium mb-12">السعر: ٨٥ ريال</h5>
          <v-btn
            color="#E5342F"
            rounded="lg"
            variant="outlined"
            class="d-flex align-center"
          >
            <v-icon color="#E5342F" size="15">mdi mdi-trash-can-outline</v-icon>
            <span class="text-subtitle-2 mx-2"> {{ $t("delete") }}</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-divider class="line-bottom my-2"></v-divider>
  </v-sheet>
</template>

<style lang="scss" scoped>
.card-item {
  &.xs {
    .card-title {
      font-size: 12px !important;
    }
  }
  .line-bottom {
    width: 100%;
    position: absolute;
    bottom: -35px;
  }
}
</style>