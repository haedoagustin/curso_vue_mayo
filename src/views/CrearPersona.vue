<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="person.firstname"
            :rules="nameRules"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="person.lastname"
            :rules="lastnameRules"
            label="Apellido"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="person.age"
            :rules="ageRules"
            label="Edad"
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-btn color="success" class="mr-4" @click="store_people(person)">
            Guardar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CrearPersona",

  data: () => ({
    valid: false,
    person: {
      firstname: "",
      lastname: "",
      age: "",
    },
    nameRules: [
      (v) => !!v || "El nombre es obligatorio",
      (v) => v.length >= 2 || "El nombre debe tener al menos 2 caracteres",
    ],
    lastnameRules: [
      (v) => !!v || "El apellido es obligatorio",
      (v) => v.length >= 2 || "El apellido debe tener al menos 2 caracteres",
    ],
    ageRules: [
      (v) => !!v || "La edad es obligatoria",
      (v) => (v >= 0 && v <= 200) || "La edad debe ser un número entre 0 y 200",
    ],
  }),

  methods: {
    ...mapActions(["store_people"]),
  },
};
</script>
