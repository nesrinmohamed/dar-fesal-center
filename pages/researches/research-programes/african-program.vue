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
]);
const historyItems = ref([
  {
    date: "2020",
    desc: [
      {
        name: "محمد السبيطلي،",
        title: "تأسست مؤسسة الملك فيصل الخيرية على يد أبناء الراحل الملك فيصل.",
      },
      {
        name: "محمد السبيطلي،",
        title: "تأسست مؤسسة الملك فيصل الخيرية على يد أبناء الراحل الملك فيصل.",
      },
      {
        name: "محمد السبيطلي،",
        title: "تأسست مؤسسة الملك فيصل الخيرية على يد أبناء الراحل الملك فيصل.",
      },
    ],
  },
  {
    date: "2021",
    desc: [
      {
        name: "محمد السبيطلي،",
        title:
          "السلاح التركي في إفريقيا: دوافع التسويق ونماذج التعاون، تقرير خاص، ديسمبر ٢٠٢١",
      },
      {
        name: "محمد السبيطلي،",
        title:
          "السلاح التركي في إفريقيا: دوافع التسويق ونماذج التعاون، تقرير خاص، ديسمبر ٢٠٢١",
      },
      {
        name: "محمد السبيطلي،",
        title:
          "السلاح التركي في إفريقيا: دوافع التسويق ونماذج التعاون، تقرير خاص، ديسمبر ٢٠٢١",
      },
    ],
  },
]);
</script>
<template>
  <!-- headerVisitorImg -->
  <div class="african-program">
    <BaseHeader>
      <div class="d-flex align-center justify-center py-10">
        <v-container
          class="d-flex align-center justify-space-between flex-wrap"
        >
          <h2 class="text-secondary-500 font-semibold mb-2">
            {{ $t("african_program") }}
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
        <h3 class="text-primary-100 text-h4 mb-5">عن المركز</h3>
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
      <hr color="#E9EEEF" class="my-10" />

      <div class="mx-auto">
        <h3 class="text-primary-100 my-5 text-h4">{{ $t("researches") }}</h3>
        <div class="d-flex align-center flex-wrap mx-auto">
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
      <hr color="#E9EEEF" class="my-8" />

      <div>
        <h3 class="text-primary-100 text-h4">{{ $t("program_exports") }}</h3>
        <v-list class="mt-3">
          <v-list-item
            v-for="(item, i) in historyItems"
            :key="i"
            class="export-program-items mx-10"
          >
            <v-list-item-subtitle class="text-secondary-500 font-medium py-2">{{
              item.date
            }}</v-list-item-subtitle>

            <div v-for="(descItem, i) in item.desc" :key="i + 'd-k'">
              <span class="text-N600 font-medium">{{ descItem.name }}</span>
              <span class="text-primary-blue font-medium text-primary-blue">{{
                descItem.title
              }}</span>
            </div>
          </v-list-item>
        </v-list>
      </div>
      <hr color="#E9EEEF" class="my-8" />
      <div>
        <h3 class="text-primary-100 text-h4">{{ $t("program_project") }}</h3>
        <h3 class="text-N600 mt-8 mb-4 font-weight-medium">
          {{ $t("african-follow") }}
        </h3>
        <p>
          سلسلة أوراق متخصصة يضمها تقرير شهري يصدر عن مركز الملك فيصل للبحوث
          والدراسات الإسلامية بالرياض. تناقش السلسلة الملفات والقضايا السياسية
          والاقتصادية والأمنية المختلفة التي تهم سُكّان القارة الإفريقية
          وانعكاساتها الإقليمية والدولية من خلال مقاربات متعددة التخصصات وزوايا
          النظر.
        </p>
        <v-btn class="text-primary-dark mt-1" color="transparent" elevation="0">
          {{ $t("show-all-numbers") }}
        </v-btn>
      </div>
      <hr color="#E9EEEF" class="my-8" />
      <div>
        <h3 class="text-primary-100 text-h4">{{ $t("last_researcher") }}</h3>
        <div class="d-flex flex-wrap mx-auto">
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
.african-program {
  .export-program-items {
    position: relative;
    &:last-child {
      &::before {
        display: none;
      }
    }
    &::after {
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      top: 10px;
      right: -10px;
      border-radius: 50%;
      background: #e9eeef;
      z-index: 3333;
      opacity: 1;
      border: 0;
      outline: none;
    }
    &::before {
      content: "";
      width: 2px;
      height: 100%;
      position: absolute;
      top: 25px;
      right: -1px;
      background: #e9eeef;
    }
  }
}
</style>