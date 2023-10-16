<script setup lang="ts">
import ApiService from '../services/api.service';
let timeslotTypes: BaseObject[] | null = await ApiService.getTimeSlotTypes().then(res => res) ;

</script>

<template>
  <v-card>
    <h4>What type of time slot should be created?</h4>
    <v-radio-group>
        <v-radio  v-for="timeslotType in timeslotTypes" :label="timeslotType.title" :value="timeslotType.id" @click="$emit('onTimeslotTypeChange', timeslotType.id)"></v-radio>
    </v-radio-group>
  </v-card>
</template>