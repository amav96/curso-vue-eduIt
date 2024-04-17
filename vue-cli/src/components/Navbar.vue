<template>
    <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-28 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="sm:ml-6 ">
                    <div class="flex flex-row flex-wrap gap-2">
                            <div
                            @click="navegar('Home')"
                            class="cursor-pointer bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Home
                            </div>

                            <router-link
                            to="Usuarios"
                            class="cursor-pointer bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Usuarios
                            </router-link>

                            <div
                            @click="navegar('Bind')"
                            class="cursor-pointer bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Bind
                            </div>

                            <div
                            @click="navegar('Interpolacion')"
                            class="cursor-pointer bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Interpolacion
                            </div>

                            <div
                            @click="navegar('Directivas')"
                            class="cursor-pointer bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Directivas
                            </div>

                            <div
                            @click="navegar('Eventos')"
                            class="cursor-pointer bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Eventos
                            </div>

                            <router-link
                            to="VModel"
                            class="cursor-pointer bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            VModel
                            </router-link>

                            <div
                            @click="navegar('Login')"
                            class="cursor-pointer bg-red-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Salir
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

const navegar = (nombreRuta) => {
    router.push({name: nombreRuta})
}

</script>

<style lang="scss" scoped>

</style>