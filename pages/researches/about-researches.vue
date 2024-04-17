<script setup >
import AssetsManager from "~/core/AssetsManager";

const researchProgramsImgs = ref([
  AssetsManager.socialProgram,
  AssetsManager.africiaProgram,
  AssetsManager.asiaProgram,
]);

const leasons = ref([
  "الدراسات اليمنية",
  "الدراسات الثقافية",
  "الفكر السياسى المعاصر",
  "دراسات الطاقة",
  "الاقتصاد السياسى",
  "الدراسات الامنية",
  "اللغة العربية",
  "الدراسات الايرانية",
  "اللغة السعودية",
]);

const projects = ref([
  {
    img: AssetsManager.project1,
    title:
      "يقدم مركز الملك فيصل للبحوث والدراسات الإسلامية بالتعاون مع مجلس الشرق الأوسط المحافظ (CMEC) سلسلة مدونات صوتية تُطلع المستمعين على التقدم الذي حققته رؤية المملكة 2030.",
  },
  {
    img: AssetsManager.project2,
    title:
      "يقدم مركز الملك فيصل للبحوث والدراسات الإسلامية بالتعاون مع مجلس الشرق الأوسط المحافظ (CMEC) سلسلة مدونات صوتية تُطلع المستمعين على التقدم الذي حققته رؤية المملكة 2030.",
  },
  {
    img: AssetsManager.project3,
    title:
      "يقدم مركز الملك فيصل للبحوث والدراسات الإسلامية بالتعاون مع مجلس الشرق الأوسط المحافظ (CMEC) سلسلة مدونات صوتية تُطلع المستمعين على التقدم الذي حققته رؤية المملكة 2030.",
  },
  {
    img: AssetsManager.user,
    title:
      "يقدم مركز الملك فيصل للبحوث والدراسات الإسلامية بالتعاون مع مجلس الشرق الأوسط المحافظ (CMEC) سلسلة مدونات صوتية تُطلع المستمعين على التقدم الذي حققته رؤية المملكة 2030.",
  },
  {
    img: AssetsManager.project5,
    title:
      "يقدم مركز الملك فيصل للبحوث والدراسات الإسلامية بالتعاون مع مجلس الشرق الأوسط المحافظ (CMEC) سلسلة مدونات صوتية تُطلع المستمعين على التقدم الذي حققته رؤية المملكة 2030.",
  },
  {
    img: AssetsManager.project6,
    title:
      "يقدم مركز الملك فيصل للبحوث والدراسات الإسلامية بالتعاون مع مجلس الشرق الأوسط المحافظ (CMEC) سلسلة مدونات صوتية تُطلع المستمعين على التقدم الذي حققته رؤية المملكة 2030.",
  },
  {
    img: AssetsManager.project7,
    title:
      "يقدم مركز الملك فيصل للبحوث والدراسات الإسلامية بالتعاون مع مجلس الشرق الأوسط المحافظ (CMEC) سلسلة مدونات صوتية تُطلع المستمعين على التقدم الذي حققته رؤية المملكة 2030.",
  },
]);
</script>

<template>
  <section class="about-research" :class="$vuetify.display.name">
    <BaseHeader>
      <div class="d-flex align-center justify-center py-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("details_about_research") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <div>
      <v-container>
        <!-- ========البرامج البحثية ============= -->
        <div class="research-programes my-2">
          <h3 class="text-secondary-500 my-2 fot-medium text-h6">
            {{ $t("research_programs") }}
          </h3>

          <!-- ===========SECTION 1 ========== -->
          <div class="d-flex align-center mb-5">
            <div>
              <v-img
                :src="AssetsManager.arrow"
                width="20"
                heigh="20"
                contain
              ></v-img>
            </div>
            <span class="text-main-color font-medium mx-2"
              >لدى مركز الملك فيصل للبحوث والدراسات الإسلامية ثلاث برامج بحثية
              ("وحدات بحثية" حتى أكتوبر 2021م):</span
            >
          </div>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="(item, i) in researchProgramsImgs"
              :key="i"
            >
              <v-img :src="item" width="100%" height="100%"></v-img>
            </v-col>
          </v-row>
          <!-- ============ SECTION 2============== -->

          <div class="d-flex align-center mb-5">
            <div>
              <v-img
                :src="AssetsManager.arrow"
                width="20"
                heigh="20"
                contain
              ></v-img>
            </div>
            <span class="text-main-color font-medium mx-2"
              >وفيما مضى، ضم المركز الوحدات والبرامج البحثية الآتية:</span
            >
          </div>

          <!-- =========STUDIS lEASONS =========== -->
          <v-sheet
            color="transparent"
            class="leasons d-flex align-center justify-space-between flex-wrap mx-auto"
            width="90%"
          >
            <v-card
              v-for="(item, i) in leasons"
              :key="i"
              min-width="201px"
              class="py-2 my-2 text-center font-medium rounded-lg mx-auto"
              color="secondary-500"
              elecation="0"
              variant="outlined"
            >
              <v-card-subtitle class="text-primary-200">{{
                item
              }}</v-card-subtitle>
            </v-card>
          </v-sheet>
        </div>
        <v-divider class="my-5"></v-divider>

        <!-- ===========  المشاريع ============= -->

        <div class="projects">
          <h3 class="text-secondary-500 my-2 fot-medium text-h6">
            {{ $t("projects") }}
          </h3>
          <p class="text-N200 font-medium mb-2">
            بالإضافة إلى البرامج البحثية، يسخر مركز الملك فيصل خبراته وتجاربه
            البحثية بالعمل على مشاريع متنوعة:
          </p>

          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(project, i) in projects"
              :key="i + 'p-k'"
            >
              <v-card
                color="transparent"
                class="project-card"
                variant="outlined"
              >
                <v-img
                  width="565px"
                  height="200px"
                  :src="project.img"
                  class="rounded-lg"
                  cover
                ></v-img>
                <p class="text-main-color w-100 my-3 px-5">
                  {{ project.title }}
                </p>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-research {
  &.sm,
  &.xs {
    .leasons {
      width: 100% !important;
    }
  }
}
</style>