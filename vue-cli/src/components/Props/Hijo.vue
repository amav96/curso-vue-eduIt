<template>
    <div class="flex flex-col">
        <div class="border border-gray-300 p-2 rounded-md flex flex-row bg-green-400" >
            <div class="font-medium mr-1 text-white">
                Componente Hijo
            </div>
        </div>

        <div class="border border-gray-300 p-2 rounded-md flex flex-row" >
            <div class="font-medium mr-1" >
                Nombre: 
            </div>
            <div>
                {{ nombre }}
            </div>
        </div>

        <div class="border border-gray-300 p-2 rounded-md flex flex-row" >
            <div class="font-medium mr-1" >
                Apellido: 
            </div>
            <div>
                {{ apellido }}
            </div>
        </div>

        <div class="border border-gray-300 p-2 rounded-md flex flex-row" >
            <div>
                {{ ocupacion }}
            </div>
        </div>

        <div class="border border-gray-300 p-2 rounded-md flex flex-row" >
            <div class="font-medium mr-1" >
                <img :src="avatar" alt="avatar" class="rounded-full h-12 w-12" />
            </div>
            <div
            v-for="(lenguaje, index) in lenguages"
            :key="index"
            class="ml-2"
            >
                {{ lenguaje }}
            </div>
        </div>

        <div v-if="experiencia" class="border border-gray-300 p-2 rounded-md flex flex-row" >
            <div class="font-medium mr-1" >
                Experiencia: 
            </div>
            {{  experiencia }}
        </div>

    </div>  
</template>

<script setup>

import { toRefs } from 'vue'

const props = defineProps({
    nombre: String,
    apellido: String,
    edad: Number,
    ocupacion: String,
    lenguages: {
        type: Array,
        default: () => []
    },
    experiencia: {
        type: Number,
        default: 0
    },
    avatar: String,
})

const { 
    nombre, 
    apellido, 
    edad, 
    ocupacion, 
    lenguages, 
    experiencia, 
    evatar 
    } = toRefs(props);


</script>

<style lang="scss" scoped>

</style>