<script setup>
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
  <div class="text">
    <h1>{{ title }}</h1>
    <h3>
        {{ description }}
    </h3>
  </div>
</template>

<style scoped>
  .text {
    width: 40%;
  }

    h1 {
        color: white;
    }
    h3 {
        color: white;
    }
</style>
