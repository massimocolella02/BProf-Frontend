<template>
    <div class="container my-4">
        <h2 class="text-center">Teachers</h2>
        <select class="form-select" v-if="store.selectedSubject !== null" v-model="store.sortBy" @change="$emit('callApi')">
            <option value="null" selected>Ordina per</option>
            <option value="reviews">Numero di recensioni</option>
            <option value="rating">Media voti più alta</option>
        </select>
        <div class="row">
            <SingleCardComp v-for="(elem, index) in store.infoTeachers" :detailsTeachers="elem" :key="'card-'+index"/>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { store } from '../storing/store';
import SingleCardComp from './SingleCardComp.vue';
export default {
    name:'TeacherSection',
    data() {
        return {
            store
        }
    },
    components:{
        SingleCardComp
    },
    mounted() {
        console.log()
    },
    methods: {
        // callTeachersApiFilterReviews(){

        //     const params = {}

        //     if (store.selectedSubject !== null) {
        //         params.subject_id = store.selectedSubject
        //     }

        //     axios.get('http://127.0.0.1:8000/api/filtereviews', {params})
        //     .then(res => {
        //     console.log(res.data.results)
        //     store.infoTeachers = res.data.results
        //     })
        //     .catch(function (error) {
        //         console.error(error);
        //     });
        // },
        // callTeachersApiFilterRate(){

        //     const params = {}

        //     if (store.selectedSubject !== null) {
        //         params.subject_id = store.selectedSubject
        //     }

        //     axios.get('http://127.0.0.1:8000/api/filterate', {params})
        //     .then(res => {
        //     console.log(res.data.results)
        //     store.infoTeachers = res.data.results
        //     })
        //     .catch(function (error) {
        //         console.error(error);
        //     });
        // }
    },
}
</script>
<style lang="scss">
    
</style>