<template>
    <div class="flex flex-col">
        <div>
            BIND
        </div>

        <div 
        :style="`background:${background};`"
        :class="`p-${tamanoPadding}`"
         >
            Bind vue
        </div>

        <button
        @click="cambiarColor"
        class="p-2 bg-blue-200 ">
            Cambiar color 
        </button>
        
    </div>
</template>

<script setup>

import { ref } from 'vue'

const background = ref('red')
const tamanoPadding = ref(2)

const cambiarColor = () => {
    if(background.value === 'red'){
        background.value = 'blue'
        tamanoPadding.value = 4
    } else {
        background.value = 'red'
        tamanoPadding.value = 2
    }
}

</script>

<style scoped>

</style>