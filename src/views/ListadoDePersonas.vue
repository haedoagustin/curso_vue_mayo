<template>
  <v-btn block color="primary" @click="mostrar_personas"> Console.log personas desde localstorage </v-btn>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CrearPersona",

  computed: {
    ...mapState(["people"]),
  },


  methods: {

    mostrar_personas() {
      console.log(this.people)
    },

  },
};
</script>
