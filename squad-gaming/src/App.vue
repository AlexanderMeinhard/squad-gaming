<template>
  <v-app>
    <v-main>
      <!-- Tabs -->
      <v-tabs v-model="currentTab" align-tabs="center">
        <v-tab value="class-selection">Klassen</v-tab>
        <v-tab value="race-selection">Völker</v-tab>
      </v-tabs>

      <!-- Dynamic Component Rendering -->
      <component :is="currentTab" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { ref } from 'vue'
import ClassSelection from './components/ClassSelection.vue'
import RaceSelection from './components/RaceSelection.vue'

export default {
  components: {
    'class-selection': ClassSelection,
    'race-selection': RaceSelection,
  },
  data() {
    return {
      currentTab: 0,
    }
  },
  setup() {
    const currentTab = ref('class-selection')
    return { currentTab }
  },
}
</script>

<style>
* {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.v-tabs {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>