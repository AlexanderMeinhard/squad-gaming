<template>
  <v-container class="fill-height">
    <div>
      <!-- Question -->
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h1>{{ question }}</h1>
        </v-col>
      </v-row>

      <!-- Answers -->
      <v-row justify="center">
        <v-col v-for="(answer, index) in answers" :key="answer"  cols="12" sm="6" md="4">
          <ClickableCard :id="'btn-' + index" :text="answer" @onclick="onCardClick('btn-' + index)" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "ClassSelection",
  data() {
    return {
      question: "Frage?",
      answers: [
        "Hey ich bin ein toller multiline 1 button mit Antowrkjhjkjal as ldhjlkwj",
        "Hey ich bin ein toller multiline 2 button mit Antowrkjhjkjal as ldhjlkwj",
        "Hey ich bin ein toller multiline 3 button mit Antowrkjhjkjal as ldhjlkwj",
      ]
    }
  },
  methods: {
    onCardClick(name: string) {
      console.log(name)
    },
  },
};
</script>