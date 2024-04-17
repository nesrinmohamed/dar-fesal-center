<script setup >
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <v-sheet width="100%" height="100%" color="transparent" class="login">
    <v-row dir="rtl">
      <v-col md="4" v-if="!$vuetify.display.smAndDown">
        <BaseSidebar></BaseSidebar>
      </v-col>
      <v-col cols="12" md="8">
        <StaticSectionsLogin></StaticSectionsLogin>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style lang="scss" scoped>
</style>