<template>
    <div class="container-fluid">
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(elem, index) in 4" :key="index">
                    <img src="/img/black/bprof_logo_black.png" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeroComp',
    data() {
        return {
            
        }
    },
}
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
  