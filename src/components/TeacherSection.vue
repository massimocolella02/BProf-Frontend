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
        
    },
}
</script>
<style lang="scss">
    
</style>