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
    img: AssetsManager.user,
    name: "صاحبة السمو الملكي الأميرة مها بنت محمد الفيصل",
    job: "الأمين العام",
  },
]);
</script>
<template>
  <!-- headerVisitorImg -->
  <div class="social-program">
    <BaseHeader>
      <div class="d-flex align-center justify-center py-10">
        <v-container
          class="d-flex align-center justify-space-between flex-wrap"
        >
          <h2 class="text-secondary-500 font-semibold mb-2">
            {{ $t("social_program") }}
          </h2>
          <div class="header-buttons d-flex">
            <BaseButton
              class="transparent mx-2 font-light text-secondary-200"
              width="147px"
              height="55px"
            >
              <v-icon size="20" class="mx-1">mdi mdi-heart-outline</v-icon>
              {{ $t("add_favorite") }}
            </BaseButton>
          </div>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <v-sheet max-width="862px" class="mb-5">
        <h3 class="text-primary-100 my-5 text-h4">عن المركز</h3>
        <p class="text-N100 font-medium">
          أُسس برنامج الدراسات الاجتماعية الاقتصادية (وحدة سابقًا) في عام ٢٠٢٠م.
          يناقش البرنامج التطورات والمفاهيم والنظريات الاجتماعية-الاقتصادية
          المعاصرة. إضافةً إلى استهدافه لدراسة أهمية المواضيع
          الاجتماعية-الاقتصادية لمجتمعات ومجموعات محددة مع التركيز على المملكة
          العربية السعودية ودول الخليج والعالم العربي والإسلامي. يقدِّم البرنامج
          مناهج متعددة الإختصاصات التي تشمل نظريات اجتماعية-اقتصادية والسياسة
          الاجتماعية ومواضيع اجتماعية-ثقافية. وهذا يهدف لتوفير صورة شاملة وتحليل
          دقيق للأسئلة الناجمة عن التلازم ما بين المجتمعات والاقتصادات.
          <br />
          (*للمزيد من التفاصيل الرجاء الاطلاع على الصفحة الإنجليزية.)
        </p>
      </v-sheet>
      <hr color="#E9EEEF" />

      <div>
        <h3 class="text-primary-100 my-5 text-h4">{{ $t("researches") }}</h3>
        <div class="flex-center flex-wrap mx-auto">
          <div v-for="(user, i) in users" :key="i">
            <BaseResearchesCard
              :user="user"
              @click="
                router.push(
                  localePath(`/researches/research-programes/${i + 1}`)
                )
              "
            ></BaseResearchesCard>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>