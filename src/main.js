import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';
import App from './App.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: MainPage
    }
  ],

  history: createWebHistory()
});

const app = createApp(App);
app.use(router);
app.mount('#app');
