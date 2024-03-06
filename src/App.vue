<template>
  <v-app class="app-wrap">
    <v-main class="app-wrap__mobile bg-white ma-auto">
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.app-wrap {
  background-color: #f7f7f7;

  &__mobile {
    width: 480px;
    .button-nav {
      position: absolute !important;
    }

    @media (max-width: 600px) {
      max-width: 400px !important;
    }
  }
}
</style>
