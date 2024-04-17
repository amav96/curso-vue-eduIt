<template>
  <div class="home">
    <h1 class="mb-3" > Home </h1>
    <div class="flex flex-row my-2 gap-2">
      <div 
      @click="router.go(-1)"
      class="bg-blue-200 p-3 text-black rounded-lg shadow" >
      Atras
     </div>
     <div 
      @click="router.replace({name: 'Home', params : { nombre: 'Sofia'}})"
      class="bg-blue-200 p-3 text-black rounded-lg shadow" >
      Reemplazar
     </div>

    </div>
    <div class="card-container">
      <div class="card">
        <img src="https://avatar.iran.liara.run/public/69" alt="Placeholder Image">
        <div class="card-content">
          <h2>Vue</h2>
          <p>Framework javascript</p>
        </div>
      </div>
      <div class="card">
        <img src="https://avatar.iran.liara.run/public/22" alt="Placeholder Image">
        <div class="card-content">
          <h2>Vue Router</h2>
          <p>Navegacion SPA.</p>
        </div>
      </div>
      <div class="card">
        <img src="https://avatar.iran.liara.run/public/60" alt="Placeholder Image">
        <div class="card-content">
          <h2>Vuex / Pinia</h2>
          <p>Estado global</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onUpdated } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
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