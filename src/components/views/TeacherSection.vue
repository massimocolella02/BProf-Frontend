<template>
    <div class="container my-4">
      <h2 class="text-center">Professori</h2>
      <select class="form-select" v-model="selectedReviewsOption" @change="onReviewsOptionChange()">
        <option value="" >Seleziona un'opzione</option>
        <option value="reviews-up">Più recensioni</option>
        <option value="reviews-down">Meno recensioni</option>
      </select>
  
      <select class="form-select" v-model="selectedRating" @change="onRatingChange()">
        <option value="">Seleziona una valutazione</option>
        <option value="1">1 stella o più</option>
        <option value="2">2 stelle o più</option>
        <option value="3">3 stelle o più</option>
        <option value="4">4 stelle o più</option>
        <option value="5">5 stelle o più</option>
      </select>
  
      <div class="row">
        <SingleCardComp
          v-for="(elem, index) in filteredTeachers"
          :detailsTeachers="elem"
          :key="'card-'+index"
        />
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
            selectedRating: null,
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
        if (this.selectedRating === null) {
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

</style>
  