<script setup >
</script>

<template>
  <div class="payment-page" :class="$vuetify.display.name">
    <BaseHeader class="d-flex align-center">
      <v-container>
        <h2 class="text-secondary-500 font-semibold">
          {{ $t("choose_payment") }}
        </h2>
      </v-container>
    </BaseHeader>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="7">
          <v-sheet
            color="transparent"
            max-width="500px"
            class="d-flex flex-column"
          >
            <v-text-field
              class="payment-input"
              :rules="[rules.required]"
              variant="outlined"
              :label="$t('direct_depit_card')"
              density="compact"
              bg-color="transparent"
              base-color="secondary-500"
              rounded="lg"
            >
            </v-text-field>
            <v-text-field
              class="payment-input"
              :rules="[rules.required]"
              variant="outlined"
              :label="$t('appel_pay')"
              density="compact"
              bg-color="transparent"
              base-color="secondary-500"
              rounded="lg"
            >
            </v-text-field>
            <v-text-field
              class="payment-input"
              :rules="[rules.required]"
              variant="outlined"
              :label="$t('mada_card')"
              density="compact"
              bg-color="transparent"
              base-color="secondary-500"
              rounded="lg"
            >
            </v-text-field>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <CartDiscountCodeCart></CartDiscountCodeCart
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>