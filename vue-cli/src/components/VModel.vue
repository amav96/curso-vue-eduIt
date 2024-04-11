<template>
    <template v-if="mostrarSeccionBusqueda">
        <div v-if="inputValue === ''">
        Ingrese texto
        </div>
        <div v-else >
            Buscando {{ inputValue }}
        </div>
        <div class="flex flex-col">
            <input
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            placeholder="Buscador"
            v-model="inputValue"
            >

            <div class="flex flex-row items-center" >
                <button
                class="mt-2 bg-violet-200 p-2 rounded mr-2 button-color"
                @click="buscar"
                >
                Enviar
                </button>
                <button
                class="mt-2 bg-violet-200 p-2 rounded mr-2 button-color"
                @click="limpiarBusqueda"
                >
                Limpiar busqueda
                </button>
            </div>

            <div
            v-if="inputValue && busquedaExitosa && busquedaAplicada"
            class="bg-green-500 p-2 text-white rounded mt-2"
            >
                Hemos encontrado resultados en tu busqueda!!
            </div>
            <div
            v-else-if="inputValue && !busquedaExitosa && busquedaAplicada"
            class="bg-red-500 p-2 text-white rounded mt-2"
            >
                No hemos encontrado resultados en tu busqueda!!
            </div>
            
        </div>
    </template>

    <div>
        Listado de usuarios
    </div>

        

    <div
    class="flex flex-row"
    v-if="usuarios.length > 0"
    >
        <div
        v-for="(usuario, index) in usuarios"
        :key="index"
        class="bg-yellow-200 text-black p-2 mr-2"
        >
            {{ usuario }}
        </div>
    </div>

    <input
    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
    v-model="usuarioInputValue"
    placeholder="Buscar usuarios"
    >

    <div
    class="flex flex-row"
    v-if="usuariosEncontrados.length > 0"
    >
        <div
        v-for="(usuarioEncontrado, index) in usuariosEncontrados"
        :key="index"
        class="bg-blue-200 text-black p-2 mr-2 mt-2"
        >
            {{ usuarioEncontrado }}
        </div>
    </div>



    <div class="flex flex-row items-center" >
        <button
        class="mt-2 bg-violet-200 p-2 rounded mr-2 button-color"
        @click="filtrarUsuarios"
        >
        buscar
        </button>
        <button
        class="mt-2 bg-violet-200 p-2 rounded mr-2 button-color"
        @click="limpiarBusquedaUsuarios"
        >
        Limpiar busqueda
        </button>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import mensaje from '../assets/mensaje.json'

const inputValue = ref('')

const mostrarSeccionBusqueda = ref(false)
const busquedaExitosa = ref(false)
const busquedaAplicada = ref(false)
const buscar = () => {
    busquedaExitosa.value = mensaje.descripcion.includes(inputValue.value)
    busquedaAplicada.value = true
}

const limpiarBusqueda = () => {
    inputValue.value = ''
    busquedaExitosa.value  = false;
    busquedaAplicada.value = false
}

const usuarios = ref([
    "Manuel",
    "Juan",
    "Sofia",
    "Maria",
    "Jose"
])

const usuarioInputValue = ref('')
const usuariosEncontrados = ref([])

const filtrarUsuarios = () => {
    usuariosEncontrados.value = usuarios.value.filter((u) => u.toLowerCase() == usuarioInputValue.value.toLowerCase())
}

const limpiarBusquedaUsuarios = () => {
    usuariosEncontrados.value = []
    usuarioInputValue.value = ''
}

</script>

<style lang="scss" scoped>

</style>