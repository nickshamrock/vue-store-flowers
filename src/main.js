import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/router-components/Main/MainPage.vue';
import App from './App.vue';
import CatalogPage from './components/router-components/Catalog/CatalogPage.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: MainPage
    },

    {
      path: '/catalog',
      component: CatalogPage
    }
  ],

  history: createWebHistory()
});

const app = createApp(App);
app.use(router);
app.mount('#app');
