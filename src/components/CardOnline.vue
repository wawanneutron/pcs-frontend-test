<template>
  <div class="mt-6">
    <h1 class="text-h6 mb-3 font-weight-bold">Online</h1>
    <v-card flat class="px-6 py-4 card-user">
      <div class="delivered-imgs">
        <div
          v-for="(item, i) of users"
          :key="i"
          class="d-flex flex-column justify-center text-center"
        >
          <img :src="`https://avatar.iran.liara.run/public/${i}`" />
          <p class="text-caption">{{ item.name }}</p>
          <p class="text-caption">{{ item.location }}</p>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import { USERS } from "@/data/general";
export default {
  data: () => ({
    users: USERS,
  }),
};
</script>

<style lang="scss" scoped>
.card-user {
  box-shadow: 0px 0px 7px 0.9px rgba(0, 0, 0, 0.1) !important;
  border-radius: 18px;
}
.delivered-imgs {
  display: flex;
}

.delivered-imgs img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: -9px;
  border: 3px solid #fdf2e9;
}
</style>
