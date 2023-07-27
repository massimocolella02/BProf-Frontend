<template>
    <div class="col col-md-4 my-3">
        <router-link :to="{ name: 'single-teacher', params: { id: detailsTeachers.id }}">
            <div class="card">
                <img v-if="detailsTeachers.profile_picture !== null" :src="`http://127.0.0.1:8000/storage/${detailsTeachers.profile_picture}`" class="card-img-top" alt="">
                <img v-if="detailsTeachers.profile_picture === null" src="../assets/img/pp.jpg" class="card-img-top" alt="default profile picture">
                <div class="card-body">
                    <h5 class="card-title">{{ detailsTeachers.user.name }} {{ detailsTeachers.user.surname }}</h5>
                    <p class="card-text">{{ detailsTeachers.description }}</p>
                    <p class="card-text"> Recensioni: {{ detailsTeachers.reviews.length }}</p>
                    <div>
                        <p class="card-text" v-if="averageRating == 1"> Media: &#9733;&#9734;&#9734;&#9734;&#9734;</p>
                        <p class="card-text" v-else-if="averageRating == 2"> Media: &#9733;&#9733;&#9734;&#9734;&#9734;</p>
                        <p class="card-text" v-else-if="averageRating == 3"> Media: &#9733;&#9733;&#9733;&#9734;&#9734;</p>
                        <p class="card-text" v-else-if="averageRating == 4"> Media: &#9733;&#9733;&#9733;&#9733;&#9734;</p>
                        <p class="card-text" v-else-if="averageRating == 5"> Media: &#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    </div>
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
        return {};
    },
    computed: {
        averageRating() {
            if (this.detailsTeachers.reviews.length === 0) {
                return 0;
            }

            // calc the sum of all review ratings + average
            const sumRatings = this.detailsTeachers.reviews.reduce(
                (total, review) => total + review.rate,
                0
            );
            const average = sumRatings / this.detailsTeachers.reviews.length;
                return average.toFixed(0); 
        },
    },
};
</script>

<style lang="scss">

</style>
