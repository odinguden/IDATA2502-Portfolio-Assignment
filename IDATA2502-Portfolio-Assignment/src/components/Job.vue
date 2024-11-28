<script setup>
import { VList, VListItem, VListItemTitle } from 'vuetify/components';
import Step from './Step.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  steps: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <VList>
        <VListItem v-for="(step, index) in steps" :key="index">
            <step :title=step.step :description=step.description />
        </VListItem>
    </VList>
  </div>
</template>

<style scoped>

</style>
