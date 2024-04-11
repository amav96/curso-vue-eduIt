<template>
    <div>
        <div
        v-if="activo"
        >
            Estoy activo
        </div>
        <div
        v-else
        >   
         No estoy activo
        </div>

        <div
        v-show="activo"
        >
            Activo con v-show
        </div>
        <h5>Recorriendo array simple</h5>
        <ul>
            <li
            v-for="(item, index) in arrayFrutas"
            :key="index"
            >
                {{ item }}
            </li>
        </ul>

        <h5>Recorriendo array de objetos</h5>
        <ul>
            <li
            v-for="(item, index) in arrayObjetos"
            :key="index"
            class="flex flex-row"
            >
                <div>
                    {{ item.title }}
                </div>
                <div>
                    {{  item.icon }}
                </div>
            </li>
        </ul>
        
    </div>
</template>

<script setup >

import { ref } from 'vue'

const activo = ref(false)

const arrayFrutas = ["🗻","🗼", "🗽", "🗾", "🗿","😀","😁"]
const arrayObjetos = [
    {
        title: 'Montaña',
        icon : '🗻',
    },
    {
        title: 'Torre',
        icon : '🗼',
    },
    {
        title: 'Estatua',
        icon : '🗽',
    }
   
]

</script>

<style scoped>

</style>