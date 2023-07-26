import { createRouter, createWebHistory } from 'vue-router'

import FormVue from './components/FormVue.vue'
import TableVue from './components/TableVue.vue'

const routes = [
    {
        path: '/',
        name: 'Form',
        component: FormVue
    },
    {
        path: '/table',
        name: 'Table',
        component: TableVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
