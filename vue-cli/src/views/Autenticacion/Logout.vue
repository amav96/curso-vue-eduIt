<template>
    <div class="w-full rounded  shadow-xl">
        <div class="px-6 py-4 text-left">
            <div class="font-bold text-xl mb-2" >
                Cerrando sesión
            </div>
        </div>
    </div>
</template>

<script setup>

import { useUsuario } from '../../composables/Usuario'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const {
    logout,
    usuario
} = useUsuario();

onMounted(() => {
    logout()
    router.push({name: 'Login'})
})

</script>

<style lang="scss" scoped>

</style>