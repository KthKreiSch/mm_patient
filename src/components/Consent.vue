<script setup lang="ts">
import {ref, type Ref} from 'vue';
import ApiService from '../services/api.service';
let consent: boolean = false;
let loading: boolean = false;
let patientId: string = '';
let selectedPatient: Ref<BaseObject[] > = ref([]);
let patientExists: Ref<boolean> = ref(false);
function onClick(): void{
    loading = true;
    selectedPatient.value = [];
    patientExists.value = false;
    ApiService.getPatientsById(patientId).then((res: BaseObject []|null)  => {
        if(res && res?.length> 0) {
            loading=false;
            selectedPatient.value = res;
            patientExists.value = true;
        };
    });
}
onClick();

</script>

<template>
    <span>
        <v-text-field :loading="loading" density="compact" variant="solo"
        label="Search patient with id" append-inner-icon="mdi-magnify" single-line v-model="patientId"
        @click:append-inner="onClick"></v-text-field>

        <template v-if="patientExists" >
            Does {{ selectedPatient[0]?.name }} give consent? 
            <v-radio-group  :v-model="consent" >
                <v-radio label="Yes" value=true @click="$emit('onConsentChange', true);"></v-radio>
                <v-radio label="No" value=false @click="$emit('onConsentChange', false);"></v-radio>
            </v-radio-group>
        </template>
    </span>
</template>