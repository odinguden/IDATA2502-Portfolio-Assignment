<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <body>
        <main>
        <div class="grid-container">
                <div class="grid-item"></div>
                <div class="grid-item"><h1>LEMON!</h1></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"><img src="../lemon.jpg" alt="Homie"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
              </div>
        </main>
    </body>
</template>

<style>
img {
    border-radius: 10%;
}
main{
    background-image: image-set("../vincentiu-solomon-ln5drpv_ImI-unsplash.jpg");
    background-size: 100%;
}
.grid-container{
    padding: 5px;
    display: grid;
    grid-template-columns: auto auto auto;
}
.grid-item{
    font-family: "comic sans ms";
    width: auto;
    padding: 5px;
    color: aliceblue;
    margin: 5px;
    text-align: center;
}
body{
    background-color: purple;
}
h1{
    color: yellow;
    font-family: "comic sans ms";
}
header{
    padding: 10px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    background-color: #4E5166;
    height: 40px;
    align-content: center;
}
a{
    transition: 0.5s;
    text-decoration: none;
    background-color: #F9DC5C;
    padding: 5px;
    border-radius: 10px;
    margin: 10px;
}
a:hover{
    transition: 0.5s;
    height: +20;

}
.lemon{
    transition: 0.5s;
    text-decoration: none;
    padding: 5px;
    border-radius: 10px;
    background-color: green;
    color: yellow;
}
.lemon:hover{
    color: green;
    background-color: yellow;
    transition: 0.5s;
}
button{
    background-color: #20FC8F;
}
</style>
