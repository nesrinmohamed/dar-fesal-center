<script setup >
const props = defineProps(["error"]);
</script>

<template>
  <v-sheet
    color="transparent"
    class="d-flex align-center justify-center text-center"
    height="50vh"
  >
    <div class="error text-h4">
      <p>{{ error.statusCode }}</p>
      <p>Ooops.</p>
      <p>{{ error.message }}</p>
    </div>
  </v-sheet>
</template>

<style lang="scss" scoped>
</style>