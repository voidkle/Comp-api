import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BaseLayout',
      meta: {title: ""},
      component: defineAsyncComponent(() => import('../layout/BaseLayout.vue')),
      children:[
        {
          path: '',
          name: 'Home',
          meta: {title: "Home Transaction"},
          component: defineAsyncComponent(() => import('../views/HomeView.vue')),
        },
        {
          path: 'backpack',
          name:  'Master',
          meta: {title: "Data Master"},
          component: defineAsyncComponent(() => import('../views/MasterView.vue')),
        }
      ]
    },
  ]
})

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
