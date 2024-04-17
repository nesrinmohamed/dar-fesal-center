<script setup >
const isLoaded = ref(false);
onMounted(() => {
  setTimeout(() => (isLoaded.value = false), 2000);
});
// watch(locale, (newValue, oldValue) => {
//   current.value = newValue;
// });
</script>

<template>
  <v-layout>
    <v-main
      class="page-top-padding body-bg"
      :class="{ mobile: $vuetify.display.mobile }"
    >
      <Suspense>
        <slot />

        <template #fallback>
          <v-container class="my-10 mx-auto">
            <v-sheet
              color="transparent"
              width="100%"
              height="500px"
              class="d-flex align-center justify-center"
            >
              <v-progress-circular
                color="#5fb8d2"
                indeterminate
                :size="68"
                :width="5"
              ></v-progress-circular>
            </v-sheet>
          </v-container>
        </template>
      </Suspense>
    </v-main>
  </v-layout>
</template>

<style lang="scss" scoped>
</style>