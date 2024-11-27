<script setup>
import Description from './components/Description.vue';
import Pipeline from './components/Pipeline.vue';
import pipeline1 from './assets/pipeline1.json';
import pipeline2 from './assets/pipeline2.json';
</script>

<template>
    <body>
        <main>
            <Pipeline :title=pipeline1.name :content=pipeline1.description />
            <Description :title=pipeline1.name :description=pipeline1.description />
        </main>
    </body>
</template>

<style>

</style>
