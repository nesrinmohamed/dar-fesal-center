<script setup >
import AssetsManager from "~/core/AssetsManager";
</script>

<template>
  <div class="elm3ared">
    <BaseHeader>
      <div class="d-flex align-center justify-center book-search pt-10">
        <v-container>
          <h2 class="text-secondary-500 font-semibold">
            {{ $t("exhibitions_events") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <!-- CURRENT EXHIBTIONS AND EVENT  -->
      <div class="current-exhibtions_event">
        <h2 class="text-secondary-500 font-semibold my-5">
          {{ $t("current_exhibitions_events") }}
        </h2>
        <v-row>
          <v-col cols="12" md="6" v-for="i in 4" :key="i">
            <v-card variant="outlined" color="transparent">
              <v-img
                :src="AssetsManager.exhibtionsAndEvent"
                width="100%"
                max-height="239px"
                contain
              ></v-img>
              <h5 class="text-N75 my-5 line-height line-2 text-subtitle">
                معرض :
                <span class="text-decoration-underline"
                  >أسفار: كنوز مركز الملك فيصل للبحوث والدراسات الإسلامي</span
                >
                (٢٧ رجب ١٤٤٣هـ – ) / (٢٨ فبراير ٢٠٢٢م –)
              </h5>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </div>
      <!-- RECENT EXHIBTIONS AND EVENTS  -->
      <div class="recent-exhibtions_event">
        <h2 class="text-secondary-500 font-semibold my-5">
          {{ $t("recent_exhibitions_events") }}
        </h2>
        <v-row>
          <v-col cols="12" md="6" v-for="i in 4" :key="i">
            <v-card variant="outlined" color="transparent">
              <v-img
                :src="AssetsManager.exhibtionsAndEvent"
                width="100%"
                max-height="239px"
                contain
              ></v-img>
              <h5 class="text-N75 my-5 line-height line-2 text-subtitle">
                معرض :
                <span class="text-decoration-underline"
                  >أسفار: كنوز مركز الملك فيصل للبحوث والدراسات الإسلامي</span
                >
                (٢٧ رجب ١٤٤٣هـ – ) / (٢٨ فبراير ٢٠٢٢م –)
              </h5>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </div>

      <!-- LAST EXHIBTIONS AND EVENTS  -->
      <div class="last-exhibtions_event">
        <h2 class="text-secondary-500 font-semibold my-5">
          {{ $t("last_exhibitions_events") }}
        </h2>
        <v-row>
          <v-col cols="12" md="6" v-for="i in 4" :key="i">
            <v-card variant="outlined" color="transparent">
              <v-img
                :src="AssetsManager.exhibtionsAndEvent"
                width="100%"
                max-height="239px"
                contain
              ></v-img>
              <h5 class="text-N75 my-5 line-height line-2 text-subtitle">
                معرض :
                <span class="text-decoration-underline"
                  >أسفار: كنوز مركز الملك فيصل للبحوث والدراسات الإسلامي</span
                >
                (٢٧ رجب ١٤٤٣هـ – ) / (٢٨ فبراير ٢٠٢٢م –)
              </h5>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
</style>