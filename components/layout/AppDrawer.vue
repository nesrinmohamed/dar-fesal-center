<script setup>
/*##########[ IMPORTS ]##########*/
import RoutesManager from "~/core/RoutesManager";
import { useRouter } from "vue-router";
const router = useRouter();
const items = ref([
  { title: "item1" },
  { title: "item2" },
  { title: "item3" },
  { title: "item4" },
]);
const whoUsItems = ref([
  { title: "about_center", path: RoutesManager.whoUs },
  { title: "center_history", path: RoutesManager.centerHistory },
  { title: "center-manager", path: RoutesManager.centerManager },
  { title: "directors", path: RoutesManager.directors },
]);

const matgerItems = ref([
  { title: "book_store", path: RoutesManager.bookStore },
  { title: "antiquities", path: RoutesManager.antiquites },
]);

/*##########[ DEFINES ]##########*/
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
// const { notify } = useNotification();
// const display = useDisplay();
const sharedStore = useSharedStore();

/*##########[ COMPUTED ]##########*/
const navDrawer = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

/*##########[ STATE ]##########*/

/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <v-navigation-drawer
    :class="$vuetify.display.name"
    v-if="$vuetify.display.mobile"
    width="380"
    class="app-nav-drawer"
    order="0"
    v-model="navDrawer"
    location="right"
    color="primary-dark"
  >
    <v-sheet
      class="app-navbar-2 text-white d-flex flex-column align-center justify-center"
      color="primary-dark"
    >
      <!-- ========== ABOUT CENTER======== -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            flat
            elevation="0"
            color="transparent"
            v-bind="props"
            class="btn align-center"
          >
            {{ $t("about_center") }}
            <v-icon size="20" class="mt-n1 mx-1">mdi mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in whoUsItems"
            :key="index"
            :value="index"
            class="text-primary-200"
          >
            <NuxtLink :to="localePath(item.path)">
              <v-list-item-title>{{
                $t(item.title)
              }}</v-list-item-title></NuxtLink
            >
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- ========== SERVICES RESAERCHER ========= -->
      <v-btn
        @click="router.push(localePath(RoutesManager.serviceSearcher))"
        color="transparent elevation-0"
        class="btn"
      >
        {{ $t("ResearchersServices") }}
      </v-btn>

      <!-- ============ RESEARCH========= -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            flat
            elevation="0"
            v-bind="props"
            class="btn align-center"
            color="transparent"
          >
            {{ $t("research") }}
            <v-icon size="20" class="mt-n1 mx-1">mdi mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            class="text-primary-200"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- ============ publishing========= -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            flat
            elevation="0"
            color="transparent"
            v-bind="props"
            class="btn align-center"
          >
            {{ $t("publishing") }}
            <v-icon size="20" class="mt-n1 mx-1">mdi mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            class="text-primary-200"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- ============ darFesal========= -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            flat
            elevation="0"
            color="transparent"
            v-bind="props"
            class="btn align-center"
          >
            {{ $t("darFesal") }}
            <v-icon size="20" class="mt-n1 mx-1">mdi mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            class="text-primary-200"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- ============ originsAndMesum========= -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            color="transparent"
            flat
            elevation="0"
            v-bind="props"
            class="btn align-center"
          >
            {{ $t("originsAndMesum") }}
            <v-icon size="20" class="mt-n1 mx-1">mdi mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            class="text-primary-200"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- ============ library========= -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            flat
            elevation="0"
            color="transparent"
            v-bind="props"
            class="btn align-center"
          >
            {{ $t("library") }}
            <v-icon size="20" class="mt-n1 mx-1">mdi mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            class="text-primary-200"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- ============ MATGER BOOKS STORE========= -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            color="transparent"
            flat
            elevation="0"
            v-bind="props"
            class="btn align-center"
          >
            {{ $t("centerStore") }}
            <v-icon size="20" class="mt-n1 mx-1">mdi mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in matgerItems"
            :key="index"
            :value="index"
            class="text-primary-200"
          >
            <NuxtLink :to="localePath(item.path)">
              <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
            </NuxtLink>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- ============ mediaCenter========= -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            color="transparent"
            flat
            elevation="0"
            v-bind="props"
            class="btn align-center"
          >
            {{ $t("mediaCenter") }}
            <v-icon size="20" class="mt-n1 mx-1">mdi mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            class="text-primary-200"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- ============ contactUs========= -->

      <v-btn flat elevation="0" color="transparent" class="btn align-center">
        {{ $t("contactUs") }}
      </v-btn>
    </v-sheet>
    <v-btn
      size="20"
      bg-color="white"
      rounded="xl"
      @click="navDrawer = !navDrawer"
      class="close-btn"
    >
      <v-icon v-if="navDrawer" size="20" color="black" class="font-weight-bold">
        mdi-close
      </v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
// .v-navigation-drawer {
//   top: 108px !important;
// }
.v-navigation-drawer__scrim {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.9;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}
.colse-btn {
  position: absolute;
  left: -128px;
  top: 12px;
}
</style>