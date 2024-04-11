<template>
    <div style="height: 100vh" class="shadow p-4">
        <nav
        class="bg-gray-800 p-4 mb-4 w-full"
        >
            <div class="w-full mx-auto flex justify-between items-center" >
                <div class="text-white font-bold" >Logo </div>

                <div>
                    <ul class="flex space-x-4">
                        <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">About</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">Services</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <slot> Contenido de la aplicacion </slot>
        
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>