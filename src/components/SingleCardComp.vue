<template>
    <div class="col col-md-4 my-3">
        <router-link  :to="{name: 'single-teacher', params: { id: detailsTeachers.id }}">
            <div class="card">
                <img v-if="detailsTeachers.profile_picture !== null" :src="`http://127.0.0.1:8000/storage/${detailsTeachers.profile_picture}`" class="card-img-top" alt="">
                <img v-if="detailsTeachers.profile_picture === null" src="../assets/img/pp.jpg" class="card-img-top" alt="default profile picture">
                <div class="card-body">
                    <h5 class="card-title">{{ detailsTeachers.user.name }} {{ detailsTeachers.user.surname }}</h5>
                    <p class="card-text">{{ detailsTeachers.description }}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'SingleCardComp',
    props: ['detailsTeachers'],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss">
    
</style>