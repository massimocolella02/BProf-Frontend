<template>
    <div class="container my-4">
        <h2 class="text-center">Teachers</h2>
        <select class="form-select" v-model="store.sortBy" @change="callTeachersApi()">
            <option value="reviews" selected>Numero di recensioni</option>
            <option value="rating">Media voti più alta</option>
        </select>
        <div class="row">
            <SingleCardComp v-for="(elem, index) in store.infoTeachers" :detailsTeachers="elem" :key="'card-'+index"/>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import SingleCardComp from '../SingleCardComp.vue';
import { store } from '../../storing/store';
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
        this.callTeachersApi()
    },
    methods: {
        callTeachersApi(){

            
            const params = {}

            if (store.selectedSubject !== null && store.sortBy == null ) {
                params.subject_id = store.selectedSubject

            }else if( store.selectedSubject !== null && store.sortBy == 'reviews' ){
                params.subject_id = store.selectedSubject
                params.sort = store.sortBy
                
            }else if( store.selectedSubject !== null && store.sortBy == 'rating' ){
                params.subject_id = store.selectedSubject
                params.sort = store.sortBy
            }

            axios.get('http://127.0.0.1:8000/api/teachers', {params})
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