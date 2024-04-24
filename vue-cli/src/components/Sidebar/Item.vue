<template>
    <li
    @click="navegar"
    >
        <div 
        class="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <i 
            v-if="icon"
            :class="icon">
            </i>    
            <span class="ms-3">{{ title }}</span>
        </div>
    </li>
</template>

<script setup>
import { onMounted, toRefs } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps({
    title: String,
    routeName: String,
    params: Object,
    icon: String
})

const { title, routeName, params, icon } = toRefs(props)

const navegar = () => {
    router.push({ name: routeName.value, params: params.value })
}

</script>

<style scoped>

</style>