<script setup>
import { ref } from 'vue';
import Description from './Description.vue';
import Pipeline from './Pipeline.vue';
import pipelineList from '../assets/pipelines.json';
import { VSelect } from 'vuetify/components';

let pipelineId = ref(0);
</script>

<template>
	<div class="main-box">
		<div>
			<VSelect
                label="Select pipeline"
                :items = "pipelineList"
				item-title="name"
				item-value="id"
				v-model="pipelineId"
    		/>
			<Pipeline :title=pipelineList[pipelineId].name :jobs=pipelineList[pipelineId].jobs />
		</div>
		<Description :title=pipelineList[pipelineId].name :description=pipelineList[pipelineId].description />
	</div>
	<pre>{{ pipelineId }}</pre>
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