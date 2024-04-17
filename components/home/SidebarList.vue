<script setup>
/*##########[ IMPORTS ]##########*/
import { useSharedStore } from "~/stores/sharedStore";
import { useLocale } from "vuetify";
/*##########[ STATE ]##########*/
const sharedStore = useSharedStore();
const localePath = useLocalePath();
/*##########[ DEFINES ]##########*/
/*##########[ ACTIONS ]##########*/
/*##########[ LIFECYCLE ]##########*/
</script>



<template>
  <v-sheet width="280px" >
    <v-sheet color="#1E5061" class="text-white text-h5 px-2 py-3">
      {{ $t("researcherservices") }}</v-sheet
    >

    <v-list>
      <v-listItem
        v-for="(personItem, i) in sharedStore.personList"
        :key="i + 'p-k'"
        class="d-flex align-center"
      >
        <NuxtLink :to="localePath(personItem.path)" class="d-flex align-center">
          <v-img
            :src="personItem.icon"
            width="20"
            class="mx-2 mt-1"
            contain
          ></v-img>
          <span class="text-secondary-500">{{ $t(personItem.title) }}</span>
        </NuxtLink>
      </v-listItem>
    </v-list>
  </v-sheet>
</template>



<style lang="scss">
</style>