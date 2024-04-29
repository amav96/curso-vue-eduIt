import { defineStore } from 'pinia'

export const useUsuarioStore = defineStore('usuario', {
    state: () => ({
       usuario: null,
       displaySidebar: true
    }),
    getters: {
    //   doubleCount: (state) => state.count * 2,
    },
    actions: {
        openSideBar() {
            this.displaySidebar  = !this.displaySidebar
        },
        setUsuario(data){
            this.usuario = data
        }
    },
})