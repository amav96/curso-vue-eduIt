<template>
        <div
        style="flex:1;"
        class="w-full h-full">
        
            <form 
            @submit.prevent="manejarGuardado"
            class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
            >
                <!-- nombre -->
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Nombre
                    </label>
                    <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Nombre"
                    v-model="formulario.name"
                    >
                </div>

                <!-- email -->
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    v-model="formulario.email"
                    >
                </div>

                <!-- password -->
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                    v-model="formulario.password"
                    >
                </div>
                
                <!-- avatar -->
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Avatar
                    </label>

                    <img
                    v-if="formulario.avatar"
                    class="w-14 h-14 rounded-full mb-2"
                    :src="formulario.avatar"
                    alt="Rounded avatar"
                    >

                    <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Avatar"
                    v-model="formulario.avatar"
                    >
                </div>

                <div class="flex items-center justify-between">
                    <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    :disabled="guardandoUsuario"
                    >
                        {{ guardandoUsuario ? 'Cargando' : 'Guardar' }}
                    </button>
                    <button
                    @click="manejarSalir"
                    class="bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Atras
                    </button>
                </div>
            </form>
            <div v-if="guardadoCorrectamente" class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div class="flex">
                    <p class="font-bold">
                        Guardado correctamente
                    </p>
                </div>
            </div>
        </div>

</template>

<script setup>

import axios from 'axios';
import { onBeforeUpdate, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

const emit = defineEmits(["close","agregar-usuario" ,"actualizar-usuario"])

onMounted(() => {
    console.log('MONTADOOOOO!!!')
    if(route.params?.usuario_id){
        editando.value = true;
        getUsuario()
    }
})

const editando = ref(false)

onBeforeUpdate(() => {
    console.log("onBeforeUpdate")
})

const url = "https://661d915898427bbbef0225b3.mockapi.io/api/v1/users"
const cargandoUsuario = ref(false)
const usuario =  ref(null)

const formulario = ref({
    email: '',
    name: '',
    password: '',
    avatar: ''
})

const getUsuario = async () => {
    try {
        cargandoUsuario.value = true;
        const response = await axios.get(url,{
            params: {
                id: route.params.usuario_id
            }
        });
        const { data } = response;
        const [ usuarioServer ] = data;
        usuario.value = usuarioServer

        formulario.value.email = usuario.value.email
        formulario.value.name = usuario.value.name
        formulario.value.password = usuario.value.password
        formulario.value.avatar = usuario.value.avatar

    } catch (error) {
        console.log(error)
    } finally {
        cargandoUsuario.value = false
    }
}

const guardandoUsuario = ref(false)
const guardadoCorrectamente = ref(false)
const actualizarUsuario = async () => {
    
    try {
        guardandoUsuario.value = true;
        const response = await axios.put(
            `${url}/${usuario.value.id}`,
            formulario.value
        )
        guardadoCorrectamente.value = true;
        setTimeout(() => {
            guardadoCorrectamente.value = false;
            emit("actualizar-usuario", response.data)
        }, 3000);
    } catch (error) {
        console.log(error)
    } finally {
        guardandoUsuario.value = false;
    }
}

const manejarGuardado = () => {
    if(editando.value){
        actualizarUsuario()
    } else {
        crearUsuario()
    }
}

const crearUsuario =  async () => {
    try {
        guardandoUsuario.value = true;
        const response = await axios.post(
            url,
            formulario.value
        )
        const { data } = response
        guardadoCorrectamente.value = true;
        emit("agregar-usuario", data)
        setTimeout(() => {
            guardadoCorrectamente.value = false;
            manejarSalir();
        }, 2000);
    } catch (error) {
        console.log(error)
    } finally {
        guardandoUsuario.value = false;
    }
}

const manejarSalir = () => {
    if(editando.value){
        router.push({name: 'Usuarios'})
    } else {
        emit("close")
    }
}

defineExpose({
    formulario,
    usuario,
    editando
})

</script>

<style lang="scss" scoped>

</style>