import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingInView from '../views/LoginViews/SingInView.vue'
import UserView from '../views/LoginViews/UserView.vue'
import ContribuirView from '../views/CofreViews/ContribuirView.vue'
import EstoqueView from '../views/EstoqueViews/EstoqueView.vue'

import store from '../store/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/user",
      name: "user",
      component: UserView
    },
    {
      path: "/contribuir",
      name: "contribuir",
      meta: {
        requiresAuth: true
      },
      component: ContribuirView
    },
    {
      path: "/singin",
      name: "singin",
      component: SingInView
    
    },
    {
      path: "/estoque",
      name: "estoque",
      component: EstoqueView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && store.state.isLoggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router
