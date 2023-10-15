<script setup lang="ts">
import { defineProps, ref, type Ref } from 'vue';
import ApiService from '../services/api.service';
import { toRaw } from 'vue';
const props = defineProps(['questionnaire']);
let questionnaireElements: Ref<QuestionnaireElement[] | null> = ref([])
if (props.questionnaire) questionnaireElements = await ApiService.getQuestionnaireElementsByQuestionnaire(props.questionnaire).then(res => ref(res));


setVisibility();
//TODO: Listen to changes in form
function setVisibility() {
    questionnaireElements?.value?.forEach((element, index) => {
        if (questionnaireElements.value && element.enableWhen) {

            questionnaireElements.value[index].visible = checkEnableWhenConditions(element.enableWhen[0])

        }
    });


}

function checkEnableWhenConditions(enableWhen: { operator: string, question: string, answerBoolean?: boolean }): boolean {
    let filteredQuestions: QuestionnaireElement | undefined = questionnaireElements.value?.find((q: any) => {
        return toRaw(q).linkId === enableWhen.question});
    if (enableWhen.operator === 'exists') {
        if (! filteredQuestions?.answer) return false;
        if (filteredQuestions.enableWhen && filteredQuestions?.enableWhen[0]?.answerBoolean !== filteredQuestions?.answer) return false;
        return true;
    }
    return true;
}
</script>

<template>
    <v-card width="400" v-for="element in questionnaireElements">
        <template v-if="element.visible">
            <v-card-item>
                <v-card-title>{{ element.text }}</v-card-title>
                <template v-if="element.type === 'text' || element.type === 'integer'">
                    <v-text-field @input="(t: any) => element.answer = t.target.value" density="compact" variant="solo"
                        single-line></v-text-field>
                </template>
                <template v-if="element.type === 'date'">
                    <v-container>
                        <v-row justify="space-around">
                            <v-date-picker :v-model="element.answer" color="primary"></v-date-picker>
                        </v-row>
                    </v-container>
                </template>
                <template v-if="element.type === 'group'">
                    <div v-for="item in element.item">
                        <v-card-subtitle>{{ item?.text }} </v-card-subtitle>
                        <v-radio-group v-on:change="(t: any) => item.answer = t.target.value">
                            <v-radio label="Yes" value=true></v-radio>
                            <v-radio label="No" value=false></v-radio>
                        </v-radio-group>
                    </div>
                </template>
                <template v-if="element.type === 'boolean'">
                    <v-radio-group :v-model="element.answer" v-on:change="(t: any) => element.answer = t.target.value">
                        <v-radio label="Yes" value=true></v-radio>
                        <v-radio label="No" value=false></v-radio>
                    </v-radio-group>
                </template>
            </v-card-item>
        </template>
    </v-card>
</template>