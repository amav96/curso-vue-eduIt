<template>
    <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="sm:ml-6 ">
                    <div class="flex space-x-4">
                            <div
                            @click="navegar('Home')"
                            class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Home
                            </div>

                            <div
                            @click="navegar('Bind')"
                            class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Bind
                            </div>

                            <div
                            @click="navegar('Interpolacion')"
                            class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Interpolacion
                            </div>

                            <div
                            @click="navegar('Directivas')"
                            class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Directivas
                            </div>

                            <div
                            @click="navegar('Eventos')"
                            class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            Eventos
                            </div>

                            <div
                            @click="navegar('VModel')"
                            class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                            >
                            VModel
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