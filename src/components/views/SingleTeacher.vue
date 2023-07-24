<template>
    <div class="container-fluid">
        <div class="card" v-for="(elem, index) in teacher" :key="index" style="width: 18rem;">
            <img :src="elem.profile_picture" class="card-img-top" :alt="elem.user.name">
            <div class="card-body">
                <h5 class="card-title">{{ elem.name }}</h5>
                <p class="card-text">{{ elem.description }}</p>
                <p class="card-text">Materie: <span v-for="(materia, index) in elem.subjects" :key="index">{{ materia.name }}/</span></p>
                <p class="card-text">{{ elem.city }}</p>
            </div>
        </div>
        <SendMessageComp :idTeacher="$route.params.id"/>
    </div>
</template>

<script>
import SendMessageComp from '../SendMessageComp.vue';
import axios from 'axios';

export default {
    name: 'SingleTeacher',
    components: {
    SendMessageComp,
    },
    data() {
        return {
            teacher: []
        }
    },
    mounted() {
        this.callApiSingleTeacher()
    },
    methods: {
        callApiSingleTeacher(){

            axios.get(`http://127.0.0.1:8000/api/teachers/${this.$route.params.id}`)
                .then(res => {
                    this.teacher = res.data.results
                    console.log(this.teacher)
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