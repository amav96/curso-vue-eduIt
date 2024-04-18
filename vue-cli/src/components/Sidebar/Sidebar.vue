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
                    />
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import Item from './Item.vue';

const props = defineProps({
    displaySidebar: Boolean
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
        title: 'Login',
        routeName: 'Login'
    },
])


</script>

<style lang="scss" scoped>

</style>