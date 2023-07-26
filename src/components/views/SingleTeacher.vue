<template>
    <div class="container-fluid">
        <div class="card" v-for="(elem, index) in teacher" :key="index" style="width: 18rem;">
            <img v-if="elem.profile_picture !== null" :src="`http://127.0.0.1:8000/storage/${elem.profile_picture}`" class="card-img-top" :alt="elem.user.name">
            <img v-if="elem.profile_picture === null" src="../../assets/img/pp.jpg" class="card-img-top" alt="default profile picture">
            <div class="card-body">
                <p class="card-title"> {{ elem.user.name }} {{ elem.user.surname }} </p>
                
                
                <div class="mb-3 subl">
                    Materie:
                    <li class="list-inline" v-for="(materia, index) in elem.subjects" :key="index">
                        <i class="fa-solid fa-laptop-code me-2"></i>
                        {{ materia.name }}
                    </li>
                </div>
                
                <div class="mb-3">Descrizione:
                <p class="card-text">{{ elem.description }}</p>
                </div>

                <p class="card-text"> Città: {{ elem.city }}</p>
                <p class="card-text"> CAP: {{ elem.cap }}</p>
                <p class="card-text"> Indirizzo: {{ elem.address }}</p>
                <a v-if="elem.cv !== null" class="text-decoration-none" target="_blank" :href="`http://127.0.0.1:8000/storage/${elem.cv}`">Guarda Curriculum Vitae</a>
                <p class="card-text" v-if="elem.cv === null"> Nessun Curriculum Vitae disponibile</p>
                <p class="card-text"> Tariffa oraria: {{ elem.price }} € </p>
                <p class="card-text" v-if="elem.remote === 1"> Disponibile per lezioni in remoto</p>
                <p class="card-text" v-if="elem.remote === 0"> Non disponibile per lezioni in remoto</p>
            </div>

        </div>
        <div class="mt-4">
            <h3>Recensioni</h3>
            <div v-if="reviews && reviews.length > 0">
              <div v-for="(review, index) in reviews" :key="index" class="card mt-2">
                <div class="card-body">
                  <h5 class="card-title">Recensione {{ index + 1 }}</h5>
                  <p class="card-text">Descrizione: {{ review.description }}</p>
                </div>
              </div>
            </div>
            <div v-else>
              <p>Non ci sono recensioni disponibili per questo insegnante.</p>
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
    props: ['detailsTeachers'],
    components: {
    SendMessageComp,
    },
    data() {
        return {
            teacher: []
        }
    },
    mounted() {
        this.callApiSingleTeacher();

    },
    methods: {

        callApiSingleTeacher() {
        axios.get(`http://127.0.0.1:8000/api/teachers/${this.$route.params.id}`)
            .then(res => {
                this.teacher = res.data.results;
                // Chiamata API per ottenere le recensioni dell'insegnante
                axios.get(`http://127.0.0.1:8000/api/teachers/${this.$route.params.id}/reviews`)
                    .then(res => {
                        this.reviews = res.data.results;
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
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