<script setup>
/*##########[ IMPORTS ]##########*/
import { useRouter, useRoute } from "vue-router";
/*##########[ DEFINES ]##########*/
const props = defineProps(["item"]);
const router = useRouter();
const route = useRoute();

/*##########[ COMPUTED ]##########*/

/*##########[ STATE ]##########*/

/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {
  console.log(route.params);
});
onBeforeUnmount(() => {});
</script>

<template>
  <v-card
    class="base-card d-flex flex-column py-2 curoser-pointer"
    elevation="2"
    @click="router.push(localePath(`/book-store/books/${item.id}`))"
  >
    <v-sheet color="transparent" width="100%" class="px-2">
      <img :src="item.image" width="100%" height="351px" contain />
    </v-sheet>
    <h6 class="text-N600 text-subtitle-2 px-2 my-2">{{ item.name }}</h6>
    <span class="text-secondary-20 text-body-2 px-2">{{ item.auther }}</span>
  </v-card>
</template>

<style lang="scss" scoped>
.base-card {
  transition: all 300ms ease-in-out;
}
</style>