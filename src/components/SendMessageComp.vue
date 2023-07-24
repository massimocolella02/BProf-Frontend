<template>
    <form>
        <h2>Invia un messaggio al professore!</h2>
        <div class="mb-3">
            <label for="name" class="form-label">Nome e cognome</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" name="name" v-model="name">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Indirizzo email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" v-model="email">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Example textarea</label>
            <textarea class="form-control" id="message" rows="3" name="message" v-model="message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click="getData()">Submit</button>
    </form>
</template>
<script>
import axios from 'axios'

export default {
    name: 'SendMessageComp',
    props: ['idTeacher'],
    data() {
        return {
                name: '',
                email: '',
                message: '',
        }
    },
    methods: {
        getData(){
            
            axios.get('http://127.0.0.1:8000/api/messages', {params:{
                teacher_id: this.idTeacher,
                name: this.name,
                email: this.email,
                message: this.message,
            }})
            .then(res => {
                console.log(res.data)
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