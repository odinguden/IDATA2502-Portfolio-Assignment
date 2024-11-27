<script setup>
import Description from './components/Description.vue';
import Pipeline from './components/Pipeline.vue';
import pipeline1 from './assets/pipeline1.json';
import pipeline2 from './assets/pipeline2.json';
</script>

<template>
    <div class="main-box">
        <Pipeline :title=pipeline1.name :jobs=pipeline1.jobs />
        <Description :title=pipeline1.name :description=pipeline1.description />
    </div>
</template>

<style>
.main-box {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}
</style>
