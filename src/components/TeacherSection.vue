<template>
    <div class="container my-4">
        <h2 class="text-center">Teachers</h2>
        <div class="btn-group" role="group" aria-label="Vertical radio toggle button group" v-if="store.selectedSubject !== null">
            <input type="radio" class="btn-check d-inline-block" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" @click="callTeachersApiFilterReviews">
            <label class="btn btn-outline-danger" for="vbtn-radio1">Numero recensioni più alto</label>
            <input type="radio" class="btn-check d-inline-block" name="vbtn-radio" id="vbtn-radio2" autocomplete="off" @click="callTeachersApiFilterRate">
            <label class="btn btn-outline-danger" for="vbtn-radio2">Voto più alto</label>
            <input type="radio" class="btn-check d-inline-block" name="vbtn-radio" id="vbtn-radio3" @click="$emit('callApi')">
            <label class="btn btn-outline-danger" for="vbtn-radio3">X</label>
        </div>
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
        callTeachersApiFilterReviews(){

            const params = {}

            if (store.selectedSubject !== null) {
                params.subject_id = store.selectedSubject
            }

            axios.get('http://127.0.0.1:8000/api/filtereviews', {params})
            .then(res => {
            console.log(res.data.results)
            store.infoTeachers = res.data.results
            })
            .catch(function (error) {
                console.error(error);
            });
        },
        callTeachersApiFilterRate(){

            const params = {}

            if (store.selectedSubject !== null) {
                params.subject_id = store.selectedSubject
            }

            axios.get('http://127.0.0.1:8000/api/filterate', {params})
            .then(res => {
            console.log(res.data.results)
            store.infoTeachers = res.data.results
            })
            .catch(function (error) {
                console.error(error);
            });
        }
    },
}
</script>
<style lang="scss">
    
</style>