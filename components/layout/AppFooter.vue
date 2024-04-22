<script setup >
import { ref } from "vue";
import AssetsManager from "~/core/AssetsManager";
import { useDisplay } from "vuetify";
import { useSharedStore } from "~/stores/sharedStore";

const display = useDisplay();
const sharedStore = useSharedStore();
const { t } = useI18n();
const localePath = useLocalePath();

const email = ref("");
// ========[COMPUTED]=====
</script>

<template>
  <footer
    class="app-footer text-white px-8 pt-15 pb-5 mt-10"
    :class="$vuetify.display.name"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="4"
          md="2"
          lg="2"
          v-for="(FooterLink, i) in sharedStore.footerLinks"
          :key="i"
        >
          <h3 class="text-h6 font-semibold mx-2">
            {{ $t(FooterLink.title) }}
          </h3>

          <v-list bg-color="transparent">
            <v-list-item
              v-for="(item, i) in FooterLink.links"
              :key="i + 'l-k'"
              class="text-subtitle-2 mt-n2"
            >
              <NuxtLink :to="item.path">
                {{ item.name }}
              </NuxtLink>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="">
          <h3 class="text-h5 line-2 subscribe-title">
            {{ $t("Subscribe_to_our_news_now") }}
          </h3>

          <v-sheet
            color="transparent"
            class="subscribe-email d-flex align-center relative my-10"
          >
            <v-text-field
              class="email-input"
              :label="$t('email')"
              variant="outlined"
              elevation="0"
              rounded="lg"
              bg-color="#ffff"
              v-model="email"
            ></v-text-field>
            <v-btn
              width="87px"
              height="57px"
              color="primary-300"
              class="subscribe-btn elevation-0"
              elevation="0"
              >سجل</v-btn
            >
          </v-sheet>

          <!-- ============[SOCIAL LINKS ]============= -->

          <v-sheet
            color="transparent"
            class="social-links d-flex align-center justify-center mx-auto"
            dir="ltr"
            width="100%"
          >
            <v-sheet
              v-for="(socialLink, i) in sharedStore.socialLinks"
              :key="i + 's-l'"
              color="transparent"
              class="social-link d-flex align-center justify-center mx-2"
              width="78px"
              height="50"
            >
              <NuxtLink :to="socialLink.path" class="d-flex">
                <v-img
                  :src="socialLink.img"
                  width="40"
                  height="40"
                  contain
                ></v-img>
              </NuxtLink>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
      <v-divider class="my-5"></v-divider>

      <div class="d-flex align-center justify-space-between flex-wrap">
        <img :src="AssetsManager.elryadLogo" contain />
        <span class="text-primary text-subtitle-1"> {{ $t("copyRight") }}</span>
      </div>
    </v-container>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  width: 100%;
  // min-height: 300px;
  background: url("~/assets/img/footer_bg 2.png") no-repeat center center;
  background-size: 100% 100%;

  .subscribe-title {
    letter-spacing: 1px;
  }

  // .v-field.v-field--center-affix.v-field--has-background.v-field--variant-outlined.v-theme--light.rounded-lg.v-locale--is-rtl {
  //   height: 45px;
  // }
  .subscribe-btn {
    position: absolute;
    position: absolute;
    left: -62px;
    top: 0px;
  }

  .social-links {
    .social-link {
      transition: $ownTransition;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  // .v-field.v-field--center-affix.v-field--has-background.v-field--variant-outlined {
  //   height: 45px !important;
  // }
}
</style>