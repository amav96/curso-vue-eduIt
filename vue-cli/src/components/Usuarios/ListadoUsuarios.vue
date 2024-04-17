<template>
    <div style="overflow-x: auto;max-width: 520px;">
        <table  class="table-auto">
        <thead>
            <tr>
                <th class="px-4 py-2 text-emerald-600">Acciones</th>
                <th class="px-4 py-2 text-emerald-600">Id</th>
                <th class="px-4 py-2 text-emerald-600">Nombre</th>
                <th class="px-4 py-2 text-emerald-600">Email</th>
                <th class="px-4 py-2 text-emerald-600">Password</th>
                <th class="px-4 py-2 text-emerald-600">Avatar</th>
                <th class="px-4 py-2 text-emerald-600">Fecha</th>
            </tr>
        </thead>
        
        <tbody>
            <tr
            v-for="(usuario, index) in usuarios"
            :key=index
            class="border"
            >
                <td>
                    <button 
                    @click="eliminarUsuario(usuario, index)"
                    class="p-2 bg-red-400 text-white rounded-lg shadow w-20" >
                        Eliminar
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
                    {{ usuario.password }}
                </td>
                <td>
                    <img 
                    :src="usuario.avatar" alt="Placeholder Image">
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
const emit =  defineEmits(["eliminar"])

const props = defineProps({
    usuarios: Array
})

const { usuarios } = toRefs(props)

const eliminarUsuario = (usuario, index) => {
    emit("eliminar", { usuario, index})
}

</script>

<style lang="scss" scoped>

</style>