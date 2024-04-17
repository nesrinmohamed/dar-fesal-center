<script setup >
// ########IMPORTS##########
import { ref } from "vue";
import { useLocale } from "vuetify";

/*##########[ STATE ]##########*/

const sharedStore = useSharedStore();
const authStore = useAuthStore();

// ##########STATE############
const isLoaded = ref(false);
const navDrawer = ref(false);
const { locale, locales } = useI18n();

const { current } = useLocale();
onMounted(() => {
  if (!authStore.isLoggedIn) {
    // authStore.fetchMeData();
    // sharedStore.getNotifications()
  }
  navDrawer.value = !sharedStore.isMobile;
  isLoaded.value = true;

  current.value = locale.value;
});
setTimeout(() => (isLoaded.value = false), 2000);
</script>

<template>
  <v-sheet
    v-if="isLoaded"
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
  <v-app v-if="!isLoaded">
    <!-- <NuxtLoadingIndicator color="red" /> -->

    <LayoutAppDrawer v-model="navDrawer"></LayoutAppDrawer>
    <LayoutAppNavbar v-model="navDrawer"></LayoutAppNavbar>

    <LayoutAppNavbarLinks v-if="!$vuetify.display.smAndDown">
    </LayoutAppNavbarLinks>
    <v-layout>
      <v-main >
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
    <LayoutAppFooter></LayoutAppFooter>
  </v-app>
</template>

<style lang="scss" scoped>
.v-layout {
  --v-scrollbar-offset: 0px;
  display: contents;
  flex: 0 0 auto;
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