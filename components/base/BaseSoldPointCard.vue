<script setup >
const props = defineProps(["items"]);
</script>

<template>
  <div class="base-sold-points-cards">
    <div v-for="(item, i) in items" :key="i + 'a-k'">
      <h2 class="px-5 py-5 text-N100 text-h4 font-semibold">
        {{ item.address }}
      </h2>

      <v-row>
        <v-col
          v-for="(soldPointItem, index) in item.links"
          :key="index + 's-k'"
          cols="12"
          sm="6"
        >
          <v-card
            height="146px"
            max-width="573px"
            class="elevation-0 sold-point-card px-5 py-5"
          >
            <h4 class="text-primary-75 font-weigh-bold">
              {{ soldPointItem.name }}
            </h4>
            <div class="phone-number text-N100 my-3">
              <span>{{ $t("contact") }} : </span>
              <span
                v-for="(phoneNum, i) in soldPointItem.phones"
                :key="i + 'p-k'"
                class="text-subtitle-2"
                >{{ phoneNum.phone }},
              </span>
            </div>
            <p class="text-N100 my-2 text-subtitle-2">
              {{ soldPointItem.date }}
            </p>
            <p class="text-N100 text-subtitle-2">
              {{ soldPointItem.address }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-sold-points-cards {
  .sold-point-card {
    border: 1px solid #97cdc2;
  }
}
</style>