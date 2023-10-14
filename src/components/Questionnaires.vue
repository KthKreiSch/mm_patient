<script setup>
import { ref } from 'vue'
import ApiService from '../services/api.service';
let timeslots = await ApiService.getTimeSlots().then(res => res) ;
let selectedTimeslot = ref("");


</script>

<template>
  <v-card>
    <v-list >
        <v-list-item v-for="timeslot in timeslots" :key="timeslot.id" :value="timeslot.id" @click="selectedTimeslot = timeslot.title">
            <v-list-item-title>{{ timeslot.title }}</v-list-item-title>
        </v-list-item>
    </v-list>
  </v-card>
  {{ selectedTimeslot }}
</template>