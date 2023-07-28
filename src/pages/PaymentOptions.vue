<script setup>

import { computed, ref } from "vue";

const procedure_list = ref([
  {
    procedure: 'Red Blood Cell Transfusion',
    region: 'Dallas',
    type: 'In Network',
    cost: 582
  },
  {
    procedure: 'Red Blood Cell Transfusion',
    region: 'Dallas',
    type: 'Out of Network',
    cost: 900
  },
  {
    procedure: 'Red Blood Cell Transfusion',
    region: 'Addison',
    type: 'In Network',
    cost: 582
  },
  {
    procedure: 'Red Blood Cell Transfusion',
    region: 'Addison',
    type: 'Out of Network',
    cost: 658
  },
  {
    procedure: 'Red Blood Cell Transfusion',
    region: 'Arlington',
    type: 'In Network',
    cost: 559
  },
  {
    procedure: 'Red Blood Cell Transfusion',
    region: 'Arlington',
    type: 'Out of Network',
    cost: 928
  },
  {
    procedure: 'Colonoscopy',
    region: 'Dallas',
    type: 'In Network',
    cost: 525
  },
  {
    procedure: 'Colonoscopy',
    region: 'Dallas',
    type: 'Out of Network',
    cost: 1590
  },
  {
    procedure: 'Colonoscopy',
    region: 'Addison',
    type: 'In Network',
    cost: 525
  },
  {
    procedure: 'Colonoscopy',
    region: 'Addison',
    type: 'Out of Network',
    cost: 976
  },
  {
    procedure: 'Colonoscopy',
    region: 'Arlington',
    type: 'In Network',
    cost: 543
  },
  {
    procedure: 'Colonoscopy',
    region: 'Arlington',
    type: 'Out of Network',
    cost: 847
  },
  {
    procedure: 'Cesarean Birth',
    region: 'Dallas',
    type: 'In Network',
    cost: 2656
  },
  {
    procedure: 'Cesarean Birth',
    region: 'Dallas',
    type: 'Out of Network',
    cost: 6499
  },
  {
    procedure: 'Cesarean Birth',
    region: 'Addison',
    type: 'In Network',
    cost: 2750
  },
  {
    procedure: 'Cesarean Birth',
    region: 'Addison',
    type: 'Out of Network',
    cost: 7183
  },
  {
    procedure: 'Cesarean Birth',
    region: 'Arlington',
    type: 'In Network',
    cost: 2656
  },
  {
    procedure: 'Cesarean Birth',
    region: 'Arlington',
    type: 'Out of Network',
    cost: 6499
  },
  {
    procedure: 'Chest X-Ray',
    region: 'Dallas',
    type: 'In Network',
    cost: 21
  },
  {
    procedure: 'Chest X-Ray',
    region: 'Dallas',
    type: 'Out of Network',
    cost: 119
  },
  {
    procedure: 'Chest X-Ray',
    region: 'Addison',
    type: 'In Network',
    cost: 20
  },
  {
    procedure: 'Chest X-Ray',
    region: 'Addison',
    type: 'Out of Network',
    cost: 183
  },
  {
    procedure: 'Chest X-Ray',
    region: 'Arlington',
    type: 'In Network',
    cost: 28
  },
  {
    procedure: 'Chest X-Ray',
    region: 'Arlington',
    type: 'Out of Network',
    cost: 43
  },
  {
    procedure: 'Ambulance Service',
    region: 'Dallas',
    type: 'In Network',
    cost: 270
  },
  {
    procedure: 'Ambulance Service',
    region: 'Dallas',
    type: 'Out of Network',
    cost: 400
  },
  {
    procedure: 'Ambulance Service',
    region: 'Addison',
    type: 'In Network',
    cost: 300
  },
  {
    procedure: 'Ambulance Service',
    region: 'Addison',
    type: 'Out of Network',
    cost: 650
  },
  {
    procedure: 'Ambulance Service',
    region: 'Arlington',
    type: 'In Network',
    cost: 195
  },
  {
    procedure: 'Ambulance Service',
    region: 'Arlington',
    type: 'Out of Network',
    cost: 405
  },
  {
    procedure: 'Emergency Room Visit',
    region: 'Dallas',
    type: 'In Network',
    cost: 578
  },
  {
    procedure: 'Emergency Room Visit',
    region: 'Dallas',
    type: 'Out of Network',
    cost: 1566
  },
  {
    procedure: 'Emergency Room Visit',
    region: 'Addison',
    type: 'In Network',
    cost: 578
  },
  {
    procedure: 'Emergency Room Visit',
    region: 'Addison',
    type: 'Out of Network',
    cost: 1566
  },
  {
    procedure: 'Emergency Room Visit',
    region: 'Arlington',
    type: 'In Network',
    cost: 578
  },
  {
    procedure: 'Emergency Room Visit',
    region: 'Arlington',
    type: 'Out of Network',
    cost: 1566
  },
  {
    procedure: 'Broken Forearm',
    region: 'Dallas',
    type: 'In Network',
    cost: 636
  },
  {
    procedure: 'Broken Forearm',
    region: 'Dallas',
    type: 'Out of Network',
    cost: 1201
  },
  {
    procedure: 'Broken Forearm',
    region: 'Addison',
    type: 'In Network',
    cost: 444
  },
  {
    procedure: 'Broken Forearm',
    region: 'Addison',
    type: 'Out of Network',
    cost: 1241
  },
  {
    procedure: 'Broken Forearm',
    region: 'Arlington',
    type: 'In Network',
    cost: 413
  },
  {
    procedure: 'Broken Forearm',
    region: 'Arlington',
    type: 'Out of Network',
    cost: 1710
  },
  {
    procedure: 'Tonsillectomy',
    region: 'Dallas',
    type: 'In Network',
    cost: 726
  },
  {
    procedure: 'Tonsillectomy',
    region: 'Dallas',
    type: 'Out of Network',
    cost: 996
  },
  {
    procedure: 'Tonsillectomy',
    region: 'Addison',
    type: 'In Network',
    cost: 438
  },
  {
    procedure: 'Tonsillectomy',
    region: 'Addison',
    type: 'Out of Network',
    cost: 996
  },
  {
    procedure: 'Tonsillectomy',
    region: 'Arlington',
    type: 'In Network',
    cost: 396
  },
  {
    procedure: 'Tonsillectomy',
    region: 'Arlington',
    type: 'Out of Network',
    cost: 800
  },
  {
    procedure: 'Chemotherapy',
    region: 'Dallas',
    type: 'In Network',
    cost: 278
  },
  {
    procedure: 'Chemotherapy',
    region: 'Dallas',
    type: 'Out of Network',
    cost: 707
  },
  {
    procedure: 'Chemotherapy',
    region: 'Addison',
    type: 'In Network',
    cost: 278
  },
  {
    procedure: 'Chemotherapy',
    region: 'Addison',
    type: 'Out of Network',
    cost: 707
  },
  {
    procedure: 'Chemotherapy',
    region: 'Arlington',
    type: 'In Network',
    cost: 278
  },
  {
    procedure: 'Chemotherapy',
    region: 'Arlington',
    type: 'Out of Network',
    cost: 707
  }
]);

const procedure_costs = ref([
  {
    procedure: 'Red Blood Cell Transfusion', regions: [
      { city: 'Dallas', in_network: 582, out_of_network: 900 },
      { city: 'Addison', in_network: 582, out_of_network: 658 },
      { city: 'Arlington', in_network: 559, out_of_network: 928 }
    ]
  },
  {
    procedure: 'Colonoscopy', regions: [
      { city: 'Dallas', in_network: 525, out_of_network: 1590 },
      { city: 'Addison', in_network: 525, out_of_network: 976 },
      { city: 'Arlington', in_network: 543, out_of_network: 847 }
    ]
  },
  {
    procedure: 'Cesarean Birth', regions: [
      { city: 'Dallas', in_network: 2656, out_of_network: 6499 },
      { city: 'Addison', in_network: 2750, out_of_network: 7183 },
      { city: 'Arlington', in_network: 2656, out_of_network: 6499 }
    ]
  },
  {
    procedure: 'Chest X-Ray', regions: [
      { city: 'Dallas', in_network: 21, out_of_network: 119 },
      { city: 'Addison', in_network: 20, out_of_network: 183 },
      { city: 'Arlington', in_network: 28, out_of_network: 43 }
    ]
  },
  {
    procedure: 'Ambulance Service', regions: [
      { city: 'Dallas', in_network: 270, out_of_network: 400 },
      { city: 'Addison', in_network: 300, out_of_network: 650 },
      { city: 'Arlington', in_network: 195, out_of_network: 405 }
    ]
  },
  {
    procedure: 'Emergency Room Visit', regions: [
      { city: 'Dallas', in_network: 578, out_of_network: 1566 },
      { city: 'Addison', in_network: 578, out_of_network: 1566 },
      { city: 'Arlington', in_network: 578, out_of_network: 1566 }
    ]
  },
  {
    procedure: 'Broken Forearm', regions: [
      { city: 'Dallas', in_network: 636, out_of_network: 1201 },
      { city: 'Addison', in_network: 444, out_of_network: 1241 },
      { city: 'Arlington', in_network: 413, out_of_network: 1710 }
    ]
  },
  {
    procedure: 'Tonsillectomy', regions: [
      { city: 'Dallas', in_network: 726, out_of_network: 996 },
      { city: 'Addison', in_network: 438, out_of_network: 996 },
      { city: 'Arlington', in_network: 396, out_of_network: 800 }
    ]
  },
  {
    procedure: 'Chemotherapy', regions: [
      { city: 'Dallas', in_network: 278, out_of_network: 707 },
      { city: 'Addison', in_network: 278, out_of_network: 707 },
      { city: 'Arlington', in_network: 278, out_of_network: 707 }
    ]
  }
])
const procedure = ref(null);
const region = ref(null);
const types = ref([
  { label: 'In Network', value: 'in_network' },
  { label: 'Out of Network', value: 'out_of_network' }
])
const type = ref(null);
const cost = computed(() => region.value[type.value.value])

const selected_procedures = ref([]);
const add_procedure = () => {
  selected_procedures.value.push({
    name: procedure.value.procedure,
    city: region.value.city,
    type: type.value.label,
    cost: cost.value
  })
  procedure.value = null;
  region.value = null;
  type.value = null;
}
const total = computed(() => selected_procedures.value.reduce((a, b) => a += b.cost, 0))

const option_1 = computed(() => ({
  down_payment: Math.round(total.value * .4 * 100) / 100,
  monthly: Math.round(total.value * .2 * 100) / 100
}))

const option_2 = computed(() => ({
  monthly: Math.round(total.value / 6 * 100) / 100
}))

const option_3 = computed(() => ({
  bi_monthly: Math.round(total.value / 24 * 100) / 100
}))

</script>

<template>
  <div class="row justify-center q-pa-md">
    <div class="col-12 col-md-6">
      <q-card>
        <q-card-section>
          <div class="text-h5">Estimate your procedure costs and see your payment options.</div>
        </q-card-section>
        <q-card-section>
          <q-select :options="procedure_costs" v-model="procedure" option-label="procedure"
                    label="Select procedure"></q-select>
          <q-select v-if="procedure" :options="procedure.regions" option-label="city" v-model="region"
                    label="Select region"></q-select>
          <q-select v-if="region" :options="types" v-model="type" label="Select an option"></q-select>
          <div v-if="region && type" class="q-pa-md text-right text-h6 text-bold">${{ cost.toFixed(2) }}</div>
        </q-card-section>
        <q-card-actions v-if="region && type">
          <q-space></q-space>
          <q-btn class="text-bold" color="primary" label="Add Procedure" @click="add_procedure"></q-btn>
        </q-card-actions>
      </q-card>

      <q-card v-if="selected_procedures.length" class="q-mt-md">
        <q-card-section>
          <div class="text-bold text-h5">Your selected procedures</div>
        </q-card-section>
        <q-markup-table>
          <thead>
          <tr>
            <th>Procedure</th>
            <th>City</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="procedure in selected_procedures">
            <td>{{ procedure.name }}</td>
            <td>{{ procedure.city }}</td>
            <td>{{ procedure.type }}</td>
            <td class="text-right">${{ procedure.cost.toFixed(2) }}</td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="4" class="text-right">
              <div class="text-bold">Total: ${{ total.toFixed(2) }}</div>

            </td>
          </tr>
          </tfoot>
        </q-markup-table>
      </q-card>

      <div class="row q-mt-md q-col-gutter-md items-stretch" v-if="selected_procedures.length">
        <div class="col-12 col-md-4">

          <q-card class="bg-primary full-height" dark>
            <q-card-section>
              <div class="text-bold text-h5 text-center">Buy Now Pay Later Option 1</div>
            </q-card-section>
            <q-card-section>
              <div class="text-center text-italic text-subtitle1">40% down and 20% every month for 3 months</div>
            </q-card-section>
            <q-card-section>

              <div class="text-h4 text-center">${{ option_1.down_payment.toFixed(2) }} due today +</div>
              <div class="text-h4 text-center">3 payments of ${{ option_1.monthly.toFixed(2) }}</div>
              <div class="text-center text-italic">Due on the 1st of every month</div>
            </q-card-section>

          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="bg-primary full-height" dark>
            <q-card-section>
              <div class="text-bold text-h5 text-center">Buy Now Pay Later Option 2</div>
            </q-card-section>
            <q-card-section>
              <div class="text-center text-italic text-subtitle1">Equal Payments monthly over 6 months</div>
            </q-card-section>
            <q-card-section>
              <div class="text-h4 text-center">6 payments of ${{ option_2.monthly.toFixed(2) }}</div>
              <div class="text-center text-italic">Due on the 1st of every month</div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="bg-primary full-height" dark>
            <q-card-section>
              <div class="text-bold text-h5 text-center">Buy Now Pay Later Option 3</div>
            </q-card-section>
            <q-card-section>
              <div class="text-center text-italic text-subtitle1">Bi-monthly for 12 months</div>
            </q-card-section>
            <q-card-section>
              <div class="text-h4 text-center">
                24 payments of ${{ option_3.bi_monthly.toFixed(2) }}
              </div>
              <div class="text-center text-italic">Due on the 1st and 15th of every month</div>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>