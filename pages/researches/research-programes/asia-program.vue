<script setup >
import AssetsManager from "~/core/AssetsManager";
</script>

<template>
  <div class="asia-program">
    <BaseHeader>
      <div class="d-flex align-center justify-center py-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold mb-2">
            {{ $t("asia_header_title") }}
          </h2>
          <p class="author-name text-primary-dark">د. محمد السبيطلي</p>
        </v-container>
      </div>
    </BaseHeader>
    <v-container>
      <v-sheet max-width="867px">
        <v-img
          :src="AssetsManager.asiaHeadrer"
          width="100%"
          max-height="367px"
        ></v-img>
        <p class="text-N200 mt-6 text-h6 line-heigh line-1">
          تتردد كثيرًا في الوقت الحاضر عبارةٌ على لسان سياسيين ومتخصصين
          وإعلاميين، مفادها أن فرنسا–عقب صدور نتائج الانتخابات التشريعية الأخيرة
          – أصبح يتعذر حكمها (Ungovernable)؛ ذلك أن هذا الاستحقاق الانتخابي،
          الذي دارت الجولة الثانية منه يوم الأحد 19 يونيو/ حزيران، لم يسفر عن
          أغلبية برلمانية يمكنها تشكيل حكومة، وتنال ثقة المجلس الوطني، على الرغم
          من وجود أكثرية نالها تحالف «معًا»، الذي تجمع حول حزب الرئيس إيمانويل
          ماكرون، الذي أطلق عليه «حزب النهضة»، بعد أن كان يُسمى حزب «الجمهورية
          إلى الأمام»؛ إذا يمكن القول؛ أن نتائج الانتخابات التشريعية الأخيرة،
          وضعت فرنسا أمام أزمة حُكم أكيدة، وهو أمر أكدته كل الأطراف السياسية
          الفرنسية، بمن فيها رئيس الجمهورية إيمانويل ماكرون نفسه؛ وهنا يبرز
          السؤال: كيف ستواجه الطبقة السياسية الفرنسية هذه الأزمة؟ وما الحلول
          الممكنة والمتوقعة للخروج منها؟
        </p>
      </v-sheet>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>