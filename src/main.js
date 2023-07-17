import { createApp } from 'vue'
import App from './App.vue'
import router from './routing/router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swiper from 'swiper';
import 'swiper/css'

createApp(App).use(router).mount('#app');
// createApp(App).mount('#app')
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      
    },
  });