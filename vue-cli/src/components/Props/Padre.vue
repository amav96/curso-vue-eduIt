<template>
    <div class="flex flex-col p-2">
        <div class="my-2" >
            Perfil Usuario (Componente Padre)
        </div>

        <Hijo
        :nombre="usuario.nombre"
        :apellido="usuario.apellido"
        :edad="usuario.edad"
        :ocupacion="usuario.ocupacion"
        :lenguages="usuario.lenguages"
        :avatar="usuario.avatar"
        :experiencia="4"
        
        />
        
    </div>
</template>

<script setup>
import Hijo from './Hijo.vue' 
import { ref } from 'vue'

const usuario = ref({
    nombre: 'Sofia',
    apellido: 'Contreras',
    edad: 45,
    ocupacion: 'Desarrolladora web',
    lenguages: ['Vue', 'React', 'Javascript'],
    avatar: 'https://avatar.iran.liara.run/public/59'
})

</script>

<style lang="scss" scoped>

</style>