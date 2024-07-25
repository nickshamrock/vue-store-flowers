import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TestRouter from './components/TestRouter.vue';
import App from './App.vue';

const router = createRouter({
  routes: [
    {
      path: '/test',
      component: TestRouter
    }
  ],
  history: createWebHistory()
});

const app = createApp(App);
app.use(router);
app.mount('#app');
