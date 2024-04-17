<script setup >
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <v-sheet color="transparent" class="sign-up" width="100%" height="100%">
    <v-row dir="rtl">
      <v-col md="4" v-if="!$vuetify.display.smAndDown">
        <BaseSidebar></BaseSidebar>
      </v-col>
      <v-col cols="12" md="8">
        <StaticSectionsSignup></StaticSectionsSignup>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style lang="scss" scoped>
</style>