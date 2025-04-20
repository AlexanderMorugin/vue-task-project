import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import New from './views/New.vue';
import Tasks from './views/Tasks.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/new', component: New },
  { path: '/tasks', component: Tasks },
  { path: '/:notFound(.*)', component: NotFound },
];

export const myRouter = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
