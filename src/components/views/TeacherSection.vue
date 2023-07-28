<template>
  <div class="container_sr">
    <div class="container_heading">
      <h2 class="heading">Professori</h2>
    </div>
    <div class="container_filters">
      <div class="selector_fil">
        <select class="select_fil" v-model="selectedReviewsOption" @change="onReviewsOptionChange()">
          <option value="">Seleziona un'opzione di ordinamento</option>
          <option value="reviews-up">Più recensioni</option>
          <option value="reviews-down">Meno recensioni</option>
        </select>
        <div class="box_icon">
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div class="selector_fil">
        <select class="select_fil" v-model="selectedRating" @change="onRatingChange()">
          <option value=""> Seleziona una valutazione </option>
          <option value="1">1 stella o più</option>
          <option value="2">2 stelle o più</option>
          <option value="3">3 stelle o più</option>
          <option value="4">4 stelle o più</option>
          <option value="5">5 stelle o più</option>
        </select>
        <div class="box_icon">
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>
    <div class="container_all_sub">
      <SingleCardComp v-for="(elem, index) in filteredTeachers" :detailsTeachers="elem" :key="'card-' + index" />
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
import SingleCardComp from '../SingleCardComp.vue';
import { store } from '../../storing/store';

export default {
  name: 'TeacherSection',
  data() {
    return {
      store,
      selectedReviewsOption: '',
      selectedRating: '',
    };
  },
  components: {
    SingleCardComp,
  },
  mounted() {
    this.callTeachersApi();
  },
  computed: {
    filteredTeachers() {
      if (this.selectedRating === '') {
        return this.store.infoTeachers;
      } else {

        return this.store.infoTeachers.filter((teacher) => teacher.averageRating >= parseInt(this.selectedRating));
      }
    },
  },
  methods: {
    callTeachersApi() {
      const params = {};

      if (store.selectedSubject !== null && store.sortBy == null) {
        params.subject_id = store.selectedSubject;
      } else if (store.selectedSubject !== null && store.sortBy == 'reviews') {
        params.subject_id = store.selectedSubject;
        params.sort = store.sortBy;
      } else if (store.selectedSubject !== null && store.sortBy == 'rating') {
        params.subject_id = store.selectedSubject;
        params.sort = store.sortBy;
      }

      axios
        .get('http://127.0.0.1:8000/api/teachers', { params })
        .then((res) => {
          console.log(res.data.results);
          store.infoTeachers = res.data.results;

          // calc and store the average rating for each teacher
          store.infoTeachers.forEach((teacher) => {
            let { reviews } = teacher;
            let numReviews = reviews.length;
            let sumOfRatings = 0;

            for (let review of reviews) {
              sumOfRatings += review.rate;
            }

            let averageRating = numReviews !== 0 ? Math.round(sumOfRatings / numReviews) : 0;

            teacher.averageRating = averageRating;

            console.log(numReviews);
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    onReviewsOptionChange() {
      if (this.selectedReviewsOption === 'reviews-up') {
        this.store.infoTeachers.sort((a, b) => b.reviews.length - a.reviews.length);
      } else if (this.selectedReviewsOption === 'reviews-down') {
        this.store.infoTeachers.sort((a, b) => a.reviews.length - b.reviews.length);
      }
    },
    onRatingChange() {
      this.$forceUpdate();
    },
  },
};
</script>
  
<style lang="scss">
.container_sr {
  position: relative;
  width: 100%;
  padding: 0 90px;
  margin: 3vw 0;

  @media only screen and (max-width: 900px) {
    padding: 0 4%;
  }

  .container_heading {
    margin-bottom: 2vw;

    .heading {
      color: #000;
      font-size: 2rem;
      font-weight: 600;
    }
  }

  .container_filters {
    width: 100%;
    margin: 1vw 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .selector_fil {
      margin-right: 1em;
      margin-bottom: 1em;
      display: flex;
      align-items: center;

      &:last-child {
        margin-right: 0;
      }

      .select_fil {
        appearance: none;
        height: 40px;
        padding: 0 16px;
        color: #000;
        background: #F6F6F6;
        border: 1px solid rgba(0, 0, 0, .2);
        border-right: none;
        outline: none;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        font-size: 1rem;
        font-weight: 500;
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .box_icon {
        color: #000;
        background: #F6F6F6;
        border: 1px solid rgba(0, 0, 0, .2);
        border-left: none;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        width: 40px;
        height: 40px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

  }

  .container_all_sub {
    width: 100%;
    display: grid;
    grid-gap: 60px;
    column-gap: 40px;
    grid-template-columns: repeat(4, 1fr);

    @media only screen and (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
  