<template>
    <div>
        <h2 v-color="color" class="mb-4"> {{  mensaje  }}</h2>

        <input
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
        v-model="mensaje" 
        v-focus
        />


    </div>
</template>

<script setup>
import { ref } from 'vue';
const mensaje = ref("Directivas Personalizadas")

// const vFocus = (el) => {
//     el.focus()
// }

// const vColor = (el, { value }) => {
//     el.style.color = value || 'red'
// }

const color = ref('blue')

</script>

<style lang="scss" scoped>

</style>