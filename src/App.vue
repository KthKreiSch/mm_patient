<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
  <v-stepper :items="['Select time slot', 'Select time slot type', 'Select questionnaire', 'Check consent', 'Questionnaire']">
    <template v-slot:[`item.1`]>
      <v-card title="Time slot" flat>...</v-card>
    </template>

    <template v-slot:[`item.2`]>
      <v-card title="Time slot type" flat>...</v-card>
    </template>

    <template v-slot:[`item.3`]>
      <v-card title="Questionnaire" flat>...</v-card>
    </template>
    <template v-slot:[`item.4`]>
      <v-card title="Consent" flat>...</v-card>
    </template>
    <template v-slot:[`item.5`]>
      <v-card title="Questionnaire" flat>...</v-card>
    </template>
  </v-stepper>
</template>

<style scoped>

v-stepper{
  width: 100%;
}

</style>
