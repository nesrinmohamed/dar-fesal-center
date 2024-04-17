<script setup >
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
import { useRouter } from "vue-router";
// ==========DEFINES===========
const loading = ref(false);
const loaded = ref(false);
const search = ref("");
const bookLang = ref("arabicBook");
const router = useRouter();

// ============LISTS ============
const bookCards = ref([
  {
    id: 1,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 2,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 3,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 4,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 5,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 6,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 7,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 8,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
  {
    id: 9,
    image: AssetsManager.cardImage,
    name: "العلوم الإسلامية وقيام النهضة الأوروبية (مترجم)",
    auther: "المؤلف: د. جورج صليبا - ٢٠٢٣",
  },
]);
// ==========ACTIONS===========
const changeBookLang = (bookType) => {
  bookLang.value = bookType;
};
const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};
</script>

<template>
  <div class="book-store-component" :class="$vuetify.display.name">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <v-row>
            <v-col cols="12" sm="7">
              <h2 class="text-secondary-500">
                {{ $t("book_store") }}
              </h2>
            </v-col>
            <v-col cols="12" sm="5">
              <v-text-field
                class="search-input"
                :label="$t('search')"
                variant="outlined"
                elevation="0"
                rounded="lg"
                bg-color="#ffff"
                v-model="search"
                @click:append-inner="onClick"
                prepend-inner-icon="mdi-magnify"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </BaseHeader>

    <v-sheet
      color="transparent"
      class="buttons-container d-flex align-center justify-space-between my-5 border-1px-solid"
    >
      <div>
        <button
          class="book-lang"
          :class="{ active: bookLang === 'arabicBook' }"
          @click="changeBookLang('arabicBook')"
        >
          {{ $t("arabic_book") }}
        </button>
        <button
          class="book-lang mt-2"
          :class="{ active: bookLang === 'englishBook' }"
          @click="changeBookLang('englishBook')"
        >
          {{ $t("english_book") }}
        </button>
      </div>
      <div class="sold-points">
        <NuxtLink
          class="book-lang d-flex align-center justify-center text-secondary-300 text-subtitle-2 mt-2"
          :to="localePath(RoutesManager.soldPoints)"
        >
          <div>
            <v-img
              :src="AssetsManager.shopIcon"
              width="20"
              height="20"
              contain
              class="mx-2"
            ></v-img>
          </div>
          <span> {{ $t("center_sold_points") }}</span>
        </NuxtLink>
      </div>
    </v-sheet>
    <v-divider width="80%" class="mx-auto"></v-divider>

    <!-- ==============BOOKS CARD============== -->
    <div v-if="bookLang === 'arabicBook'">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(item, i) in bookCards"
            :key="i"
          >
            <BaseCard :item="item"></BaseCard
          ></v-col>
        </v-row>
      </v-container>
    </div>
    <div v-else-if="bookLang === 'englishBook'">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(item, i) in bookCards"
            :key="i"
          >
            <BaseCard :item="item"></BaseCard
          ></v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.book-store-component {
  .book-lang {
    width: 227px;
    height: 51px;
    background: #e6f3f0;
    border-radius: 5px;
    margin: 0 10px;
    color: $secondary-500;
    transition: all 300ms ease-in-out;

    &.active {
      background: $primary-dark;
      color: #fff;
    }
  }
  .buttons-container {
    width: 80%;
    margin: auto;
  }
  &.sm {
    .buttons-container {
      .v-btn {
        max-width: 180px;
      }
    }
  }
  &.xs {
    .buttons-container {
      display: flex;
      flex-wrap: wrap;

      .sold-points {
        min-width: 100%;
        margin: 0;
      }
    }
    .book-search {
      padding: 10px 0;
    }
  }
}
</style>