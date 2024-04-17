<script setup>
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";

const serviceItems = ref([
  {
    icon: AssetsManager.documentIcon,
    path: RoutesManager.surveyRequest,
    title: "survey_request",
    type: "surveyRequest",
  },
  {
    icon: AssetsManager.scaleIcon,
    path: RoutesManager.certificateRequest,
    title: "certificate_request",
    type: "certificateRequest",
  },
  {
    icon: AssetsManager.envelopplusIcon,
    path: RoutesManager.monuscripRequest,
    title: "monuscrip_request",
    type: "monuscripRequest",
  },
  {
    icon: AssetsManager.searchaltIcon,
    path: RoutesManager.messageRegistration,
    title: "message_registration",
    type: "messageRegistration",
  },
]);
const activeCard = ref("surveyRequest");

const changeActiveCard = (type) => {
  activeCard.value = type;
};
</script>

<template>
  <div class="request-tracking">
    <HomeHeader></HomeHeader>
    <div class="d-flex align-center justify-center flex-column">
      <h3 class="text-secondary-500 mb-5">
        {{ $t("choose_service") }}
      </h3>
      <div class="card-container">
        <v-row>
          <v-col
            cols="6"
            md="3"
            v-for="(item, i) in serviceItems"
            :key="i + 's-k'"
          >
            <v-card
              height="106px"
              class="rounded-lg d-flex align-center justify-center px-5 card-item"
              :class="{ active: item.type === activeCard }"
              @click="changeActiveCard(item.type)"
            >
              <NuxtLink
                :to="localePath(item.path)"
                class="d-flex align-center justify-center"
              >
                <v-img
                  :src="item.icon"
                  width="20"
                  height="20"
                  class="mx-n2"
                ></v-img>
                <v-card-title class="text-h6 font-weight-meduim">{{
                  $t(item.title)
                }}</v-card-title>
              </NuxtLink>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: 80%;
  margin: auto;
  .card-item {
    color: $secondary-500;
    &.active {
      border: 1px solid black;
      color: black !important;
    }
  }
}
</style>