<script setup>
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="edit-personal-info-page">
    <v-sheet
      class="home-header d-flex align-center justify-center px-10 my-5 relative"
      height="90px"
    >
      <div class="d-flex align-center justify-center flex-column">
        <v-icon size="40" color="secondary-50">mdi mdi-account-circle</v-icon>
        <h4 class="text-N200 text-subtitle-1">User Name</h4>
      </div>
      <BaseButton
        @click="router.push(localePath(RoutesManager.back))"
        class="transparent back-btn"
      >
        <span class="text-secondary-500 mx-2">{{ $t("back") }}</span>
        <v-img :src="AssetsManager.undoIcon" width="20" height="20" contain>
        </v-img>
      </BaseButton>
    </v-sheet>
    <StaticSectionsEditPersonaInfo></StaticSectionsEditPersonaInfo>
  </div>
</template>

<style lang="scss" scoped>
.edit-personal-info-page {
  .back-btn {
    position: absolute;
    left: 20px;
    top: 30px;
  }
}
</style>