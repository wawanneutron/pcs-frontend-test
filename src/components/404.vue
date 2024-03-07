<template>
  <section
    class="notfound d-flex justify-center align-center flex-column py-12"
  >
    <h1 class="text-black text-h1 font-weight-bold">404</h1>
    <p class="text-red text-h4 font-weight-bold">Page not found</p>

    <v-btn
      to="/"
      variant="outlined"
      float
      rounded="50"
      size="large"
      class="text-capitalize mt-8"
    >
      <v-icon class="mr-2">mdi-arrow-left</v-icon> Back to home
    </v-btn>
  </section>
</template>

<style lang="scss" scoped>
.notfound {
  height: 100%;
}
</style>
