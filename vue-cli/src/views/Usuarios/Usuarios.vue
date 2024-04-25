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
            class="text-white bg-green-400 p-2 rounded-lg shadow w-12">
            <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>
        <ListadoUsuarios
        :usuarios="usuariosCalculados"
        @eliminar="eliminarUsuario"
        @actualizar="irActualizarUsuario"
        @actualizar-estado="actualizarEstado"
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
        if(u.estado === 'activo'){
            return {
                ...u,
                estadoAccion: 'Desactivar',
                colorEstado: 'bg-red-400',
                puedeElimnar: false,
                botonEliminarColor: 'bg-gray-300',
                estadoClase: 'dark:bg-green-900 dark:text-green-300 bg-green-100 text-green-800 '
            }
        } 
        return {
                ...u,
                estadoAccion: 'Activar',
                colorEstado: 'bg-green-400',
                puedeEliminar: true,
                botonEliminarColor: 'bg-red-400',
                estadoClase: 'dark:bg-red-900 dark:text-red-300 bg-red-100 text-red-800 '

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

const activandoUsuarios = ref(false)
const actualizarEstado = async (data) => {

    if(activandoUsuarios.value) return

    const {usuario, index} = data;
    try {
        activandoUsuarios.value = true;
        const response = await axios.put(
            `${url}/${usuario.id}`,
            {
                estado: usuario.estado !== 'activo' ? 'activo' : 'inactivo'
            }
        )
        usuarios.value = usuarios.value.map((u) => {
            if(u.id === usuario.id){
                return response.data
            } 

            return u
        })
        
    } catch (error) {
        console.log(error)
    } finally {
        activandoUsuarios.value = false;
    }

}

</script>

<style lang="scss" scoped>

</style>