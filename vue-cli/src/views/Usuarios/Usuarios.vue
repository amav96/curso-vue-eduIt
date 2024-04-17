<template>
    <div class="flex flex-col">
        <div class="text-2xl font-semibold mb-4">
            Listado de usuarios
        </div>
        <form @submit.prevent="getUsuarios" class="flex flex-col gap-4" >
            <div>
                <input 
                class="block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
                placeholder="Email"
                v-model="filtros.email"
                />
            </div>
            <div>
                <button 
                type="submit"
                class="p-2 bg-blue-400 text-white rounded-lg shadow w-48" >
                    {{ cargandoUsuarios ? 'Cargando' : 'Filtrar' }} 
                </button>
            </div>
        </form>
        <ListadoUsuarios
        :usuarios="usuarios"
        @eliminar="eliminarUsuario"
        />
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import ListadoUsuarios from '../../components/Usuarios/ListadoUsuarios.vue';


onMounted(() => {
    getUsuarios()
})

const filtros = ref({
    email : ''
})

const cargandoUsuarios = ref(false)
const usuarios = ref([])
const url = "https://661d915898427bbbef0225b3.mockapi.io/api/v1/users"
const getUsuarios = async () => {
    try {
        cargandoUsuarios.value = true
        const params = {}
        if(filtros.value.email){
            params.email = filtros.value.email
        }
        const response = await axios.get(url,{
            params
        });
        usuarios.value = response.data;
    } catch (error) {
        console.log(error)
    } finally {
        cargandoUsuarios.value = false
    }
}

const eliminandoUsuarios = ref(false)
const eliminarUsuario = async (data) => {
    if(eliminandoUsuarios.value) return
    try {
        eliminandoUsuarios.value  = true;
        const { usuario , index } = data
        const response = await axios.delete(`${url}/${usuario.id}`)
        usuarios.value = usuarios.value.filter((u) => u.id !== usuario.id)

    } catch (error) {
        console.log(error)
    } finally {
        eliminandoUsuarios.value  = false;
    }
}



</script>

<style lang="scss" scoped>

</style>