import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../page/Home.vue'
import Contact from '../page/Contact.vue'
import Register from '../page/Register.vue'

const routerHistory = createWebHashHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/nowcheck',
      component: Register
    },
    {
      path: '/yxcrm',
      name: 'yxcrm',
      component: () => import('@/components/layout/HeaderBody.vue'),
      children: [
        {
        path: '/yxcrm/about',
        component: Home
      },{
        path: '/yxcrm/gk',
        component: Contact
      },{
        path: '/yxcrm/gk2',
        component: Home
      }]
    },



  ]
})
export default router