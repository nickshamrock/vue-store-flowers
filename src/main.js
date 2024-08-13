import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import CatalogPage from './pages/CatalogPage.vue';
import HomePage from './pages/HomePage.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogPage
    }
  ],

  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  }
});

const app = createApp(App);
app.use(router);
app.mount('#app');
