<template>
    <form @submit.prevent="getData()">
        <h2>Invia un messaggio al professore!</h2>
        <div class="mb-3">
            <label for="name" class="form-label">Nome e cognome</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" name="name" v-model="params.name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Indirizzo email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" v-model="params.email">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Example textarea</label>
            <textarea class="form-control" id="message" rows="3" name="message" v-model="params.message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>


    <form @submit.prevent="getDataReviews()">
        <h2>Invia una recensione al professore!</h2>
        <div class="mb-3">
            <label for="name" class="form-label">Nome e cognome</label>
            <input type="text" class="form-control" id="name-1" aria-describedby="emailHelp" v-model="review.name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Indirizzo email</label>
            <input type="email" class="form-control" id="email-1" aria-describedby="emailHelp" v-model="review.email">
        </div>
        <div class="mb-3">
            <label for="rate" class="form-label">Indirizzo email</label>
            <input type="number" class="form-control" id="rate-1" aria-describedby="emailHelp" v-model="review.rate" min="0" max="5">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Example textarea</label>
            <textarea class="form-control" id="message-1" rows="3" v-model="review.message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
import axios from 'axios'

export default {
    name: 'SendMessageComp',
    props: ['idTeacher'],
    data() {
        return {
            'params':{
                'teacher_id': this.idTeacher,
                'name': '',
                'email': '',
                'message': '',
            },
            'review':{
                'teacher_id': this.idTeacher,
                'name': '',
                'email': '',
                'message': '',
                'rate': ''
            }
        }
    },
    methods: {
        getData(){
            
            axios.post('http://127.0.0.1:8000/api/teachers/message', this.params)
            .then(res => {
                location.reload();
            })
            .catch(function (error) {
                    console.error(error);
            });
        },
        getDataReviews(){
            
            axios.post('http://127.0.0.1:8000/api/teachers/message', this.review)
            .then(res => {
                location.reload();
            })
            .catch(function (error) {
                    console.error(error);
            });
        },
    },   
}
</script>
<style lang="scss">
    
</style>