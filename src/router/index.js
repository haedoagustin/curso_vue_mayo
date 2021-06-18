import Vue from 'vue'
import VueRouter from 'vue-router'
import ListadoDeApis from '../views/ListadoDeApis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/listado_de_apis',
    name: 'Listado de APIs',
    component: ListadoDeApis
  },
  {
    path: '/crear_persona',
    name: 'Crear persona',
    // route level code-splitting
    // this generates a separate chunk (CrearPersona.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CrearPersona" */ '../views/CrearPersona.vue')
  },
  {
    path: '/listado_de_personas',
    name: 'Listado de personas',
    // route level code-splitting
    // this generates a separate chunk (ListadoDePersonas.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ListadoDePersonas" */ '../views/ListadoDePersonas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
