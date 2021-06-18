<template>
  <v-app>
    <AppBar />

    <!-- Sizes your content based upon application components -->
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <NavigationList />
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-container>
                <transition :name="transitionName">
                  <router-view></router-view>
                </transition>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "./AppBar.vue";
import NavigationList from "./NavigationList.vue";

export default {
  components: {
    AppBar,
    NavigationList,
  },
  data: () => {
    return {
      transitionName: "fade",
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    },
  },
};
</script>

<style>
.slide-right-enter-active .slide-left-enter-active {
  transition: all 1s ease;
}
.slide-right-leave-active .slide-left-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-right-enter, .slide-left-enter, .slide-right-leave-to, .slide-left-leave-to
/* .slide-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>