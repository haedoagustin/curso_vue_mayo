<template>
  <Base />
</template>

<script>
import { mapActions } from "vuex";
import Base from "./components/layouts/Base.vue";

export default {
  components: {
    Base,
  },

  mounted() {
    this.load_people();
  },

  methods: {
    ...mapActions(["load_people"]),
  },
};
</script>