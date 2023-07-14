<script setup>
import Profiles from "src/composables/Profiles";
import { computed, ref } from "vue";

const { profiles } = Profiles()
const profile = ref(null);

const hours_worked = ref(40);

const question_1 = ref({
  label: 'I feel run down and drained of physical or emotional energy and often have negative thoughts about my job.',
  value: 0
});
const question_2 = ref({
  label: 'I feel that I am in the wrong organization or profession as I am achieving less than I should.',
  value: 0
});
const question_3 = ref({
  label: 'I feel that there is more work to do than I practically have the ability to do.',
  value: 0
});
const question_4 = ref({
  label: 'I find that I do not have time to do or plan many of the things that are important to doing a good quality job.',
  value: 0
});
const question_5 = ref({
  label: 'I am easily irritated by small problems and less sympathetic with my patience and co-workers than they deserve.',
  value: 0
});

const assessment_score = computed(() => {
  return question_1.value.value + question_2.value.value + question_3.value.value + question_4.value.value + question_5.value.value;
})

const submit = () => {
  profile.value.wellness_assessments.push({
    date: new Date().toISOString().substring(0, 10),
    hours_worked: hours_worked.value,
    assessment_score: assessment_score.value,
    question_1: question_1.value.value,
    question_2: question_2.value.value,
    question_3: question_3.value.value,
    question_4: question_4.value.value,
    question_5: question_5.value.value,
  })
  hours_worked.value = 40;
  profile.value = null;
  question_1.value.value = question_2.value.value = question_3.value.value = question_4.value.value = question_5.value.value = 0;
}
</script>

<template>
  <div class="row justify-center">
    <div class="col-12 col-md-6">
      <q-card>
        <q-card-section>
          <div class="text-bold">Wellness Survey</div>
          <q-select v-model="profile" :options="profiles" option-label="full_name" label="Select Employee"></q-select>
        </q-card-section>

        <div v-if="profile">
          <q-card-section>
            <q-input v-model="hours_worked" type="number" label="How many hours did you work this week?"></q-input>
          </q-card-section>
          <q-card-section>

            <div class="bg-primary text-white row justify-between q-pa-md text-bold">
              <div>0 - Never</div>
              <div>1 - Rarely</div>
              <div>2 - Sometimes</div>
              <div>3 - Often</div>
              <div>4 - Very Often</div>
            </div>

            <div class="text-subtitle1">{{ question_1.label }}</div>
            <div class="q-pa-md">
              <q-slider v-model="question_1.value" snap :step="1" :min="0" :max="4" marker-labels></q-slider>
            </div>
            <div class="text-subtitle1">{{ question_2.label }}</div>
            <div class="q-pa-md">
              <q-slider v-model="question_2.value" snap :step="1" :min="0" :max="4" marker-labels></q-slider>
            </div>
            <div class="text-subtitle1">{{ question_3.label }}</div>
            <div class="q-pa-md">
              <q-slider v-model="question_3.value" snap :step="1" :min="0" :max="4" marker-labels></q-slider>
            </div>
            <div class="text-subtitle1">{{ question_4.label }}</div>
            <div class="q-pa-md">
              <q-slider v-model="question_4.value" snap :step="1" :min="0" :max="4" marker-labels></q-slider>
            </div>
            <div class="text-subtitle1">{{ question_5.label }}</div>
            <div class="q-pa-md">
              <q-slider v-model="question_5.value" snap :step="1" :min="0" :max="4" marker-labels></q-slider>
            </div>

            <div class="row">
              <q-space></q-space>
              <div class="text-bold text-subtitle1">Total Score: {{ assessment_score }}</div>
            </div>
          </q-card-section>

          <q-card-actions>
            <q-space></q-space>
            <q-btn label="Submit" color="primary" @click="submit"></q-btn>
          </q-card-actions>
        </div>
      </q-card>
    </div>
  </div>
</template>

<style scoped>

</style>