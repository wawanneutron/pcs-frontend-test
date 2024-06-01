<template>
  <div>
    <div class="d-flex align-center py-6 px-4 header">
      <router-link :to="{ name: 'home' }">
        <v-btn flat rounded size="50">
          <v-icon color="black"> mdi-arrow-left </v-icon>
        </v-btn>
      </router-link>
      <h2 class="text-red font-weight-bold ml-2">Notification</h2>
    </div>

    <v-card
      v-for="(item, i) of notifications"
      :key="i"
      flat
      rounded="0"
      class="d-flex px-6 py-4"
      :class="!item.read && 'bg-blue'"
    >
      <v-avatar size="62" class="mr-4">
        <v-img :src="`https://avatar.iran.liara.run/public/${i}`"> </v-img>
      </v-avatar>
      <div>
        <div class="d-flex justify-space-between align-center">
          <p class="font-weight-bold">{{ item.title }}</p>
          <p>{{ item.date }}</p>
        </div>
        <p>
          {{ item.desc }}
        </p>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NOTIFICATIONS } from "@/data/general";

const notifications = ref(NOTIFICATIONS);
</script>

<style lang="scss">
.header {
  box-shadow: 0px 2px 4px -2px rgba(24, 39, 75, 0.12),
    0px 4px 4px -2px rgba(24, 39, 75, 0.08) !important;
}
</style>
