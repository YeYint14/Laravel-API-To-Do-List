import '@popperjs/core';
import 'bootstrap';

// Import Vue 3
import { createApp } from 'vue';
import App from './components/app.vue';

import axios from 'axios';
window.axios = axios;

const app = createApp(App);
app.mount('#app');
