<script setup >
definePageMeta({
  layout: "auth",
});
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  username: "",
  password: "",
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push("/");
  }
};
</script>

<template>
  <v-sheet width="100%" height="100%" color="transparent" class="login">
    <v-row dir="rtl">
      <v-col md="4" v-if="!$vuetify.display.smAndDown">
        <BaseSidebar></BaseSidebar>
      </v-col>
      <v-col cols="12" md="8">
        <StaticSectionsLogin></StaticSectionsLogin>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style lang="scss" scoped>
</style>