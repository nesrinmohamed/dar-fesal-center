<script setup >
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
// import {useLocalePath} from 'nuxt-i18n';
const localePath = useLocalePath();
</script>

<template>
  <v-sheet color="transparent" class="back-to-home mt-5">
    <NuxtLink :to="localePath(RoutesManager.home)" class="d-flex align-center">
      <span class="text-primary-200 ml-2 text-subtitle-1 w-100">{{
        $t("backHome")
      }}</span>
      <v-img :src="AssetsManager.undoIcon" width="20" height="20" contain>
      </v-img>
    </NuxtLink>
  </v-sheet>
</template>

<style lang="scss" scoped>
</style>