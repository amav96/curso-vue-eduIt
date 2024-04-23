<template>
    <aside 
    v-if="displaySidebar"
    class="left-0 z-10 w-64 h-screen"
    
    >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li
                v-for="(m, index) in menu"
                :key="index"
                >
                    <Item
                    :title="m.title"
                    :route-name="m.routeName"
                    :params="m.params ?? null"
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

const props = defineProps({
    displaySidebar: Boolean
})

const {
    usuario
} = useUsuario()

const usuarioAutenticado = ref(null)
onMounted(() => {
    usuarioAutenticado.value = usuario()
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
            routeName: 'Logout'
        })
    }
    
})

const { displaySidebar } = toRefs(props);

const menu = ref([
        {
            title: 'Home',
            routeName: 'Home'
        },
        {
            title: 'Usuarios',
            routeName: 'Usuarios'
        },
        {
            title: 'Bind',
            routeName: 'Bind'
        },
        {
            title: 'Interpolacion',
            routeName: 'Interpolacion'
        },
        {
            title: 'Directivas',
            routeName: 'Directivas'
        },
        {
            title: 'Eventos',
            routeName: 'Eventos'
        },
        {
            title: 'VModel',
            routeName: 'Home'
        },
        {
            title: 'Mi Perfil',
            routeName: 'Mi-perfil',
        },
])

</script>

<style lang="scss" scoped>

</style>