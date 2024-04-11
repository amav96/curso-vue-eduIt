import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import Bind from './views/Bind.vue'
import CustomDirectivas from './views/CustomDirectivas.vue'
import Directivas from './views/Directivas.vue'
import Interpolacion from './views/Interpolacion.vue'
import VModel from './views/VModel.vue'
import Eventos from './views/Eventos.vue'

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
        },
        {
            path: '/Bind',
            component: Bind,
            name: 'Bind'
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

        
        
    ],
})

export default router;