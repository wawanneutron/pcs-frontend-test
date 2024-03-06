<template>
  <div class="mt-6">
    <h1 class="text-h6 mb-3 font-weight-bold">PCS News</h1>
    <Carousel :items-to-show="1.2" :autoplay="2000" :wrap-around="true">
      <Slide v-for="slide in 3" :key="slide">
        <v-card flat class="carousel__item pa-4 ma-2">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-avatar class="mr-2">
                <v-img
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                >
                </v-img>
              </v-avatar>
              <div>
                <p class="font-weight-bold text-red">Ana Riswati</p>
              </div>
            </div>

            <div class="text-right">
              <p>Senin</p>
              <p>30 Mei 2022</p>
            </div>
          </div>
          <p class="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia et
            quibusdam culpa. Repellendus, natus, ad in fugit ullam
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
});
</script>

<style lang="scss" scoped>
.carousel__item {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0px 0px 7px 0.9px rgba(0, 0, 0, 0.1) !important;
}
</style>
