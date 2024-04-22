<script setup >
import AssetsManager from "~/core/AssetsManager";
</script>

<template>
  <div class="king-fesal-family">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("king_fesal_and_family") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <v-img
        :src="AssetsManager.kingFesalAndFamily"
        width="100%"
        max-height="1333px"
      ></v-img>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>