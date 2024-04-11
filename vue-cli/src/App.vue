<template>
    <!-- <Interpolacion/> -->
    <!-- <Directivas/> -->
    <!-- <Bind/> -->
    <!-- <Eventos/>  -->
    <!-- <VModel> -->

    <!-- slots -->
    
    <!-- <CardSimple>
      Ingeniera
    </CardSimple> -->

    <!-- <CardNombrado>
      <template v-slot:nombre >
        Julieta Gomez
      </template>
      <template v-slot:ocupacion>
        Arquitecta
      </template>
    </CardNombrado> -->
    <!-- <Layout>
      <div>
        Banner 1
      </div>
      <div>
        Banner 2
      </div>
      <div>
        Banner 3
      </div>
    </Layout> -->

    <!-- <Padre/> -->


    <!-- <UsuarioList
    :usuarios="usuarios"
    /> -->

    <!-- <UsuarioList
    :usuarios="usuarios"
    v-slot="{ usuario }"
    >
      <div class="flex flex-col m-4">
        <Usuario
        :nombre="usuario.nombre"
        :apellido="usuario.apellido"
        :edad="usuario.edad"
        :ocupacion="usuario.ocupacion"
        :lenguages="usuario.lenguages"
        :avatar="usuario.avatar"
        />
        <button 
        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        @click="eliminarUsuario(usuario)"
        >
        Eliminar
        </button>
      </div>
    </UsuarioList> -->

    <!-- <CustomDirectivas/> -->
    <Navbar/>
    <router-view class="p-2"/>
</template>

<script setup>
import Interpolacion from './components/Interpolacion.vue'
import Navbar from './components/Navbar.vue'
import Directivas from './components/Directivas.vue'
import Bind from './components/Bind.vue'
import Eventos from './components/Eventos.vue'
import VModel from  './components/VModel.vue'
import CardSimple from './components/Slots/CardSimple.vue'
import CardNombrado from './components/Slots/CardNombrado.vue'
import Layout from './components/Slots/Layout.vue'
import Padre from './components/Props/Padre.vue'
import UsuarioList from './components/Slots/UsuarioList.vue'
import usuarios from './assets/usuarios.json'
import Usuario from './components/Slots/Usuario.vue'
import CustomDirectivas from './components/CustomDirectivas.vue'

const eliminarUsuario = (data) => {
  console.log(data)
}

</script>


<style scoped>

</style>
