<template>
  <app-layout-default id="personal-information">
    <div class="question">
      <div class="question-header">
        <span class="question-number">{{ currentQuestion+1 }}</span>
        <span class="question-title">{{ currentQuestionDetails.title }}</span>
          <span class="question-subtitle pt-2">{{ currentQuestionDetails.subtitle }}</span>
      </div>

      <div class="my-5">
        <div class="flex flex-col">
          <div v-for="(answer, answerIndex) in currentQuestionDetails.answers" :key="`question-${currentQuestion}-option-${answerIndex}`"
              class="flex w-full my-2 p-3 rounded-lg border"
              :class="{'bg-teal-500 text-white': answer.is_selected, 'bg-white text-teal-600' : !answer.is_selected}"
              @click="select(answerIndex)">
            <img class="opacity-50 block min-h-full ml-4 float-right" :src="require(`@/Assets/questions/${answer.icon}`)" :style="optionImageStyle(answer.is_selected)" width="48px">
            <span class="block mt-2">
              <span class="text-right font-bold font-nahdi-bold block"
                    :class="{'text-white': answer.is_selected, 'text-green-700': !answer.is_selected}">{{ answer.title }}</span>
              <span class="text-right font-bold block"
                    :class="{'text-white': answer.is_selected, 'text-gray-600': !answer.is_selected}">{{ answer.subtitle }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <template v-slot:footer>
      <div class="flex justify-between">
        <div class="text-gray-500 text-right text-xl pt-5">
          <app-stepper :steps="questions.length" :step="currentQuestion"/>
        </div>
        <button @click="next" class="btn-next">{{ nextButtonText }}</button>
      </div>
    </template>
  </app-layout-default>
</template>

<script>
import questions from '@/Data/Questions.json';
import AppLayoutDefault from '@/Layouts/Default/Index.vue';
import AppStepper from '@/Components/Stepper.vue';

export default {
  name: 'Questions',
  components: {
    AppLayoutDefault,
    AppStepper,
  },
  mounted () {
    if (this.$store.getters['invalidUrl']) {
      this.$router.push({ name: 'personal-information' })
    }
  },
  data () {
    return {
      questions: questions.map(question => {
        return {
          ...question,
          answers: question.answers.map(answers => {
            return {
              ...answers,
              is_selected: false,
            }
          })
        }
      }),
    }
  },
  computed: {
    currentQuestion () {
      return parseInt(this.$route.params.index);
    },
    isLastQuestion () {
      return this.questions.length === this.currentQuestion
    },
    nextButtonText () {
      return this.isLastQuestion
        ? 'النتيجة'
        : 'السؤال التالي'
    },
    currentQuestionDetails () {
      return this.questions[this.currentQuestion-1]
    },
  },
  methods: {
    optionImageStyle (isSelected) {
      return isSelected
        ? { filter: 'brightness(0) invert(1)' }
        : {}
    },
    select (index) {
      this.$set(
        this.currentQuestionDetails.answers[index],
        'is_selected',
        !this.currentQuestionDetails.answers[index].is_selected
      )
    },
    next () {
      this.$store.commit('ADD_QUESTION', this.currentQuestionDetails)
      if (this.isLastQuestion) {
        this.$router.push({ name: 'final' })
      } else {
        this.$router.push({ name: 'questions', params: { index: this.currentQuestion+1 } })
      }
    },
  }
}
</script>