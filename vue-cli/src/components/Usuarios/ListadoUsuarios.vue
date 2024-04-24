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
                    class="p-2 bg-red-400 text-white rounded-lg shadow w-10" >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button 
                    @click="updateUser(usuario, index)"
                    class="p-2 bg-blue-400 text-white rounded-lg shadow w-10" >
                        <i class="fa fa-wrench" aria-hidden="true"></i>
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
const emit =  defineEmits(["eliminar", "actualizar"])

const props = defineProps({
    usuarios: Array
})

const { usuarios } = toRefs(props)

const deleteUser = (usuario, index) => {
    emit("eliminar", { usuario, index})
}

const updateUser = (usuario, index) => {
    emit("actualizar", { usuario, index})
}

</script>

<style lang="scss" scoped>

</style>