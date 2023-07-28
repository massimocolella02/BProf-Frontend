<template>
  <!-- <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{clickable: true,}" 
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
}" :modules="modules" class="mySwiper">
    <swiper-slide v-for="(elem, index) in 4" :key="index">
      <img src="/img/black/bprof_logo_black.png" alt="">
    </swiper-slide>
  </swiper> -->

  <div class="hero">
    <div class="container_heading">
      <h1 class="heading">Trova subito il tuo insegnante perfetto</h1>
    </div>
    <div class="container_search" :class="{ dpd_active: dpdMenuVisible }">
      <div class="overlay" :class="{ dpd_active: dpdMenuVisible }" @click="hideDpdMenu"></div>
      <div class="container_field" :class="{ dpd_active: dpdMenuVisible }">
        <div class="box_icon_field box_icon_left" :class="{ dpd_active: dpdMenuVisible }" @click="toggleDpdMenu">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" class="input_search" placeholder="Cosa vuoi imparare?" v-model="searchBar"
          @click="toggleDpdMenu">
        <div class="box_icon_field box_icon_right" :class="{ dpd_active: dpdMenuVisible }">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div class="container_subjects" v-if="dpdMenuVisible" @click.outside="hideDpdMenu">
          <ul class="subjects_list">
            <!-- <li class="subject_item" v-for="(elem, index) in subjects" :key="index" @click="changeSub(elem.id)">{{ elem.name }}</li> -->
            <li class="subject_item" v-for="(elem, index) in filteredSubjects" :key="index">
              <router-link to="teachers" class="subject_item" @click="changeSub(elem.id)">{{ elem.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { store } from '../storing/store';

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
  data() {
    return {
      store,
      subjects: '',
      searchBar: "",
      dpdMenuVisible: false,
    }
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  methods: {
    toggleDpdMenu() {
      this.dpdMenuVisible = !this.dpdMenuVisible;
    },
    hideDpdMenu() {
      this.dpdMenuVisible = false;
    },
    callSubjects() {
      axios.get('http://127.0.0.1:8000/api/subjects').then(res => {
        this.subjects = res.data.results;
      })
    },
    changeSub(i) {
      store.selectedSubject = i;
    },
  },
  created() {
    this.callSubjects();
  },
  computed: {
    filteredSubjects() {
      // Utilizza il metodo filter per ottenere solo gli elementi che corrispondono alla ricerca
      return this.subjects.filter((elem) =>
        elem.name.toLowerCase().includes(this.searchBar.toLowerCase())
      );
    },
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

ul {
  margin: 0 !important;
  padding: 0 !important;
  padding-left: 0 !important;
}


.hero {
  position: relative;
  top: 0;
  width: 100%;
  aspect-ratio: 25 / 9;
  padding: 60px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #89CE94;

  @media only screen and (max-width: 900px) {
    aspect-ratio: 16 / 9;
    padding: 2% 4%;
  }

  .container_heading {
    width: 50%;
    margin-bottom: 30px;
    text-align: center;

    @media only screen and (max-width: 900px) {
      width: 100%;
    }

    .heading {
      color: #000;
      font-size: 4rem;
      font-weight: 500;

      @media only screen and (max-width: 900px) {
        font-size: 2.5rem;
      }
    }
  }

  .container_search {
    width: 30%;
    border-radius: 32px;
    outline: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;

    .overlay {
      position: fixed;
      z-index: 9999999999;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(3px);
      display: none;
    }

    .dpd_active.overlay {
      display: block;
    }

    @media only screen and (max-width: 900px) {
      width: 70%;
    }

    .container_field {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      .box_icon_field {
        width: 90px;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
      }

      .box_icon_left {
        border-top-left-radius: 32px;
        border-bottom-left-radius: 32px;
      }

      .box_icon_left.dpd_active {
        border-bottom-left-radius: 0;
      }

      .box_icon_right {
        border-top-right-radius: 32px;
        border-bottom-right-radius: 32px;
      }

      .box_icon_right.dpd_active {
        border-bottom-right-radius: 0;
      }

      .input_search {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: #fff;
      }

      .container_subjects {
        position: absolute;
        z-index: 10;
        top: 60px;
        left: 0;
        width: 100%;
        height: auto;
        max-height: 300px;
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;
        overflow-y: auto;
        background: #fff;
        outline: 1px solid #000;

        .subjects_list {
          list-style: none;
          list-style-type: none;
          width: 100%;
          display: flex;
          flex-direction: column;

          .subject_item {
            text-decoration: none;
            color: #000;
            width: 100%;
            height: 40px;
            padding: 0 20px;
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;

            &:last-child {
              border-bottom-left-radius: 32px;
              border-bottom-right-radius: 32px;
            }

            &:hover {
              background: #dedede;
            }
          }
        }
      }

      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        border-radius: 10px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #89CE94;
        border-radius: 10px;
      }
    }

    .dpd_active.container_field {
      z-index: 99999999999;
    }
  }

  .container_search.dpd_active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

}
</style>
  