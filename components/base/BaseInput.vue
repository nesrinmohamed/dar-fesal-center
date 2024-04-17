<script setup>
const props = defineProps(["title"]);
</script>

<template>
  <div
    class="base-input d-flex align-center justify-center relative"
    :class="$vuetify.display.name"
  >
    base input
  </div>
</template>

<style lang="scss" scoped>
.base-input {
  position: relative;
  .input {
    border: 1px solid gray;
    transform: skew(-16deg);
    // height: 50px;
    width: 100%;
  }
  .icon-message {
    position: absolute;
    left: 4px;
    top: 8px;
  }
  .input-btn {
    color: #000 !important;
    transform: skew(-18deg);
    height: 5vw;
    border: 0;
  }

  &.xs {
    display: flex;
    flex-direction: column;
    .input-btn {
      margin-top: 8px;
    }
  }
}
</style>
