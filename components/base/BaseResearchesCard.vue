<script setup >
const router = useRouter();
const props = defineProps(["user", "i"]);
</script>

<template>
  <v-card
    validation="0"
    color="secondary-500"
    variant="outlined"
    width="240px"
    height="320px"
    class="rounded-lg mx-5 px-3 py-2 text-center mt-5"
   
  >
    <div>
      <v-img :src="user.img" width="100%" height="100%" cover></v-img>
    </div>
    <h6 class="my-3 text-primary-100">{{ user.name }}</h6>
    <span class="text-primary-65 text-subtitle-2">{{ user.job }}</span>
  </v-card>
</template>

<style lang="scss" scoped>
</style>