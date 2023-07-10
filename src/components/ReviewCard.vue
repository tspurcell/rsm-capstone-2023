<template>

  <q-card flat>
    <q-card-section>
      <div class="row items-center q-gutter-md">
        <q-rating color="primary" :icon="icons" :model-value="rating" size="sm"></q-rating>
        <div class="text-bold">{{ headline }}</div>
      </div>
      <div class="text-caption">Submitted on {{ date.toLocaleString() }}</div>
      <div class="text-red-10 text-bold">Verified Intern</div>
      <div>{{ review_text }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ReviewCard",
  props: {
    rating: Number,
    headline: String,
    date: String,
    review_text: String
  },
  setup() {
    return {
      icons: [
        'sentiment_very_dissatisfied',
        'sentiment_dissatisfied',
        'sentiment_neutral',
        'sentiment_satisfied',
        'sentiment_very_satisfied'
      ]
    }
  }
}
</script>

<style scoped>

</style>