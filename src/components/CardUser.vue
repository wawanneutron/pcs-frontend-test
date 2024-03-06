<template>
  <v-card flat class="pa-2 card_user pa-6 text-white">
    <div class="d-flex justify-space-between align-center">
      <div class="d-flex">
        <v-avatar size="62" class="mr-4">
          <v-img
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          >
          </v-img>
        </v-avatar>
        <div>
          <p class="text-h6 font-weight-bold">Taby</p>
          <p class="font-italic">UI/UX Designer</p>
        </div>
      </div>

      <div>
        <p class="font-italic">Member since</p>
        <p class="text-h6 font-weight-bold">01 Juni 2021</p>
      </div>
    </div>

    <div class="d-flex justify-space-between align-center mt-6">
      <div>
        <p>Location</p>
        <p class="text-h6 font-weight-bold">Kantor Sahid</p>
      </div>
      <div>
        <p class="font-italic">ICO</p>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.card_user {
  background: linear-gradient(
    141deg,
    rgba(255, 22, 22, 1) 0%,
    rgba(222, 0, 74, 1) 52%,
    rgba(171, 0, 94, 1) 100%
  );

  border-radius: 18px;
}
</style>
