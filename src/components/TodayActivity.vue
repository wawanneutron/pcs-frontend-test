<template>
  <div class="mt-6">
    <h1 class="text-h6 font-weight-bold">Today's activity</h1>
    <div class="d-flex justify-space-between pa-6">
      <div class="d-flex flex-column align-center">
        <v-icon color="red" size="42"> mdi-clock </v-icon>
        <p class="font-weight-bold">08:30</p>
        <p class="text-subtitle-2">Check In</p>
      </div>

      <div class="d-flex flex-column align-center">
        <v-icon color="red" size="42"> mdi-reload </v-icon>
        <p class="font-weight-bold text-red">03:00:00</p>
        <p class="text-subtitle-2">Working Hours</p>
      </div>

      <div class="d-flex flex-column align-center">
        <v-icon color="red" size="42"> mdi-clock-time-six </v-icon>
        <p class="font-weight-bold">--:--</p>
        <p class="text-subtitle-2">Check Out</p>
      </div>
    </div>
  </div>
</template>
