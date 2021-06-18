<template>
  <v-card max-width="450" class="mx-auto">
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Listado de APIs</v-toolbar-title>
    </v-toolbar>

    <v-skeleton-loader
      v-if="loading"
      class="mx-auto"
      type="list-item-three-line"
    ></v-skeleton-loader>

    <v-list three-line v-else>
      <v-list-item v-for="(item, index) in api_list" :key="index">

        <v-list-item-avatar>
          <v-img
            :src="item.image"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ item.description }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ item.baseUrl }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-chip
              v-for="(tag, index) in item.tags"
              :key="index"
              class="ma-2"
              color="teal"
              text-color="white"
              small
            >
              {{ tag }}
            </v-chip>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ListadoDeApis",

  computed: {
    ...mapState(["api_list", "loading"]),
  },

  methods: {
    ...mapActions(["load_api_list"]),
  },

  mounted() {
    this.load_api_list()
  },
};
</script>