<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Timeslot from './components/Timeslot.vue';
import TimeslotType from './components/TimeslotType.vue';
import Questionnaires from './components/Questionnaires.vue';
import Consent from './components/Consent.vue';
import Questionnaire from './components/Questionnaire.vue';

let context: Ref<{slotId: string, typeId: string}> = ref({slotId: '', typeId: ''});
let selectedQuestionnaire: Ref<string> = ref('');
let currentStep: Ref<number> = ref(1);
</script>

<template>
  <v-stepper hide-actions   :items="['Select time slot', 'Select time slot type', 'Select questionnaire', 'Check consent', 'Questionnaire']" :model-value="currentStep">
    <template v-slot:[`item.1`] value=1 >
      <v-card title="Time slots" flat>
        <Suspense>
          <Timeslot @on-timeslot-change="(t:string) => {context.slotId = t; currentStep++;}"></Timeslot>
        </Suspense>
      </v-card>
    </template>

    <template v-slot:[`item.2`] value=2 >
      <v-card title="Time slot types" flat>
        <Suspense>
          <TimeslotType @on-timeslot-type-change="(t: string) => {context.typeId = t; currentStep++;}"></TimeslotType>
        </Suspense>
      </v-card>
    </template>

    <template v-slot:[`item.3`] value=3>
      <v-card title="Questionnaire"  flat>
        <Suspense>
          <Questionnaires :context="context" @on-questionnaires="(q: string) => {selectedQuestionnaire = q; currentStep++;}"></Questionnaires>
        </Suspense>
      </v-card>
    </template>
    <template v-slot:[`item.4`] value=4>
      <v-card title="Consent" flat>
        <Suspense>
          <Consent @on-consent-change="(c: boolean) => c ? currentStep++ : currentStep"></Consent>
        </Suspense>
      </v-card>
    </template>
    <template v-slot:[`item.5`] value=5>
      <v-card title="Questionnaire" flat>
        <Suspense>
          <Questionnaire :questionnaire="selectedQuestionnaire"></Questionnaire>
        </Suspense>
      </v-card>

    </template>
  </v-stepper>
</template>
<style scoped>

v-stepper{
  width: 100%;
}

</style>
