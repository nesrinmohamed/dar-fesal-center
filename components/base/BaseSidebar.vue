<script setup >
import AssetsManager from "~/core/AssetsManager";
</script>

<template>
  <div class="base-sidebar">
    <v-img
      :src="AssetsManager.sidebarLogo"
      width="100%"
      height="89px"
      class="logo"
    ></v-img>

    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-sidebar {
  width: 100%;
  height: 100%;
  // min-height: 98vh;
  position: relative;
  .logo {
    z-index: 33333;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("../../assets/img/sidebar-image.jpg") repeat center center;
    background-size: cover;
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #1e5061;
    opacity: 0.9;
    z-index: 1;
  }
}
</style>