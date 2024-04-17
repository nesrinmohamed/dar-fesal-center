<script setup>
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <v-sheet
    class="home-header d-flex align-center justify-space-between px-10 my-10"
    height="90px"
  >
    <div class="d-flex align-center">
      <v-icon size="40" color="secondary-50">mdi mdi-account-circle</v-icon>
      <h4 class="text-N200 text-subtitle-1">User Name</h4>
    </div>
    <BaseButton
      class="outlined-2"
      @click="router.push(localePath(RoutesManager.personalInfo))"
    >
      <v-icon>mdi mdi-account</v-icon>
      <span>{{ $t("personInfo") }}</span>
    </BaseButton>
  </v-sheet>
</template>

<style lang="scss" scoped>
</style>