<script setup >
import AssetsManager from "~/core/AssetsManager";
</script>
<template>
  <!-- headerVisitorImg -->
  <div class="research-program-visitor">
    <BaseHeader>
      <div class="d-flex align-center justify-center py-10">
        <v-container
          class="d-flex align-center justify-space-between flex-wrap"
        >
          <h2 class="text-secondary-500 font-semibold mb-2">
            {{ $t("visitor_program_research") }}
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
      <v-sheet max-width="897px">
        <v-img
          :src="AssetsManager.arabicResearhHeader"
          width="100%"
          height="367px"
          contain
          class="my-5"
        ></v-img>
        <div class="text-N400 font-medium line-height line-2">
          <p>
            تم إنشاء برنامج الباحث الزائر في عام 1420هـ بهدف مساعدة الخبراء
            والأكاديميين وطلاب الدكتوراه من داخل المملكة العربية السعودية
            وخارجها في بحوثهم.
          </p>
          <p class="my-4">
            وقد استقبل البرنامج ما يزيد على 500 باحث زائر من أكثر من 50 دولة حول
            العالم خلال عقدين منذ إنشاءه. انضم إلى البرنامج العديد من الخبراء في
            شؤون المملكة العربية السعودية ومنطقة الخليج والشرق الأوسط، مثل: راشد
            شاز، أيمن شحادة، ستيفان لاكروا، نيل بارتريك، نعومي تسوجيجامي، ديفيد
            كومنز، برنارد هيكل، أليكسي فاسيلييف، أولريك فريتاخ، توماس هيغهامر،
            جريجوري جوز.
          </p>
          <p>
            عادة يقيم الباحث الزائر لمدة لا تقل عن أسبوعين في المملكة العربية
            السعودية، حيث يُطلب منه المشاركة في المناقشة مع باحثي المركز وتقديم
            نتائج بحثه في محاضرة داخلية. ولا يتحمل برنامج الباحث الزائر أية
            تكاليف تمويل إذا لم يكن المشروع البحثي جزءاً من أعمال مركز الملك
            فيصل للبحوث والدراسات الإسلامية. وفي حال إقامة الباحث الزائر لمدة
            أطول من شهرين فإنه يُطلب منه نشر إصدار للمركز أو أي نوع آخر من
            المساهمات في بحوث المركز حيث تُقدَّم مكافأة مقابل ذلك.
          </p>
        </div>
      </v-sheet>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>