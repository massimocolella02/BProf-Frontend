<template>
    <div class="col col-md-4 my-3">
        <div class="card">
            <img :src="detailsTeachers.profile_picture" class="card-img-top" :alt="detailsTeachers.user.name">
            <div class="card-body">
                <h5 class="card-title">{{ detailsTeachers.user.name }} {{ detailsTeachers.user.surname }}</h5>
                <p class="card-text">{{ detailsTeachers.description }}</p>
            </div>
        </div>
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