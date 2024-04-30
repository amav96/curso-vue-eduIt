import { defineStore } from 'pinia'
import { USUARIO_LS } from '../utils/Key'

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
            localStorage.setItem(USUARIO_LS, JSON.stringify(this.usuario))
        }
    },
})