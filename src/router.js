import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import SingUp from './components/SingUp.vue'
import Cards from './components/Cards.vue'
import Reservation from './components/Reservation.vue'
import Delivery from './components/Delivery.vue'

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
  },
  {
    path:'/user/reservation',
    name:'reservation',
    component: Reservation
  },
  {
    path:'/user/delivery',
    name:'Delivery',
    component: Delivery
  }
  
];
  
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
