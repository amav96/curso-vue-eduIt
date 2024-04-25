<template>
    <div style="overflow-x: auto;max-width: 100%;">
        <table  class="table-auto">
        <thead>
            <tr>
                <th class="px-4 py-2 text-emerald-600">Acciones</th>
               
                <th class="px-4 py-2 text-emerald-600">Id</th>
                <th class="px-4 py-2 text-emerald-600">Nombre</th>
                <th class="px-4 py-2 text-emerald-600">Email</th>
                <th class="px-4 py-2 text-emerald-600">Avatar</th>
                <th class="px-4 py-2 text-emerald-600">Estado</th>
                <th class="px-4 py-2 text-emerald-600">Fecha</th>
            </tr>
        </thead>
        
        <tbody>
            <tr
            v-for="(usuario, index) in usuarios"
            :key=index
            class="border"
            >
                <td class="flex flex-row justify-center items-center gap-2">
                    <button 
                
                    @click="deleteUser(usuario, index)"
                    :class="[
                        'p-2 text-white rounded-lg shadow w-10',
                        usuario.botonEliminarColor
                        ]" >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button 
                    @click="updateUser(usuario, index)"
                    class="p-2 bg-blue-400 text-white rounded-lg shadow w-10" >
                        <i class="fa fa-wrench" aria-hidden="true"></i>
                    </button>
                   <button 
                    @click="updateState(usuario, index)"
                    :class="[
                        'p-2 text-white rounded-lg shadow w-24',
                        usuario.colorEstado
                        ]" >
                        {{ usuario.estadoAccion }}
                    </button>
                   
                </td>
                
                <td>
                    {{ usuario.id }}
                </td>
                <td>
                    {{ usuario.name }}
                </td>
                <td>
                    {{ usuario.email }}
                </td>
                <td>
                    <img 
                    :src="usuario.avatar" alt="Placeholder Image">
                </td>
                <td  >
                    <span style="text-transform: capitalize;" >
                        <span 
                        :class="[
                            'text-xs font-medium me-2 px-2.5 py-0.5 rounded',
                            usuario.estadoClase
                            ]">
                        {{ usuario.estado }}
                        </span>
                    </span>
                
                </td>
                <td>
                    {{ usuario.createdAt.substr(0,10) }}
                </td>
            </tr>
        </tbody>
          
        </table>
    </div>
</template>

<script setup>
import { toRefs } from 'vue';
const emit =  defineEmits(["eliminar", "actualizar", "actualizar-estado"])

const props = defineProps({
    usuarios: Array
})

const { usuarios } = toRefs(props)

const deleteUser = (usuario, index) => {
    if(!usuario.puedeEliminar) return
    emit("eliminar", { usuario, index})
}

const updateUser = (usuario, index) => {
    emit("actualizar", { usuario, index})
}

const updateState = (usuario, index) => {
    emit("actualizar-estado", { usuario, index})
}

</script>

<style lang="scss" scoped>

</style>