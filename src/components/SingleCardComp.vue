<template>
    <router-link :to="{ name: 'single-teacher', params: { id: detailsTeachers.id } }">
        <div class="card_sub text-center p-3">
            <img class="img_profile" v-if="detailsTeachers.profile_picture !== null"
                :src="`http://127.0.0.1:8000/storage/${detailsTeachers.profile_picture}`"
                :alt="detailsTeachers.user.name + 'profile picture'">
            <img class="img_profile" v-if="detailsTeachers.profile_picture === null" src="../assets/img/pp.jpg"
                alt="default profile picture">
            <div class="card_body">
                <h5 class="card_title">{{ detailsTeachers.user.name }} {{ detailsTeachers.user.surname }}</h5>
                <p class="card_text">{{ detailsTeachers.description }}</p>
                
                <div class="container_rating_sub">
                    <div class="star" v-if="averageRating !== 0">
                    <p class="card-text" v-if="averageRating == 1">&#9733;&#9734;&#9734;&#9734;&#9734;</p>
                    <p class="card-text" v-else-if="averageRating == 2">&#9733;&#9733;&#9734;&#9734;&#9734;</p>
                    <p class="card-text" v-else-if="averageRating == 3">&#9733;&#9733;&#9733;&#9734;&#9734;</p>
                    <p class="card-text" v-else-if="averageRating == 4">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    <p class="card-text" v-else-if="averageRating == 5">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
                <div class="hidden" v-else>
                </div>

                    <div class="rec">
                        <p class="card_rec">
                            <span v-if="detailsTeachers.reviews.length === 0"> Questo professore non ha recensioni</span>
                            <span v-else-if="detailsTeachers.reviews.length === 1"> {{ detailsTeachers.reviews.length }} Recensione</span>
                            <span v-else-if="detailsTeachers.reviews.length >= 2"> {{ detailsTeachers.reviews.length }} Recensioni</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
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
a {
    text-decoration: none !important;
}

.card_sub {
    width: 100%;

    .img_profile {
        width: 10rem;
        aspect-ratio: 1;
        border-radius: 10px;
        object-fit: cover;
        margin: auto;
    }

    .card_body {
        color: #000;
        margin-top: .5em;

        .card_title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: .3vw;
        }

        .card_text {
            color: #6e6e6e;
            font-size: .8rem;
            font-weight: 400;
            margin-bottom: .3vw;
        }

        .container_rating_sub {
            color: #000;
            font-size: .8rem;
            font-weight: 400;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            .star,
            .separator,
            .rec {
                display: flex;
                align-items: center;
                margin: auto;
            }

            .separator {
                opacity: .5;
                margin: 0 .3em;
            }

            .card_rec {
                margin-bottom: 0;
            }
        }
    }
}
</style>
