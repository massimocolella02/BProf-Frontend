<template>
    <div class="container my-4">
      <h2 class="text-center">Teachers</h2>
      <select class="form-select" v-model="store.sortBy" @change="callTeachersApi()">
        <option value="reviews-up" selected>Più recensioni</option>
        <option value="reviews-down" selected>Meno  recensioni</option>
      </select>
  
      <input type="radio" name="rating" id="one-star" @click="selectRating(1)"> 1 stella
      <input type="radio" name="rating" id="two-star" @click="selectRating(2)"> 2 stelle
      <input type="radio" name="rating" id="three-star" @click="selectRating(3)"> 3 stelle
      <input type="radio" name="rating" id="four-star" @click="selectRating(4)"> 4 stelle
      <input type="radio" name="rating" id="five-star" @click="selectRating(5)"> 5 stelle
  
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
          return this.store.infoTeachers.filter(
            (teacher) => teacher.averageRating === this.selectedRating
          );
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
  
              let averageRating = numReviews !== 0 ? sumOfRatings / numReviews : 0;
  
              teacher.averageRating = averageRating;
            });
          })
          .catch(function (error) {
            console.error(error);
          });
      },
      selectRating(rating) {
        this.selectedRating = rating;
      },
    },
  };
  </script>
  
  <style lang="scss">
  
  </style>
  