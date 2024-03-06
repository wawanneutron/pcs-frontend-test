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

<script>
export default {
  data: () => ({
    notifications: [
      {
        title: "Reimbursement",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisici elit. Ex, illum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, illum.",
        date: "Today",
        read: false,
      },
      {
        title: "Reimbursement",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisici elit. Ex, illum Lorem i.",
        date: "Yesterday",
        read: true,
      },
      {
        title: "Reimbursement",
        desc: "Lorem ipsum dolor sit am tetur, adipisici elit. Ex, illum Lorem ipsum dolor sit amet ",
        date: "2022-10-06",
        read: false,
      },
      {
        title: "Sickness",
        desc: " dolor sit amet consectetur, adipisici elit. Ex, illum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ",
        date: "2022-11-05",
        read: false,
      },
      {
        title: "Sickness",
        desc: " dolor sit amet consectetur, adipisici elit. Ex, illum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ",
        date: "2022-11-05",
        read: true,
      },
      {
        title: "Sickness",
        desc: " dolor sr sit amet consectetur, adipisicing elit. Ex, ",
        date: "2022-11-05",
        read: true,
      },
      {
        title: "Overtime",
        desc: " dolor sit amet consectetur, adipisici elit. Ex, illum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ",
        date: "2022-11-05",
        read: false,
      },
      {
        title: "Overtime",
        desc: " dolor sit amet consectetur, adipisici elit. Ex, illum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ",
        date: "2022-11-05",
        read: true,
      },
      {
        title: "Overtime",
        desc: " dolor sit amet consectetur, adipisici elit. Ex, illum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ",
        date: "2022-11-05",
        read: true,
      },
    ],
  }),
};
</script>

<style lang="scss">
.header {
  box-shadow: 0px 2px 4px -2px rgba(24, 39, 75, 0.12),
    0px 4px 4px -2px rgba(24, 39, 75, 0.08) !important;
}
</style>
