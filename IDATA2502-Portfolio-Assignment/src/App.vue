<script setup>
import MainContainer from './components/MainContainer.vue';
</script>

<template>
    <main>
        <h1>The pipeline viewer</h1>
        <MainContainer />
    </main>
    </template>

<style>
h1 {
    color: white;
    margin: 10px;
}
main {
    align-items: center;
}
.main-box {
    display: flex;
    justify-content: space-evenly;
    width: 1500px; /* This is bad practice, but this is a proof of concept */
}
</style>
