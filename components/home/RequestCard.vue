<script setup>
/*##########[ IMPORTS ]##########*/
import { useDisplay } from "vuetify";
import { useSharedStore } from "~/stores/sharedStore";
/*##########[ STATE ]##########*/
const display = useDisplay();
const sharedStore = useSharedStore();
/*##########[ DEFINES ]##########*/
/*##########[ ACTIONS ]##########*/
/*##########[ LIFECYCLE ]##########*/
</script>



<template>
  <v-container>
    <v-row>
      <v-col md="4" v-if="!$vuetify.display.smAndDown"
        ><HomeSidebarList></HomeSidebarList>
      </v-col>
      <v-col cols="12" md="8">
        <v-row>
          <v-col
            cols="6"
            sm="4"
            v-for="(item, i) in sharedStore.cardContent"
            :key="i + 'c-k'"
          >
            <v-card
              class="base-card d-flex align-center flex-column py-2 curoser-pointer text-center py-6"
              elevation="2"
              max-width="278px"
              max-heigh="194px"
            >
              <v-sheet
                width="30px"
                height="30px"
                color="secondary-50"
                class="px-2 rounded-xl d-flex align-center justify-center"
              >
                <v-img
                  :src="item.icon"
                  width="100%"
                  height="100%"
                  contain
                ></v-img>
              </v-sheet>
              <h6 class="text-N100 font-small font-medium px-2 my-3">
                {{ item.title }}
              </h6>
              <span class="text-secondary-500 text-subtitle-2 px-2">{{
                item.active
              }}</span>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>



<style lang="scss">
</style>