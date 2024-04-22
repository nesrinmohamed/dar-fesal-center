<script setup>
/*##########[ IMPORTS ]##########*/
import RoutesManager from "~/core/RoutesManager";
import AssetsManager from "~/core/AssetsManager";
import { useSharedStore } from "~/stores/sharedStore";

import { useLocale } from "vuetify";
import { useDisplay } from "vuetify";
import { useRouter } from "vue-router";
/*##########[ DEFINES ]##########*/
const isAuthorization = ref(true);
const router = useRouter();
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const sharedStore = useSharedStore();
const display = useDisplay();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const { current } = useLocale();
const localePath = useLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
const availableLocale = computed(() => {
  return locales.value.filter((i) => i.code === locale.value).length
    ? locales.value.filter((i) => i.code === locale.value)[0]
    : null;
});

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
watch(locale, (oldVal, newVal) => {
  current.value = newVal;
});
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <v-app-bar
    class="app-bar-customize d-flex flex-center justify-space-around flex-wrap"
    color="background-dark"
    scroll-behavior="elevate"
    :class="[{ mobile: $vuetify.display.mobile }, $vuetify.display.name]"
  >
    <!-- TOGGLE BUTTON  -->
    <!-- <v-btn
      color="primary"
      rounded="0"
      size="40px"
      v-if="$vuetify.display.smAndDown"
      @click="navDrawer = !navDrawer"
    >
      <v-icon v-if="navDrawer" size="20"> mdi-close </v-icon>
      <v-icon v-else size="20"> mdi-menu </v-icon>
    </v-btn> -->

    <NuxtLink
      class="brand-logo-wrapper d-flex flex-center justify-center text-decoration-none"
      :to="localePath(RoutesManager.home)"
    >
      <v-img
        :src="AssetsManager.whiteLogo"
        width="430px"
        height="89px"
        contain
        class="mx-5 logo-img"
      ></v-img>
    </NuxtLink>

    <nav class="nav-menu d-flex align-center justify-center">
      <div class="icon curoser-pointer">
        <v-icon
          size="25"
          color="secondary-300"
          class="mx-2"
          @click="router.push(localePath(RoutesManager.cart))"
        >
          mdi mdi-cart-outline</v-icon
        >
        <v-sheet
          class="cart-count d-flex align-center justify-center text-white text-subtitle-2 rounded-xl"
          width="21px"
          height="21px"
          color="error"
          ><span>2</span>
        </v-sheet>
      </div>

      <div class="icon">
        <v-icon
          size="25"
          color="secondary-300"
          class="mx-2"
          @click="router.push(localePath(RoutesManager.favorite))"
        >
          mdi mdi-heart-outline</v-icon
        >
      </div>
      <div class="icon">
        <v-icon size="25" color="secondary-300"> mdi mdi-magnify</v-icon>
      </div>
      <v-btn color="background" height="40px" class="mx-3" rounded="0">
        <v-icon class="me-1" size="25"> mdi-web </v-icon>
        <span class="mx-1" v-if="availableLocale">{{
          availableLocale.name
        }}</span>
        <v-menu activator="parent">
          <v-list bg-color="white" class="py-0">
            <v-list-item
              class="px-7 locale-name"
              v-for="locale in availableLocales"
              :key="locale.code"
            >
              <NuxtLink
                :to="switchLocalePath(locale.code)"
                class="text-secondary"
                >{{ locale.name }}</NuxtLink
              >
            </v-list-item>
          </v-list>
        </v-menu>
        <v-icon class="text-white">mdi mdi-chevron-down</v-icon>
      </v-btn>
    </nav>
    <!-- ============================== -->
    <div class="d-flex align-center" v-if="!isAuthorization">
      <base-button>
        <NuxtLink :to="localePath(RoutesManager.login)">
          {{ $t("login") }}</NuxtLink
        >
      </base-button>
      <base-button class="green mx-2">
        <NuxtLink :to="localePath(RoutesManager.signup)">{{
          $t("createAccount")
        }}</NuxtLink>
      </base-button>
    </div>
    <v-btn
      width="154px"
      height="44px"
      rounded="xl"
      class="text-none ms-4 user"
      color="primary-bg"
      variant="flat"
      v-if="isAuthorization"
    >
      <v-sheet
        width="28px"
        height="28px"
        class="rounded-xl d-flex align-center justify-center"
      >
        <v-img
          :src="AssetsManager.navUser"
          width="50%"
          height="50%"
          contain
        ></v-img>
      </v-sheet>
      <span class="mx-1 text-subtitle-2 user-name">user name</span>
      <v-menu activator="parent">
        <v-list bg-color="white" class="py-5 px-5">
          <div class="locale-name d-flex align-center mb-5 py-2">
            <div>
              <v-img
                :src="AssetsManager.userIcon2"
                width="20"
                height="20"
                contain
              ></v-img>
            </div>
            <NuxtLink
              :to="localePath(RoutesManager.personalInfo)"
              class="text-secondary mx-2"
              >{{ $t("personalPage") }}</NuxtLink
            >
          </div>
          <div class="d-flex align-center">
            <div>
              <v-img
                :src="AssetsManager.exitIcon"
                width="20"
                height="20"
                contain
              ></v-img>
            </div>

            <NuxtLink
              :to="localePath(RoutesManager.home)"
              class="text-secondary mx-2"
              >{{ $t("logout") }}</NuxtLink
            >
          </div>
        </v-list>
      </v-menu>
      <v-icon>mdi mdi-chevron-down</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.app-bar-customize {
  width: 1440px;
  height: 137px;
  margin-bottom: -19px;
  position: relative;
  z-index: 333;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("../../assets/img/nav-bg.png") no-repeat center;
    background-size: 100% 100%;
    z-index: -1;
  }

  &.sm {
    .brand-logo-wrapper {
      width: 300px;
    }
  }
  &.xs {
    .brand-logo-wrapper {
      width: 200px;
    }
    .user {
      width: 120px !important;
      height: 40px;
      padding: 0 20px;
      .user-name {
        font-size: 10px !important;
      }
    }
    // .brand-logo-wrapper {
    //   // width: ;
    //   height: 86px;
    // }
    .v-icon {
      cursor: pointer;
    }
  }

  .icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    position: relative;
    .cart-count {
      position: absolute;
      top: -5px;
      right: -5px;
    }
  }
}
</style>
