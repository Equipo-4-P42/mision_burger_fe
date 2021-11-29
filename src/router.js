import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import SingUp from './components/SingUp.vue'
import Cards from './components/Cards.vue'

const routes = [
  {
    path:'/',
    name:'App',
    component: Cards
  },
  {
    path: '/home',
    name: 'Home',
    component: Cards
  },
  {
    path:'/user/login',
    name:'login',
    component:Login
  },
  {
    path:'/user/signUp',
    name:'singUp',
    component: SingUp
  }
  
];
  
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
