<script setup>
import { VListItem } from 'vuetify/components';


defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <VListItem>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </VListItem>
  </div>
</template>

<style scoped>

</style>
