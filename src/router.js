import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './components/views/LoginPage.vue'
import RegisterationPage from './components/views/RegisterationPage.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/login', component: LoginPage},
    {path: '/register', component: RegisterationPage},
]

const router = new VueRouter({
    made:'history',
    routes
})

export default router;