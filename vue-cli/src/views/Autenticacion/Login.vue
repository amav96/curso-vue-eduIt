<template>
    <div style="height: 60vh;">
        
        <form 
        @submit.prevent="iniciarSesion"
        class="h-full flex flex-col shadow-lg rounded-lg justify-center items-center gap-4">
        
            <div v-if="sesionIniciadaCorrectamente"  class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div class="flex">
                    <p class="font-bold">Has iniciado sesión correctamente</p>
                </div>
            </div>    
        
            <div class="text-xl text-bold">
                Iniciar sesión
            </div>
            <div>
                <input 
                class="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
                placeholder="Email"
                v-model="formulario.email"
                />
            </div>
            <div>
                <input 
                class="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
                placeholder="Contraseña"
                v-model="formulario.password"
                type="password"
                />
            </div>
            <div>
                <button 
                type="submit"
                class="p-2 bg-blue-400 text-white rounded-lg shadow w-48" >
                    {{ iniciandoSesion ? 'Cargando' : 'Entrar' }} 
                </button>
            </div>


            
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'

const router = useRouter();

const formulario = ref({
    email: 'Rodrigo95@gmail.com',
    password: 'yICGdn31sPL7vts'
})

const sesionIniciadaCorrectamente = ref(false)
const iniciandoSesion = ref(false)
const iniciarSesion = async () => {

    try {
        iniciandoSesion.value = true
        const url = "https://661d915898427bbbef0225b3.mockapi.io/api/v1/users"
        const response = await axios.get(url,{ params: { 
            email : formulario.value.email,
            password: formulario.value.password
        }});
        if(response.data.length > 0){
            sesionIniciadaCorrectamente.value = true

            setTimeout(() => {
                router.push({name: 'Home'})
            }, 2000);
         
        }
    } catch (error) {
        console.log(error)
    } finally {
        iniciandoSesion.value = false
    }
}

</script>

<style lang="scss" scoped>

</style>