<template>
  <v-container class="fill-height d-flex flex-column align-center justify-center" fluid>
    <div>
      <!-- Question -->
      <v-row justify="center">
        <v-col v-if="question" cols="12" class="text-center">
          <h1>{{ question.text }}</h1>
        </v-col>
        <v-col v-else-if="result" cols="12" class="text-center">
          <v-card elevation="3" class="pa-2">
            <v-img id="class-img" :src="imageSrc" alt="Sample Image" :width="250" aspect-ratio="9/16"></v-img>
            <v-card-title class="text-center">{{ result.text }}</v-card-title>
            <v-btn>
              <a :href="'whatsapp://send?text=Meine Klasse ist: ' + result.text + '!!'" data-action="share/whatsapp/share">Teile per Whatsapp</a>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- Answers -->
      <v-row justify="center">
        <v-col v-for="(answer, index) in answers" cols="12" sm="6" md="4">
          <ClickableCard :id="'btn-' + index" :text="answer.text" @onclick="onCardClick(answer)" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Survey from './models/Survey';
import Question from './models/Question';
import Answer from './models/Answer';
import Result from './models/Result';

export default {
  name: "ClassSelection",
  data() {
    return {
      survey: null as Survey | null,
      question: null as Question | null,
      result: null as Result | null,
      answers: new Array<Answer>()
    }
  },
  mounted() {
    this.loadXMlFile()
  },
  computed: {
    imageSrc() {
      return this.result?.image ? new URL(`../assets/classes/${this.result?.image}`, import.meta.url).href : "";
    },
  },
  methods: {
    onCardClick(answer: Answer) {
      this.navigateToQuestion(answer?.link)
    },
    loadXMlFile() {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "/src/assets/class-survey.xml");
      xhttp.responseType = "document";
      xhttp.overrideMimeType("text/xml");
      xhttp.onload = () => {
        if (xhttp.readyState === xhttp.DONE && xhttp.status === 200) {
          const xmlDocument = xhttp.responseXML
          const xmlSurvey = xmlDocument?.querySelector("survey") ?? null
          this.survey = new Survey(xmlSurvey)

          if (this.survey.init) {
            this.navigateToQuestion(this.survey.init)
          }
        }
      }
      xhttp.send();
    },
    navigateToQuestion(id: string | null) {
      if (id == null || this.survey == null) return

      const question = this.survey.questions.find(q => q.id == id)
      const result = this.survey.results.find(r => r.id == id)
      if (question) {
        this.question = question
        this.answers = question.answers
      }
      else if (result) {
        this.question = null
        this.answers = []
        this.result = result
      }
    },
  },
}
</script>