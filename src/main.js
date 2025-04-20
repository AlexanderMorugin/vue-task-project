import { createApp } from 'vue';

import App from './App.vue';
import { myRouter } from './router';

import './style.css';

createApp(App).use(myRouter).mount('#app');
