<template>
    <div class="container mt-4">
        <h2 class="text-center">Categorie</h2>
        <div class="row m-auto justify-content-center">
            <div class="">
                <button type="button" class="btn btn-success me-2 my-1" v-for="(elem, index) in subjects" :key="index" @click="changeSub(elem.id); $emit('callTeachers')">{{ elem.name }}</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { store } from '../storing/store';

export default {
    name: 'CategoryComp',
    data() {
        return {
            subjects: '',
            store
        }
    },
    methods: {
        callSubjects(){
            axios.get('http://127.0.0.1:8000/api/subjects').then( res => {
                this.subjects = res.data.results;
            })
        },
        changeSub(i){
            store.selectedSubject = i;
        }
    },
    created() {
        this.callSubjects();
    },
}
</script>
<style lang="scss">
    
</style>