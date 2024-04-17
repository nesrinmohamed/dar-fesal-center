<template>
  <v-btn
    v-bind="$attrs"
    :class="[
      color == 'secondary-500' ? 'secondary-500' : 'outlined',
      'base-button',
    ]"
    :style="{ width: width, height: height }"
    class="text-subtitle-1"
    elevation="0"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    width: {
      type: [Number, String],
      default: "",
    },
    height: {
      type: [Number, String],
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  border-radius: 32px;
  transition: $ownTransition;
  text-transform: capitalize;
  &.secondary {
    background: $secondary-500;
    color: #fff;
  }
  &.outlined {
    border: 1px solid $secondary-500;
    color: $secondary-500;
    background: #fff;
  }
  &.transparent {
    background: transparent;
    color: $primary-dark;
    border: 1px solid $primary-dark;
    outline: none;
    border-radius: 5px;
  }
  &.green {
    background: $secondary-500;
    border: none;
    color: white;
    &:hover {
      background: $secondary-500 !important;
    }
  }
  &.green-noborder {
    background: $secondary-500;
    border: none;
    color: white;
    border-radius: 5px;
    &:hover {
      background: $secondary-500 !important;
    }
  }

  &.grey {
    background: $secondary-100;
  }
  &.dark-btn {
    background: $primary-dark;
    border-radius: 5px;
    color: #fff;
  }
  &.outlined-2 {
    border: 1px solid $secondary-500;
    color: $secondary-500;
    background: transparent;
    border-radius: 5px;
  }
  &.cancel {
    background: #a3b7be;
    color: $secondary-500;
    border: 1px solid grey !important;
    border-radius: 5px;
  }
  &:disabled {
    cursor: not-allowed !important;
    pointer-events: auto;
  }
}
</style>
