<script setup>
import WellnessAssessments from "src/composables/WellnessAssessments";
import { computed, onMounted, ref } from "vue";
import { Chart } from "chart.js/auto";
import Profiles from "src/composables/Profiles";

const { wellness_assessments } = WellnessAssessments();
const { profiles } = Profiles();
const selected_profile = ref(null);
const filtered_wellness_assessments = computed(() => {
  if (selected_profile.value) {
    const result = wellness_assessments.value.filter(x => x.profile_id === selected_profile.value.profile_id);
    return result;
  }
})

const random_id = Math.floor(Math.random() * 1024).toString()

const generate_chart = () => {
  let ctx = document.getElementById(random_id);
  const config = {
    data: {
      labels: filtered_wellness_assessments.value.map(x => x.date),
      datasets: [
        {
          type: 'bar',
          label: 'Hours worked',
          data: filtered_wellness_assessments.value.map(x => x.hours_worked),
          yAxisID: 'hours_worked'
        },
        {
          type: 'line',
          label: 'Assessment Score',
          data: filtered_wellness_assessments.value.map(x => x.assessment_score),
          yAxisID: 'assessment_score'
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Entry Date'
          }
        },
        hours_worked: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Total Hours Worked'
          }
        },
        assessment_score: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Assessment Score'
          }
        }
      }
    }
  }
  new Chart(ctx, config)
}


</script>

<template>
  <div class="row justify-center">
    <div class="col-12 col-md-6">
      <q-card flat>
        <q-card-section>
          <div class="text-bold text-h5">Wellness Reports</div>
          <q-select v-model="selected_profile" :options="profiles" option-label="full_name" label="Select Profile"
                    class="q-my-md" @update:model-value="generate_chart"></q-select>
        </q-card-section>
        <q-card-section>
          <canvas :id="random_id"></canvas>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped>

</style>