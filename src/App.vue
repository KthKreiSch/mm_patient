<script setup lang="ts">
import { ref } from 'vue'

let title = "ji";
const age = ref(0);
const changeTitle = () => {
  title = "test"
}
</script>

<template>
  <p>{{title}} - {{age}}</p>
  <v-btn v-on:click="age++" variant="tonal">Increase age</v-btn>
  <v-btn @click="changeTitle()">Change title</v-btn>
  <div v-if="age === 2">
    Hallloooooooo
  </div>
  <v-btn>
    Button
  </v-btn>
  <v-chip
    closable
    prepend-icon="$vuetify"
    append-icon="$vuetify"
  >
    Chip
  </v-chip>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
