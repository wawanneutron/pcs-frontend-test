<template>
  <div class="card-btn-nav py-5 px-3 d-flex justify-space-between ma-auto">
    <router-link
      v-for="(item, i) of menus"
      :key="i"
      :to="{ path: item.route }"
      class="text-decoration-none text-grey d-flex flex-column justify-end cursor-pointer"
    >
      <template v-if="!item.float">
        <div
          class="d-flex flex-column align-center cursor-pointer"
          :class="item.name === 'Home' ? 'text-red' : 'black'"
        >
          <v-icon>{{ item.icon }}</v-icon>

          <span class="text-body-2">{{ item.name }}</span>
        </div>
      </template>

      <template v-if="item.float">
        <div class="d-flex flex-column justify-end cursor-pointer">
          <div class="float-button">
            <v-icon size="36" class="ma-auto">{{ item.icon }}</v-icon>
          </div>
          <span class="text-body-2">{{ item.name }} </span>
        </div>
      </template>
    </router-link>
  </div>
</template>

<script>
import { MENUS } from "@/data/general";
export default {
  data: () => ({
    menus: MENUS,
  }),
};
</script>

<style lang="scss" scoped>
.card-btn-nav {
  margin-top: 100px !important;
  width: 480px;
  box-shadow: 0px -14px 15px -3px rgba(0, 0, 0, 0.1);

  position: relative;

  .float-button {
    display: flex;
    width: 80px;
    height: 80px;
    background-color: red;
    color: white;
    border-radius: 50%;

    position: absolute;
    top: -50%;
    right: 38%;
    z-index: 99999;
  }

  @media (max-width: 600px) {
    max-width: 400px !important;
  }
}

::v-deep {
  .v-card__underlay {
    display: none !important;
  }
}
</style>
