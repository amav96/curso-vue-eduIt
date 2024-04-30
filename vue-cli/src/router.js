import { createWebHistory, createRouter, routerKey } from 'vue-router'

import Home from './views/Home.vue'
import Bind from './views/Bind.vue'
import CustomDirectivas from './views/CustomDirectivas.vue'
import Directivas from './views/Directivas.vue'
import Interpolacion from './views/Interpolacion.vue'
import VModel from './views/VModel.vue'
import Eventos from './views/Eventos.vue'
import Login from './views/Autenticacion/Login.vue'

import { useUsuarioStore } from './stores/usuario'
import { storeToRefs } from 'pinia'
import { USUARIO_LS } from './utils/Key'
import { useUsuario } from './composables/Usuario'

const { 
    // setUsuario,
    getUsuario
} = useUsuario();

const guard = async (to, from, next) => {

    const usuarioStore = useUsuarioStore()
    const { setUsuario } =  usuarioStore
    const { usuario } =  storeToRefs(usuarioStore)
    const usuarioActual = usuario.value
  
    if(to.meta.requireAuth && !usuarioActual){

        let usuarioLs = localStorage.getItem(USUARIO_LS)
        if(usuarioLs){
            usuarioLs = JSON.parse(usuarioLs)

            const response = await getUsuario({
                email : usuarioLs.email,
            })
            const [usuarioServer] = response.data
            setUsuario(usuarioServer)
            next();   
        } else{
            router.push({name: 'Logout'})
        }


        
        //
    } else {
        next();
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            redirect: '/Home',
        },
        {
            path: '/Home',
            component: Home,
            name: 'Home',
            meta: { requireAuth: true, gate: 'entrar_home' },
            // beforeEnter: guard
        },
        {
            path: '/Bind',
            component: Bind,
            name: 'Bind',
        },
        {
            path: '/CustomDirectivas',
            component: CustomDirectivas,
            name: 'CustomDirectivas'
        },
        {
            path: '/Directivas',
            component: Directivas,
            name: 'Directivas'
        },
        {
            path: '/Interpolacion',
            component: Interpolacion,
            name: 'Interpolacion'
        },
 
        {
            path: '/VModel',
            component: VModel,
            name: 'VModel'
        },

        {
            path: '/Eventos',
            component: Eventos,
            name: 'Eventos'
        },

        {
            path: '/usuarios',
            meta: {
                requireAuth: true,
            },
            component: () => import('./views/Usuarios/Usuarios.vue') ,
            name: 'Usuarios'
        },

        {
            path: '/geoposicionar',
            component: () => import('./views/Geoposicionar.vue') ,
            name: 'geoposicionar'
        },

        {
            path: '/usuario/:usuario_id',
            component: () => import('./views/Usuarios/SaveUsuario.vue') ,
            name: 'SaveUsuario'
        },

        {
            path: '/usuario/:usuario_id/perfil',
            component: () => import('./views/Usuarios/Perfil.vue') ,
            name: 'Mi-perfil'
        },

        {
            path: '/autenticacion/login',
            component: Login,
            name: 'Login'
        },

        {
            path: '/autenticacion/logout',
            component: () => import('./views/Autenticacion/Logout.vue') ,
            name: 'Logout'
        },

    ],
})

router.beforeEach((to, from, next) => {
    guard(to, from, next)
})


export default router;