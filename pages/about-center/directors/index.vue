<script setup >
import AssetsManager from "~/core/AssetsManager";

import { useRouter } from "vue-router";
const router = useRouter();
const users = ref([
  {
    img: AssetsManager.user,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "مساعد الأمين العام",
  },
  {
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },

  {
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    img: AssetsManager.user,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
]);
</script>

<template>
  <div class="chairman-center-page">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("directors") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <div class="users my-5">
        <!-- ===========USERS 1============= -->
        <div class="flex-center">
          <div v-for="(user, i) in users.slice(0, 2)" :key="i">
            <v-card
              validation="0"
              color="secondary-500"
              variant="outlined"
              width="240px"
              height="330px"
              class="rounded-lg mx-5 px-3 py-2 text-center"
              @click="
                router.push(localePath(`/about-center/directors/${i + 1}`))
              "
            >
              <div>
                <v-img
                  :src="user.img"
                  width="100%"
                  height="100%"
                  contain
                ></v-img>
              </div>
              <h6 class="my-2 text-primary-100">{{ user.name }}</h6>
              <span class="text-primary-65 text-subtitle-2">{{
                user.job
              }}</span>
            </v-card>
          </div>
        </div>
        <v-divider class="my-10"></v-divider>
        <!-- ============USERS 2================ -->
        <div class="flex-center flex-wrap mx-auto">
          <div v-for="(user, i) in users.slice(0, 7)" :key="i">
            <v-card
              validation="0"
              color="secondary-500"
              variant="outlined"
              width="240px"
              height="330px"
              class="rounded-lg mx-5 px-3 py-2 text-center mt-5"
            >
              <div>
                <v-img
                  :src="user.img"
                  width="100%"
                  height="100%"
                  contain
                ></v-img>
              </div>
              <h6 class="my-2 text-primary-100">{{ user.name }}</h6>
              <span class="text-primary-65 text-subtitle-2">{{
                user.job
              }}</span>
            </v-card>
          </div>
        </div>
        <v-divider class="my-10"></v-divider>

        <!-- ============USERS 2================ -->
        <div class="flex-center flex-wrap mx-auto">
          <div v-for="(user, i) in users" :key="i">
            <v-card
              validation="0"
              color="secondary-500"
              variant="outlined"
              width="240px"
              height="330px"
              class="rounded-lg mx-5 px-3 py-2 text-center mt-5"
            >
              <div>
                <v-img
                  :src="user.img"
                  width="100%"
                  height="100%"
                  contain
                ></v-img>
              </div>
              <h6 class="my-2 text-primary-100">{{ user.name }}</h6>
              <span class="text-primary-65 text-subtitle-2">{{
                user.job
              }}</span>
            </v-card>
          </div>
        </div>
        <v-divider class="my-10"></v-divider>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>