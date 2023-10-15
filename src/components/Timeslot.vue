<script setup lang="ts">
import ApiService from '../services/api.service';
let timeslots: BaseObject[] | null = await ApiService.getTimeSlots().then(res => res) ;

</script>

<template>
  <v-card>
    <v-list >
        <v-list-item v-for="timeslot in timeslots" :key="timeslot.id" :value="timeslot.id" @click="$emit('onTimeslotChange', timeslot)">
            <v-list-item-title>{{ timeslot.title }}</v-list-item-title>
        </v-list-item>
    </v-list>
  </v-card>
</template>