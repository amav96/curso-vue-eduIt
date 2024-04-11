<template>
    <div >


        <h1> {{ mensaje.titulo }}</h1>
        <!-- <p> {{ mensaje.descripcion }}</p> -->

        <p v-text="mensaje.descripcion"></p>
        <hr>
        <br>
        <br>
        <br>

        <p v-html="mensajeHTML.titulo" ></p>
        <p v-html="mensajeHTML.descripcion" ></p>


    </div>
</template>

<script setup >
import mensaje from '../assets/mensaje.json'
import mensajeHTML from '../assets/mensajeHTML.json'

</script>

<style scoped>

</style>