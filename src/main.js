import { createApp } from 'vue'
import App from './App.vue'
import router from './routing/router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app');
// createApp(App).mount('#app')
