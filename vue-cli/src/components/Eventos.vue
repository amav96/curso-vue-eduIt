<template>
    <div>
        <!-- <button
        @click.ctrl="eventos"
        class="bg-blue-200 p-2 rounded mr-2 button-color mt-2"
        >
         Click control
        </button> -->

        <form
        class="flex flex-col"
        @submit.prevent="enviarFormulario"
        
        >
            <input
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            placeholder="Nombre"
            v-focus
            >
            <input
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
            placeholder="Apellido"
            >
            <button
            type="submit"
            class="bg-blue-200 p-2 rounded mt-2"
            >
                Enviar formulario
            </button>
        </form>


    </div>
</template>

<script setup >

const eventos = (data) => {
    console.log(data)
}

const enviarFormulario = (evento) => {
    // evento.preventDefault()
    console.log(evento)
}

</script>

<style scoped>

</style>