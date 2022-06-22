import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './pages/ProductsList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
  ],
});

export default router;
