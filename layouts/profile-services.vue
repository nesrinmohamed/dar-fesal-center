<script setup>
/*##########[ IMPORTS ]##########*/
// import { useSharedStore } from "~/stores/sharedStore";
import RoutesManager from "~/core/RoutesManager";
import { useLocale } from "vuetify";
import { useDisplay } from "vuetify/lib/framework.mjs";
/*##########[ STATE ]##########*/
const display = useDisplay();
const { current } = useLocale();
const { locale, locales } = useI18n();
const navDrawer = ref(false);
const notificationsDrawer = ref(false);
const isLoaded = ref(false);

// const nuxtApp = useNuxtApp();
const loading = ref(false);

onMounted(() => {
  // navDrawer.value = !sharedStore.isMobile;
  isLoaded.value = true;
  current.value = locale.value;
  setTimeout(() => (isLoaded.value = false), 2000);
});
watch(locale, (newValue, oldValue) => {
  current.value = newValue;
});
</script>



<template>
  <!--##########[ MIAN PAGE ]##########-->
  <v-layout>
    <v-main class="body-bg">
      <Suspense>
        <slot />

        <!-- loading state via #fallback slot -->
        <template #fallback>
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
        </template>
      </Suspense>
    </v-main>
  </v-layout>
</template>



<style lang="scss">
.my-input {
  border-radius: 100px;

  &.v-input {
    .v-input__slot {
    }
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>