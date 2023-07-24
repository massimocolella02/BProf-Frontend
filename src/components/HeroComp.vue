<template>
    <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
        clickable: true,
        }"
        :breakpoints="{
        '480': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '640': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '768': {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        }"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide v-for="(elem, index) in 4" :key="index">
            <img src="/img/black/bprof_logo_black.png" alt="">
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';

  import 'swiper/css/pagination';

  import { Pagination } from 'swiper/modules';

  export default {
    name: 'HeroComp',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>
<style lang="scss">
    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
</style>
  