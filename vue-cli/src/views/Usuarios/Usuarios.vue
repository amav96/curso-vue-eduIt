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
            <!-- <div>
                <button 
                type="submit"
                class="p-2 bg-blue-400 text-white rounded-lg shadow w-48" >
                    {{ cargandoUsuarios ? 'Cargando' : 'Filtrar' }} 
                </button>
            </div> -->
        </form>
        <div class="flex flex-flex justify-start my-4">
            <button 
            @click="displayCreateUser = !displayCreateUser"
            class="text-white bg-green-400 p-2 rounded-lg shadow">
                Crear usuario
            </button>
        </div>
        <ListadoUsuarios
        :usuarios="usuariosCalculados"
        @eliminar="eliminarUsuario"
        @actualizar="irActualizarUsuario"
        />

        <Modal
        v-if="displayCreateUser"
        >
            <SaveUsuario
            @agregar-usuario="agregarUsuario"
            @close="displayCreateUser = false"
            />
        </Modal>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref, watch, reactive, computed } from 'vue';
import ListadoUsuarios from '../../components/Usuarios/ListadoUsuarios.vue';
import { useRouter } from 'vue-router'
import Modal from '../../components/Modal.vue';
import SaveUsuario from './SaveUsuario.vue'

const router = useRouter()

onMounted(() => {
    getUsuarios()
})

const filtros = reactive({
    email : ''
})

watch(filtros, (newValue) => {
    getUsuarios()
}, { deep: true } )

const usuariosCalculados = computed(() => {
    return usuarios.value.map((u) => {
        if(u.id < 15){
            return {
            ...u,
            name: 'App ' + u.name
            }
        } else {
            return u
        }
        
    })
})


const cargandoUsuarios = ref(false)
const usuarios = ref([])
const url = "https://661d915898427bbbef0225b3.mockapi.io/api/v1/users"
const getUsuarios = async () => {

    if(cargandoUsuarios.value) return;
    try {
        cargandoUsuarios.value = true
        const params = {}
        if(filtros.email){
            params.email = filtros.email
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

const irActualizarUsuario = (data) => {
    router.push({name: 'SaveUsuario', params : { usuario_id: data.usuario.id }})
}

const displayCreateUser = ref(false)

const agregarUsuario = (nuevoUsuario) => {
    usuarios.value = [
        ...[nuevoUsuario],
        ...usuarios.value
    ]
}

</script>

<style lang="scss" scoped>

</style>