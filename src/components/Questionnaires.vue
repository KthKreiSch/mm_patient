<script setup lang="ts">
import ApiService from '../services/api.service';
let questionnaires: Questionnaire[] | null = await ApiService.getQuestionnaires().then(res => res) ;

</script>

<template>
  <v-card>
    <v-list >
        <v-list-item v-for="questionnaire in questionnaires" :key="questionnaire.id" :value="questionnaire.id" @click="$emit('onQuestionnaires', questionnaire)">
            <v-list-item-title>{{ questionnaire.title }}</v-list-item-title>
        </v-list-item>
    </v-list>
  </v-card>
</template>