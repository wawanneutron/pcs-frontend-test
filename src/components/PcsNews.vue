<template>
  <div class="mt-6">
    <h1 class="text-h6 mb-3 font-weight-bold">PCS News</h1>
    <Carousel :items-to-show="1.2" :autoplay="2000" :wrap-around="true">
      <Slide v-for="(item, i) in users" :key="i">
        <v-card height="180" flat class="carousel__item pa-4 ma-2">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-avatar class="mr-2">
                <v-img :src="`https://avatar.iran.liara.run/public/${i}`">
                </v-img>
              </v-avatar>
              <div>
                <p class="font-weight-bold text-red">{{ item.name }}</p>
              </div>
            </div>

            <div class="text-right">
              <p>Senin</p>
              <p>2{{ i }} Mei 2022</p>
            </div>
          </div>
          <p class="text-justify">
            {{ item.desc }}
          </p>
        </v-card>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Pagination,
  },

  data: () => ({
    users: [
      {
        name: "Ade",
        desc: "Lorem  dolor sit, amet consectetur adipisicing elit. Officia etquibusdam culpa. Repellendus, natus, ad in fugit ullam",
      },
      {
        name: "Bayu",
        desc: "architecto fugiat perspiciatis sunt accusamus suscipit! Iste est tenetur earum corrupti quidem! Cupiditate delectus labor",
      },
      {
        name: "Ical",
        desc: "Officia  culpa. Repellendus, natus, ad in fugit ullam",
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.carousel__item {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0px 0px 7px 0.9px rgba(0, 0, 0, 0.1) !important;
}
</style>
