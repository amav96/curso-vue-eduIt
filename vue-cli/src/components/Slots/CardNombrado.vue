<template>
    <div class="max-w-sm rounded overflow-hidden shadow-xl">
        <div class="px-6 py-4 text-left">
            <div class="font-bold text-xl mb-2" >
                <slot name="nombre" >
                Maria Martinez
                </slot>
            </div>
            <p class="text-gray-700 text-base" >
                <slot name="ocupacion">
                Desarrolladora de software 
                </slot>
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>