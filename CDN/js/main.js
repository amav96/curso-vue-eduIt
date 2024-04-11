const { createApp, ref } = Vue;

createApp({

    setup(){

        const mensaje = ref('Proyecto con CDN')
        const mensajeNoReactivo = 'Proyecto con CDN'
        const mostrarAlerta = () => {
            alert("Javscript normal")
        }

        return {
            mensaje,
            mostrarAlerta
        }
    }

}).mount("#app")


new Vue({
    el: '#app',
    setup() {
        const mensaje = Vue.ref('Proyecto con CDN');
        const mensajeNoReactivo = 'Proyecto con CDN';

        const mostrarAlerta = () => {
            alert('Javascript normal');
        };

        return {
            mensaje,
            mostrarAlerta,
        };
    },
});

// document.getElementById("btnMensaje").addEventListener("click", function(){
//     alert("Javscript normal")
// })
