<script setup >
import RoutesManager from "~/core/RoutesManager";
import { useRouter } from "vue-router";

const router = useRouter();
const items = ref([
  { title: "item1" },
  { title: "item2" },
  { title: "item3" },
  { title: "item4" },
]);
const whoUsLinks = ref([
  { title: "who_us", path: RoutesManager.whoUs },
  { title: "center_history", path: RoutesManager.centerHistory },
  { title: "center-manager", path: RoutesManager.centerManager },
  { title: "directors", path: RoutesManager.directors },
]);

const matgerLinks = ref([
  { title: "book_store", path: RoutesManager.bookStore },
  { title: "antiquities", path: RoutesManager.antiquites },
]);

const researchesLinks = ref([
  { title: "about_research", path: RoutesManager.researches },
  {
    title: "research_programs",
    path: RoutesManager.researchProgrames,
    programes: [
      { title: "studies_program", path: RoutesManager.socialProgram },
      { title: "african_program", path: RoutesManager.africanProgram },
      { title: "asian_program", path: RoutesManager.asiaProgram },
    ],
  },
  {
    title: "arabic-research",
    path: RoutesManager.arabicResearch,
  },
  {
    title: "visitor_research",
    path: RoutesManager.visitorResarchProgram,
  },
]);

const publishing = ref([
  { title: "about_exports", path: RoutesManager.aboutExport },
  {
    title: "reaserches_paper",
    programes: [
      { title: "studies_journal", path: RoutesManager.studiesJournal },
      { title: "fesal_journal", path: RoutesManager.fesalJournal },
      { title: "human_journal", path: RoutesManager.humanJournal },
    ],
  },
  {
    title: "tracks",
    path: RoutesManager.arabicResearch,
    programes: [
      { title: "studies", path: RoutesManager.studies },
      { title: "readings", path: RoutesManager.readings },
      { title: "paths", path: RoutesManager.paths },
      { title: "comments", path: RoutesManager.comments },
      { title: "african_follow_up", path: RoutesManager.africanFollowUp },
      { title: "all_paper_researh", path: RoutesManager.allPaperResearch },
    ],
  },
]);

const darFesalItems = ref([
  { title: "about_dar-fesal", path: RoutesManager.aboutDarFesal },
  { title: "king_fesal_and_family", path: RoutesManager.kingFesalAndFamily },
  { title: "print_matrial", path: RoutesManager.printMaterial },
  { title: "photo_and_material", path: RoutesManager.photoAndMaterial },
]);
const aboutMeusum = ref([
  { title: "meusum_home", path: RoutesManager.meusum },
  { title: "about_meusum", path: RoutesManager.aboutMeuseum },
  { title: "saudi_memory_unit", path: RoutesManager.saudiMemoryUnit },
  { title: "exhibitions_events", path: RoutesManager.events },
]);
</script>

<template>
  <v-sheet
    class="app-navbar-2 text-white mt-4 d-flex align-center justify-space-evenly px-6"
    height="60px"
    color="primary-dark text-subtitle-2 "
  >
    <!-- ========== ABOUT CENTER======== -->
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          flat
          elevation="0"
          color="transparent"
          v-bind="props"
          class="btn align-center"
        >
          {{ $t("about_center") }}
          <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in whoUsLinks"
          :key="index"
          :value="index"
          class="text-primary-200"
        >
          <NuxtLink :to="localePath(item.path)">
            <v-list-item-title>{{ $t(item.title) }} </v-list-item-title>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- ========== SERVICES RESAERCHER ========= -->
    <v-btn
      @click="router.push(localePath(RoutesManager.personalPage))"
      color="transparent elevation-0"
      class="btn"
    >
      {{ $t("ResearchersServices") }}
    </v-btn>

    <!-- ============ RESEARCH========= -->
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          flat
          elevation="0"
          v-bind="props"
          class="btn align-center"
          color="transparent"
        >
          {{ $t("research") }}
          <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in researchesLinks"
          :key="index"
          :value="index"
          class="text-primary-200"
        >
          <NuxtLink
            :to="localePath(item.path)"
            v-if="item.title !== 'research_programs'"
            >{{ $t(item.title) }}</NuxtLink
          >

          <!-- ANOTHER DORPDOWN  -->
          <v-menu open-on-hover>
            <template
              v-slot:activator="{ props }"
              v-if="item.title === 'research_programs'"
            >
              <NuxtLink
                flat
                elevation="0"
                v-bind="props"
                class="btn align-center"
                color="transparent"
              >
                {{ $t("research_programs") }}
                <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
              </NuxtLink>
            </template>
            <v-list>
              <v-list-item
                v-for="(program, index) in item.programes"
                :key="index"
                :value="index"
                class="text-primary-200"
              >
                <NuxtLink :to="localePath(program.path)">{{
                  $t(program.title)
                }}</NuxtLink>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- ============ publishing========= -->
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          flat
          elevation="0"
          v-bind="props"
          class="btn align-center"
          color="transparent"
        >
          {{ $t("publishing") }}
          <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in publishing"
          :key="index"
          :value="index"
          class="text-primary-200"
        >
          <NuxtLink
            :to="localePath(item.path)"
            v-if="item.title == 'about_exports'"
            >{{ $t(item.title) }}</NuxtLink
          >

          <!-- ABOUT EXPORTS  DORPDOWN  -->
          <v-menu open-on-hover>
            <template
              v-slot:activator="{ props }"
              v-if="item.title === 'reaserches_paper'"
            >
              <NuxtLink
                flat
                elevation="0"
                v-bind="props"
                class="btn align-center"
                color="transparent"
              >
                {{ $t("reaserches_paper") }}
                <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
              </NuxtLink>
            </template>
            <v-list>
              <v-list-item
                v-for="(program, index) in item.programes"
                :key="index"
                :value="index"
                class="text-primary-200"
              >
                <NuxtLink :to="localePath(program.path)">{{
                  $t(program.title)
                }}</NuxtLink>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- TRACKS  DORPDOWN  -->
          <v-menu open-on-hover>
            <template
              v-slot:activator="{ props }"
              v-if="item.title === 'tracks'"
            >
              <NuxtLink
                flat
                elevation="0"
                v-bind="props"
                class="btn align-center"
                color="transparent"
              >
                {{ $t("tracks") }}
                <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
              </NuxtLink>
            </template>
            <v-list>
              <v-list-item
                v-for="(program, index) in item.programes"
                :key="index"
                :value="index"
                class="text-primary-200"
              >
                <NuxtLink :to="localePath(program.path)">{{
                  $t(program.title)
                }}</NuxtLink>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- ============ darFesal========= -->
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          flat
          elevation="0"
          color="transparent"
          v-bind="props"
          class="btn align-center"
        >
          {{ $t("darFesal") }}
          <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in darFesalItems"
          :key="index"
          class="text-primary-200"
        >
          <NuxtLink :to="localePath(item.path)">{{ $t(item.title) }}</NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- ============ originsAndMesum========= -->
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          color="transparent"
          flat
          elevation="0"
          v-bind="props"
          class="btn align-center"
        >
          {{ $t("originsAndMesum") }}
          <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in aboutMeusum"
          :key="index"
          :value="index"
          class="text-primary-200 w-100"
        >
          <NuxtLink :to="localePath(item.path)">{{ $t(item.title) }}</NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- ============ library========= -->
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          flat
          elevation="0"
          color="transparent"
          v-bind="props"
          class="btn align-center"
        >
          {{ $t("library") }}
          <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          class="text-primary-200"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- ============ MATGER BOOKS STORE========= -->
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          color="transparent"
          flat
          elevation="0"
          v-bind="props"
          class="btn align-center"
        >
          {{ $t("centerStore") }}
          <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in matgerLinks"
          :key="index"
          :value="index"
          class="text-primary-200"
        >
          <NuxtLink :to="localePath(item.path)">
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- ============ mediaCenter========= -->
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          color="transparent"
          flat
          elevation="0"
          v-bind="props"
          class="btn align-center"
        >
          {{ $t("mediaCenter") }}
          <v-icon size="20" class="mx-1">mdi mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          class="text-primary-200"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- ============ contactUs========= -->

    <v-btn
      flat
      elevation="0"
      color="transparent"
      class="btn align-center"
      @click="router.push(localePath(RoutesManager.contactUs))"
    >
      {{ $t("contactUs") }}
    </v-btn>
  </v-sheet>
</template>

<style lang="scss" scoped>
.btn:hover {
  background-color: transparent !important;
  color: inherit !important;
  text-transform: capitalize;
}
</style>