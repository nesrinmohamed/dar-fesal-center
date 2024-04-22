<script setup >
import AssetsManager from "~/core/AssetsManager";

import { useRouter } from "vue-router";
const router = useRouter();
const users = ref([
  {
    id: 1,
    img: AssetsManager.user,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    id: 2,
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "مساعد الأمين العام",
  },
  {
    id: 3,
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    id: 4,
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    id: 5,
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    id: 6,
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    id: 7,
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    id: 8,
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },

  {
    id: 9,
    img: AssetsManager.frame,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
  {
    id: 10,
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
            <BaseResearchesCard
              :user="user"
              @click="
                router.push(localePath(`/about-center/directors/${i + 1}`))
              "
            ></BaseResearchesCard>
          </div>
        </div>
        <v-divider class="my-10"></v-divider>
        <!-- ============USERS 2================ -->
        <div class="flex-center flex-wrap mx-auto">
          <div v-for="(user, i) in users.slice(0, 5)" :key="i">
            <BaseResearchesCard
              :user="user"
              @click="
                router.push(localePath(`/about-center/directors/${i + 1}`))
              "
            ></BaseResearchesCard>
          </div>
        </div>
        <v-divider class="my-10"></v-divider>

        <!-- ============USERS 2================ -->
        <div class="flex-center flex-wrap mx-auto">
          <div v-for="(user, i) in users" :key="i">
            <BaseResearchesCard
              :user="user"
              @click="
                router.push(localePath(`/about-center/directors/${i + 1}`))
              "
            ></BaseResearchesCard>
          </div>
        </div>
        <v-divider class="my-10"></v-divider>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>