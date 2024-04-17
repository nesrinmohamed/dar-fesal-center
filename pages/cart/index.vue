<script setup >
</script>

<template>
  <div class="card-page" :class="$vuetify.display.name">
    <BaseHeader class="d-flex align-center">
      <v-container>
        <h2 class="text-secondary-500 font-semibold">
          {{ $t("shopping_cart") }}
        </h2>
      </v-container>
    </BaseHeader>

    <v-container>
      <v-row>
        <v-col cols="12" md="7">
          <CartShoppingCart></CartShoppingCart>
        </v-col>
        <v-col cols="12" md="5">
          <CartDiscountCodeCart></CartDiscountCodeCart>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>