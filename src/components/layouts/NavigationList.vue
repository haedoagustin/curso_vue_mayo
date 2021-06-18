<template>
  <v-list shaped color="transparent">
    <v-list-item v-for="(item, i) in items" :key="i" link :to="item.path">
      <v-list-item-content>
        <v-list-item-title> {{ item.title }} </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <!-- <v-divider class="my-2"></v-divider>

    <v-list-item link color="grey lighten-4">
      <v-list-item-content>
        <v-list-item-title> Refresh </v-list-item-title>
      </v-list-item-content>
    </v-list-item> -->
  </v-list>
</template>

<script>
export default {
  created() {
    this.$router.options.routes.forEach((route) => {
      this.items.push({
        title: route.name,
        path: route.path,
        icon: "mdi-view-dashboard",
      });
    });
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>