<template>
    <div class="flex flex-col">
        <div class="border border-gray-300 p-2 rounded-md flex flex-row bg-green-400" >
            <div class="font-medium mr-1 text-white" >
                Listado de usuarios
            </div>
        </div>

        <div class="flex flex-col">
            <div
            class="flex flex-col m-4"
            v-for="(usuario, index) in usuarios"
            :key="index"
            >
            <slot :usuario="usuario" >
                <Usuario
                :nombre="usuario.nombre"
                :apellido="usuario.apellido"
                :edad="usuario.edad"
                :ocupacion="usuario.ocupacion"
                :lenguages="usuario.lenguages"
                :avatar="usuario.avatar"
                />
            </slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs } from 'vue'
import Usuario from './Usuario.vue'

const props = defineProps({
    usuarios: Array
})

const { usuarios } = toRefs(props);


</script>

<style lang="scss" scoped>

</style>