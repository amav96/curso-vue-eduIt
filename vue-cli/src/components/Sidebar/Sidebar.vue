<template>
    <aside 
    v-if="displaySidebar"
    class="left-0 z-10 w-64 h-screen"
    
    >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div v-if="usuario" class="font-bold text-lg flex flex-row gap-4">
                <div>
                    {{usuario.name}}
                </div>
                <div class="max-w-10">
                    <img :src="usuario.avatar" />
                </div>
            </div>
            <ul class="space-y-2 font-medium">
                <li
                v-for="(m, index) in menu"
                :key="index"
                >
                    <Item
                    :title="m.title"
                    :route-name="m.routeName"
                    :params="m.params ?? null"
                    :icon="m.icon"
                    />
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { onMounted, ref, toRefs } from 'vue';
import Item from './Item.vue';
import { useUsuario } from '../../composables/Usuario';
import { useUsuarioStore } from '../../stores/usuario'
import { storeToRefs } from 'pinia';

const usuarioStore = useUsuarioStore()
const { displaySidebar, usuario } = storeToRefs(usuarioStore)



const usuarioAutenticado = ref(null)
onMounted(() => {
    usuarioAutenticado.value = usuario.value
    if(usuarioAutenticado.value){
        menu.value = menu.value.map((m) => {
            if(m.routeName === 'Mi-perfil'){
                return {
                    ...m,
                    params: {
                        usuario_id: usuarioAutenticado.value.id
                    }
                }
            } 
            return m
        })

        menu.value.push({
            title: 'Salir',
            routeName: 'Logout',
            icon: 'fa fa-times-circle'
        })
    }
    
})

const menu = ref([
        {
            title: 'Home',
            routeName: 'Home',
            icon: 'fa fa-home'
        },
        {
            title: 'Usuarios',
            routeName: 'Usuarios',
            icon: 'fa fa-user'
        },
        {
            title: 'Bind',
            routeName: 'Bind',
            icon : 'fa fa-book'
        },
        {
            title: 'Interpolacion',
            routeName: 'Interpolacion',
            icon : 'fa fa-book'
        },
        {
            title: 'Directivas',
            routeName: 'Directivas',
            icon : 'fa fa-book'
        },
        {
            title: 'Eventos',
            routeName: 'Eventos',
            icon : 'fa fa-book'
        },
        {
            title: 'VModel',
            routeName: 'Home',
            icon : 'fa fa-book'
        },
        {
            title: 'Geoposicionar',
            routeName: 'geoposicionar',
            icon : 'fa fa-map-marker'
        },
        {
            title: 'Mi Perfil',
            routeName: 'Mi-perfil',
            icon: 'fa fa-user-circle'
        },
])

</script>

<style lang="scss" scoped>

</style>