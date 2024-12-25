<template>
  <v-app>
    <!-- Tabs -->
    <v-tabs v-model="currentTab" align-tabs="center" >
      <v-tab :to="'/classes'" replace>Klassen</v-tab>
      <v-tab :to="'/races'" replace>Völker</v-tab>
    </v-tabs>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router'

export default {
  data() {
    return {
      currentTab: 0,
    }
  },
  watch: {
    $route(to) {
      this.updateTabFromRoute(to)
    },
  },
  mounted() {
    this.updateTabFromRoute(this.$route)
  },
  methods: {
    updateTabFromRoute(route: RouteLocationNormalizedLoadedGeneric) {
      if (route.path === "/") {
        this.$router.push('/classes')
      } else if (route.path === "/classes") {
        this.currentTab = 0
      } else if (route.path === "/races") {
        this.currentTab = 1
      }
    },
  },
}
</script>

<style>
* {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

/* Optional Styling for the Tabs */
.v-tabs {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Adds slight elevation to the tabs */
}
</style>