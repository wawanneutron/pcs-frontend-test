<template>
  <div class="mt-6">
    <h1 class="text-h6 mb-3 font-weight-bold">PCS News</h1>
    <Carousel :items-to-show="1.2" :autoplay="2000" :wrap-around="true">
      <Slide v-for="(item, i) in news" :key="i">
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

<script setup>
import { ref } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { NEWS } from "@/data/general";
import "vue3-carousel/dist/carousel.css";

const news = ref(NEWS);
</script>

<style lang="scss" scoped>
.carousel__item {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0px 0px 7px 0.9px rgba(0, 0, 0, 0.1) !important;
}

::v-deep {
  .carousel__pagination-button {
    width: 14px !important;
    height: 14px !important;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #e0e0e0;

    &::after {
      display: none !important;
    }
  }

  .carousel__pagination-button--active {
    background-color: #d50000;
  }
}
</style>
