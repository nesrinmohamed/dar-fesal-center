<script setup >
import AssetsManager from "~/core/AssetsManager";

const printMaterialItems = ref([
  {
    image: AssetsManager.printMaterial1,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
  {
    image: AssetsManager.printMaterial2,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
  {
    image: AssetsManager.printMaterial3,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
  {
    image: AssetsManager.printMaterial4,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
]);
</script>

<template>
  <div class="photo-material">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("print_matrial") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(item, i) in printMaterialItems"
          :key="i"
        >
          <v-img :src="item.image" width="100%" max-height="719.44px" contain>
          </v-img>
          <p class="my-2">{{ item.desc }}</p>
          <span class="text-main-color">{{ item.date }}</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>