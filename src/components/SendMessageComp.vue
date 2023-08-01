<template>
    <div class="container_single_card ">
        <div class="messagebox">
    <form @submit.prevent="getData()" id="form-message">
        <h2>Chiedi informazioni</h2>
        <div class="mb-3">
            <label for="name" class="form-label">Nome*</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" name="name" v-model="params.name" required minlength="2">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">E-mail*</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" v-model="params.email" required minlength="4">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Descrizione:*</label>
            <textarea class="form-control" id="message" rows="3" name="message" v-model="params.message" required minlength="3"></textarea>
        </div>
        <span for="name" class="col-md-6 text-md-right campi ">I campi contrassegnati da * sono obblgatori.</span>
        <br>
        <button type="submit" class="btn_reg_no mt-3">Invia messaggio</button>
    </form>

    <div id="messageSent" hidden>
        <h2 style="color: #89CE94">Messaggio inviato con successo</h2>
    </div>  
    </div>



    <div class="reviewbox">
    <form @submit.prevent="getDataReviews()" id="form-review">
        <h2>Lascia una recensione </h2>
        <div class="mb-3">
            <label for="name" class="form-label">Nome*</label>
            <input type="text" class="form-control" id="name-1" aria-describedby="emailHelp" v-model="review.name" required minlength="2">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">E-mail*</label>
            <input type="email" class="form-control" id="email-1" aria-describedby="emailHelp" v-model="review.email" required minlength="4">
        </div>
        <div class="mb-3">
            <label for="rate" class="form-label">Voto*</label>
            <input type="number" class="form-control" id="rate-1" aria-describedby="emailHelp" v-model="review.rate" min="1" max="5" required>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Recensione*</label>
            <textarea class="form-control" id="message-1" rows="3" v-model="review.message" required minlength="3"></textarea>
        </div>
        <span for="name" class="col-md-6 text-md-right campi ">I campi contrassegnati da * sono obblgatori.</span>
        <br>
        <button type="submit" class="btn_reg_no mt-3">Invia recensione</button>
    </form>

    <div id="reviewSent" hidden>
        <h2 style="color: #89CE94">Recensione inviata con successo</h2>
    </div> 
    </div>
    </div>

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
            
                document.querySelector('#form-message').style.display = 'none';
    
                let messageSent = document.querySelector('#messageSent');
                messageSent.hidden = false;
            })
            .catch(function (error) {
             console.error(error);
            });
        },
        getDataReviews(){
            
            axios.post('http://127.0.0.1:8000/api/teachers/message', this.review)
            .then(res => {
                
                document.querySelector('#form-review').style.display = 'none';

                let reviewSent = document.querySelector('#reviewSent');
                reviewSent.hidden = false;
            })
            .catch(function (error) {
                    console.error(error);
            });
        },
     },   
}
</script>
<style lang="scss">

.campi{
        font-size: small!important;
        margin-top: 2rem!important;
    }

    .container_single_card {
    width: 100%;
    padding: 0 90px;
    margin-top: 3em;
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;

    @media only screen and (max-width: 1050px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 900px) {
        padding: 0 4%;
    }

}

.messagebox{
    width: calc(100% / 2 - 5%);
    margin-bottom: 1rem;
}

.reviewbox{
    width: calc(100% / 2 - 5%);
    margin-bottom: 1rem;
}

@media screen and (max-width: 900px) {
    .messagebox, .reviewbox {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
}

.btn_reg_no{
  border: 2px solid #89ce94;
  outline: none;
  padding: 9px 21px;
  border-radius: 32px;
  background: transparent;
  backdrop-filter: blur(10px);
  display: inline;
  align-items: center;
  cursor: pointer;
  transition: all 200ms ease;
  background-color: #89CE94!important;
}
    
</style>