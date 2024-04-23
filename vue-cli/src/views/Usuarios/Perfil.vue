<template>
    <div 
    v-if="usuarioActual"
    class="card">
        <img 
        :src="usuarioActual.avatar">
        <div class="card-content">
          <h2> {{  usuarioActual.name }}</h2>
          <h2> {{  usuarioActual.email }}</h2>
        </div>
    </div>
</template>

<script setup>
import { useUsuario } from '../../composables/Usuario'
import { onMounted, ref } from 'vue'

const { 
    getUsuario,
    usuario
} = useUsuario();

const usuarioActual = ref(null)
onMounted(async () => {
    try {
        const { id } = usuario()
        const response = await getUsuario({ id})
        const [ usuarioServer ] = response.data
        usuarioActual.value = usuarioServer
    } catch (error) {
        
    }
})

</script>

<style scoped>

.card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.card {
  width: 300px;
}

.card img {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 10px;
}

</style>