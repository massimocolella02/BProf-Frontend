import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routing/router';

createApp(App).use(router).mount('#app');
// createApp(App).mount('#app')
