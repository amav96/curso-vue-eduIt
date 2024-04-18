import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import Bind from './views/Bind.vue'
import CustomDirectivas from './views/CustomDirectivas.vue'
import Directivas from './views/Directivas.vue'
import Interpolacion from './views/Interpolacion.vue'
import VModel from './views/VModel.vue'
import Eventos from './views/Eventos.vue'
import Login from './views/Autenticacion/Login.vue'
import Usuarios from './views/Usuarios/Usuarios.vue'


let usuario = { permiso: 'entrar_home'};

const guard = (to, from, next) => {
    if(to.meta.requireAuth && !usuario){
        next("VModel")
    } else if(usuario) {
        if(to.meta.gate){
            if(usuario.permiso === to.meta.gate){
                console.log("tiene permiso")
                next()
            } else {
                next("Bind")
            }
        }
        
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
            path: '/autenticacion/login',
            component: Login,
            name: 'Login'
        },

        {
            path: '/usuarios',
            component: () => import('./views/Usuarios/Usuarios.vue') ,
            name: 'Usuarios'
        },

        {
            path: '/usuario/:usuario_id',
            component: () => import('./views/Usuarios/SaveUsuario.vue') ,
            name: 'SaveUsuario'
        },

    ],
})

// router.beforeEach((to, from, next) => {
//     guard(to, from, next)
// })


export default router;