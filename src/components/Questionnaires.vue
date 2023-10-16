<script setup lang="ts">
import ApiService from '../services/api.service';
const props = defineProps(['context']);

let questionnaires: Questionnaire[] | null = await ApiService.getQuestionnaires().then(res => res) ;
let contexts: Context[] | null = await ApiService.getContexts().then(res => res);
let filteredQuestionnaires: Questionnaire[] | undefined = [];
let context: Context | undefined;

context = contexts?.find((context: Context) => context.slotId === props.context.slotId && context.typeId === props.context.typeId);
filteredQuestionnaires = questionnaires?.filter((q: Questionnaire) => context ? q.useContext.includes(context.id) : [])
</script>

<template>
  <v-card>
    <v-list >
        <v-list-item v-for="questionnaire in filteredQuestionnaires" :key="questionnaire.id" :value="questionnaire.id" @click="$emit('onQuestionnaires', questionnaire)">
            <v-list-item-title>{{ questionnaire.title }}</v-list-item-title>
        </v-list-item>
    </v-list>
  </v-card>
</template>