<script setup>
import Job from './Job.vue';
import { VList, VListItem, VListItemTitle, VListGroup } from 'vuetify/components';

defineProps({
  title: {
    type: String,
    required: true,
  },
  jobs: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <div>
    <VList>
        <VListItem
            v-for="(job, index) in jobs"
            :key="index"
            color="black"
            >
            <job :title=job.name :steps=job.steps />
        </VListItem>
    </VList>
  </div>  </div>
</template>

<style scoped>
</style>
