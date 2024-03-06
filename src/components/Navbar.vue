<template>
  <div class="d-flex justify-space-between align-center pa-6">
    <h1 class="text-red">KerjaYuk</h1>
    <router-link :to="{ name: 'notifications' }">
      <v-btn flat rounded size="50">
        <v-icon class="cursor-pointer"> mdi-bell </v-icon>
      </v-btn>
    </router-link>
  </div>
</template>
