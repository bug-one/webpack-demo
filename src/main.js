import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import Home from './views/home.vue'
import Login from './views/login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component:Home
    },
    {
        path: '/login',
        component:Login
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render(h) {
        return h(app)
    }
})