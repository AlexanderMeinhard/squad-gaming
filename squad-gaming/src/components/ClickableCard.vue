<template>
  <v-card class="clickable-card" @click="handleCardClick" elevation="3">
    <v-card-text class="text-center">{{ text }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "ClickableCard",
  props: {
    text: String,
  },
  methods: {
    handleCardClick() {
      this.$emit('onclick')
    },
  },
}
</script>

<style scoped>
.clickable-card {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.clickable-card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
