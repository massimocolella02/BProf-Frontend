<template>
    <div class="container-fluid">
        <div class="card" v-for="(elem, index) in teacher" :key="index" style="width: 18rem;">
            <img :src="elem.profile_picture" class="card-img-top" :alt="elem.user.name">
            <div class="card-body">
                <p class="card-title">Nome e Cognome: {{ elem.name }}</p>
                <div class="mb-3">Descrizione:
                <p class="card-text">{{ elem.description }}</p>
                </div>
                
                <div class="mb-3 subl">
                    Materie:
                <li class="list-inline" v-for="(materia, index) in elem.subjects" :key="index">
                    <i class="fa-solid fa-laptop-code me-2"></i>
                    {{ materia.name }}
                </li>
                </div>

                <p class="card-text"> Città: {{ elem.city }}</p>
                <p class="card-text"> CAP: {{ elem.cap }}</p>
                <p class="card-text"> Indirizzo: {{ elem.address }}</p>
                <p class="card-text"> CV: {{ elem.cv }}</p>
                <p class="card-text"> Prezzo / ora: {{ elem.price }} € </p>
                <p class="card-text" v-if="elem.remote === 1"> Disponibile per lezioni in remoto</p>
                <p class="card-text" v-if="elem.remote === 0"> Non disponibile per lezioni in remoto</p>
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
    
.subl li:nth-child(odd){
    color: red;
}

.subl li:nth-child(even){
    color: blue;
}

</style>