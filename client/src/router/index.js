import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'
import SingleNote from '../views/SingleNote.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/notes/:id',
    name: 'SingleNote',
    component: SingleNote
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
