<script setup >
import AssetsManager from "~/core/AssetsManager";
const lecture = ref({});
const isClicked = ref(false);
const photoMaterial = ref([
  {
    image: AssetsManager.kingPhoto,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
  {
    image: AssetsManager.kingPhoto,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
  {
    image: AssetsManager.kingPhoto,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
  {
    image: AssetsManager.kingPhoto,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
  {
    image: AssetsManager.kingPhoto,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
  {
    image: AssetsManager.kingPhoto,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
]);

const videos = ref([
  {
    image: AssetsManager.videoImg,
    desc: "الأمير فيصل يبعث الى والده الملك عبدالعزيز بخطاب يتضمن اطلاعه على آخر المستجدات، ويدعو له بالنصر والتمكين.",
    date: "1384 هــ / 1965 م",
  },
  {
    image: AssetsManager.videoImg,
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
            {{ $t("photo_and_material") }}
          </h2>
        </v-container>
      </div>
    </BaseHeader>

    <v-container>
      <div class="photos text-secondary-500 font-semibold">
        <h2 class="my-5 mx-5">{{ $t("photos") }}</h2>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(item, i) in photoMaterial"
            :key="i"
          >
            <v-card
              class="rounded-lg px-2 py-2"
              color="primary-75 "
              variant="outlined"
              max-height="379px"
            >
              <v-img
                :src="item.image"
                width="100%"
                max-height="250px"
                cover
              ></v-img>
              <div
                class="date d-flex align-center text-subtitle-2 text-main-color py-2 text-N100"
              >
                <v-icon size="15">mdi mdi-calendar-range-outline</v-icon>
                <span>21 نوفمبر 2023</span>
              </div>
              <p class="king-desc font-medium text-N100">
                الملك فيصل بن عبد العزيز رحمه الله يفتتح مصنع الأسلحة في الخرج.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <v-divider class="my-5"></v-divider>

      <div class="videos">
        <h2 class="my-5 mx-5 text-secondary-500 font-semibold">
          {{ $t("videos") }}
        </h2>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="(item, i) in videos" :key="i">
            <v-card
              class="rounded-lg px-2 py-2"
              color="primary-75 "
              variant="outlined"
              max-height="379px"
            >
              <v-sheet
                class="plyr__video-embed relative"
                id="player"
                color="transparent"
              >
                <v-img
                  :src="AssetsManager.youtubeIcon"
                  class="youtube-icon-player"
                  width="50px"
                  height="50px"
                ></v-img>
                <iframe
                  src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
                  width="100%"
                  class="rounded-lg"
                ></iframe>
              </v-sheet>
              <div
                class="date d-flex align-center text-subtitle-2 text-main-color py-3 text-N100"
              >
                <v-icon size="15">mdi mdi-calendar-range-outline</v-icon>
                <span>21 نوفمبر 2023</span>
              </div>
              <p class="king-desc font-medium text-N100 mb-5">
                الملك فيصل بن عبد العزيز رحمه الله يفتتح مصنع الأسلحة في الخرج.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-divider class="my-5"></v-divider>

      <div class="sounds-material">
        <h2 class="mx-5 text-secondary-500 font-semibold my-5">
          {{ $t("sounds") }}
        </h2>
        <v-card
          class="rounded-lg px-2 py-2 d-flex align-center"
          color="primary-75 "
          variant="outlined"
          max-height="379px"
        >
          <v-img
            :src="AssetsManager.soundCloudImage"
            max-width="92px"
            max-height="58px"
            cover
          ></v-img>
          <a href="#" class="text-primary-dark font-weight-bold mx-5"
            >شاهد المواد الصوتية على موقع ساوند كلاود</a
          >
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.youtube-icon-player {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>