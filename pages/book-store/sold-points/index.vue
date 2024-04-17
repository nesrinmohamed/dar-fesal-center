<script setup >
const soldPiontsItems = ref([
  {
    address: "الرياض",
    links: [
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
        date: "من يوم الأحد وحتى يوم الخميس من الساعة 10 صباحًا وحتى الساعة 6 مساءً.",
      },
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
      },
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
        address: "الطريق الدائري الشرقي",
      },
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
        address: "طريق الأمير محمد بن سلمان بن عبدالعزيز- حي الفلاح",
      },
    ],
  },
  {
    address: "القصيم",
    links: [
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
        date: "من يوم الأحد وحتى يوم الخميس من الساعة 10 صباحًا وحتى الساعة 6 مساءً.",
      },
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
      },
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
        address: "الطريق الدائري الشرقي",
      },
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
        address: "طريق الأمير محمد بن سلمان بن عبدالعزيز- حي الفلاح",
      },
    ],
  },
  {
    address: "المدينة المنورة",
    links: [
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
        date: "من يوم الأحد وحتى يوم الخميس من الساعة 10 صباحًا وحتى الساعة 6 مساءً.",
      },
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
      },
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
        address: "الطريق الدائري الشرقي",
      },
      {
        name: "نقطة البيع الخاصة بالمركز",
        phones: [{ phone: "12345660" }, { phone: "12345660" }],
        address: "طريق الأمير محمد بن سلمان بن عبدالعزيز- حي الفلاح",
      },
    ],
  },
]);
</script>

<template>
  <div class="sold-points">
    <BaseHeader class="d-flex align-center">
      <v-container>
        <h2 class="text-secondary-500 font-semibold">
          {{ $t("sold_points") }}
        </h2>
      </v-container>
    </BaseHeader>
    <v-container>
      <BaseSoldPointCard :items="soldPiontsItems"></BaseSoldPointCard>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>