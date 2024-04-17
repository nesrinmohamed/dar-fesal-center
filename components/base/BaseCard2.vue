<script setup >
import AssetsManager from "~/core/AssetsManager";
</script>

<template>
  <v-card
    class="base-card-2 rounded-lg"
    elevation="0"
    variant="outlined"
    color="N50"
  >
    <v-row>
      <v-col cols="4">
        <v-shee width="229px">
          <v-img
            :src="AssetsManager.user2"
            width="100%"
            height="100%"
            class="rounde-lg"
          ></v-img>
        </v-shee>
      </v-col>
      <v-col cols="8">
        <h5 class="text-N200">
          ألقى صاحب السمو الملكي الأمير تركي الفيصل كلمة بعنوان "الحقيقة
          والعواقب" في معهد بيكر للسياسات العامة
        </h5>
        <div class="date d-flex align-center text-subtitle-2 text-main-color">
          <v-icon size="15">mdi mdi-calendar-range-outline</v-icon>
          <span>21 نوفمبر 2023</span>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style lang="scss" scoped>
</style>