<template>
  <div class="card-btn-nav py-5 px-3 d-flex justify-space-between ma-auto">
    <router-link :to="{ name: 'home' }" class="text-decoration-none">
      <div class="d-flex flex-column align-center cursor-pointer">
        <v-icon color="red">mdi-home</v-icon>

        <span class="text-red">Home</span>
      </div>
    </router-link>

    <router-link :to="{ name: 'notifications' }" class="text-decoration-none">
      <div class="d-flex flex-column align-center cursor-pointer">
        <v-icon color="black">mdi-calendar-check</v-icon>

        <span class="text-black">Attendence</span>
      </div>
    </router-link>

    <div class="d-flex flex-column justify-end cursor-pointer">
      <div class="float-button">
        <v-icon size="36" class="ma-auto">mdi-logout</v-icon>
      </div>
      <span>Check Out</span>
    </div>

    <div class="d-flex flex-column align-center cursor-pointer">
      <v-icon>mdi-list-box</v-icon>

      <span>Form</span>
    </div>

    <div class="d-flex flex-column align-center cursor-pointer">
      <v-icon>mdi-cog</v-icon>

      <span>Setting</span>
    </div>
  </div>
</template>

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
