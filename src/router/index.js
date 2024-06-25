import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: "/user",
      name: "user",
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/LoginViews/UserView.vue')
    },
    {
      path: "/contribuir",
      name: "contribuir",
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/CofreViews/ContribuirView.vue')
    },
    {
      path: "/singin",
      name: "singin",
      component: () => import('../views/LoginViews/SingInView.vue')
    
    },
    {
      path: "/stock",
      name: "stock",
      component: () => import('../views/EstoqueViews/EstoqueView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()

  if (to.meta.requiresAuth && !store.isLogged) {
    next('/')
  } else if (to.matched.length === 0) {
    next('/') 
  } else {
    next() 
  }
})

export default router
