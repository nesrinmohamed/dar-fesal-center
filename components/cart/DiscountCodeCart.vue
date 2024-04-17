<script setup >
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <v-card
    class="discount-code-card relative"
    elevation="2"
    width=""
    height="351px"
  >
    <h4 class="py-5 px-5">
      {{ $t("total") }} : <span class="text-primary-dark">170 ريال</span>
    </h4>
    <v-divider width="100%"></v-divider>
    <div
      class="d-flex align-center justify-space-between px-5 py-5 discount-code"
    >
      <v-text-field
        class="discount-input"
        :rules="[rules.required]"
        variant="outlined"
        :label="$t('code_discount')"
        density="compact"
        bg-color="#E9EEEF"
      >
      </v-text-field>

      <v-btn class="add-discount mx-2" color="transparent">
        {{ $t("add") }}
      </v-btn>
    </div>
    <p class="text-N100 text-subtitle-2 px-5">الخصم 10%</p>

    <BaseButton
      class="dark-btn text-center"
      width="90%"
      @click="router.push(localePath(RoutesManager.payment))"
      >اكمال الشراء</BaseButton
    >
  </v-card>
</template>

<style lang="scss" scoped>
.discount-code-card {
  .add-discount {
    border: 1px solid #1e5061;
    color: #1e5061 !important;
  }
  .discount-code {
    .discount-input {
      height: 40px !important;
    }
    .add-discount {
      border: 1px solid #1e5061;
      color: #1e5061 !important;
      height: 40px;
    }
  }
  .dark-btn {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>