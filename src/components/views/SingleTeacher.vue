<template>
    <div class="container_single_card" v-for="(elem, index) in teacher" :key="index">
        <div class="mobile_card_sub">
            <div class="wrap_img">
                <img class="img_picture" v-if="elem.profile_picture !== null"
                    :src="`http://127.0.0.1:8000/storage/${elem.profile_picture}`"
                    :alt="elem.user.name + 'profile picture'">
                <img class="img_picture" v-else="elem.profile_picture === null" src="../../assets/img/pp.jpg"
                    alt="default profile picture">
            </div>
            <div class="sub_info">
                <h2 class="fullname">{{ elem.user.name }} {{ elem.user.surname }}</h2>
                <div class="container_xtr">
                    <div class="container_row">
                        <span class="label_content">Curriculum</span>
                        <div class="wrap_xtr">
                            <a class="content_sub" v-if="elem.cv !== null" target="_blank"
                                :href="`http://127.0.0.1:8000/storage/${elem.cv}`">Guarda ora</a>
                            <p class="content_sub" v-if="elem.cv === null">No</p>
                        </div>
                    </div>
                    <div class="container_row">
                        <span class="label_content">Tariffa oraria</span>
                        <div class="wrap_xtr">
                            <span class="content_sub" v-if="elem.price >= 1">{{ elem.price }}€</span>
                            <span class="content_sub" v-else-if="elem.price === 0">Gratis</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="left_region">
            <div class="container_cycl">
                <ul class="list_container">
                    <li class="item_list" v-for="(materia, index) in elem.subjects" :key="index">
                        <i class="fa-solid fa-laptop-code me-2"></i>
                        {{ materia.name }}
                    </li>
                </ul>
            </div>
            <div class="container_description">
                <div class="container_heading_section">
                    <h2 class="heading_section">Riguardo {{ elem.user.name }} {{ elem.user.surname }}</h2>
                </div>
                <p class="description">{{ elem.description }}</p>
            </div>
            <div class="container_cycl">
                <div class="container_heading_section">
                    <h2 class="heading_section">Contatti</h2>
                </div>
                <ul class="list_container">
                    <li class="item_list">
                        <i class="fa-solid fa-phone"></i>
                        {{ elem.phone_number }}
                    </li>
                </ul>
            </div>
            <div class="container_cycl">
                <div class="container_heading_section">
                    <h2 class="heading_section">Luogo del corso</h2>
                </div>
                <ul class="list_container">
                    <li class="item_list_invert">
                        <i class="fa-solid fa-location-dot"></i>
                        Indirizzo: {{ elem.address }}
                    </li>
                    <li class="item_list_invert">
                        <i class="fa-solid fa-location-dot"></i>
                        Città: {{ elem.city }}
                    </li>
                    <li class="item_list_invert">
                        <i class="fa-solid fa-location-dot"></i>
                        CAP: {{ elem.cap }}
                    </li>
                    <div class="container_remote">
                        <li class="item_list_invert" v-if="elem.remote === 1">
                            <i class="fa-solid fa-laptop"></i>
                            Disponibile per lezioni in remoto
                        </li>
                        <li class="item_list_invert" v-else-if="elem.remote === 0">
                            <i class="fa-solid fa-laptop"></i>
                            Non disponibile per lezioni in remoto
                        </li>
                    </div>
                </ul>
            </div>
            <div class="container_reviews">
                <div class="container_heading_section">
                    <h2 class="heading_section">Recensioni</h2>
                </div>
                <div v-if="paginatedReviews && paginatedReviews.length > 0">
                    <div v-for="(review, index) in paginatedReviews" :key="index" class="review_card">
                        <div class="container_heading">
                            <div class="container_user">
                                <div class="dot_user">
                                    <!-- Recupera la prima lettera del nome -->
                                    {{ review.guest_name ? review.guest_name.charAt(0) : '' }}
                                    <!-- Recupera la prima lettera del nome -->
                                </div>
                                <h2 class="name_rev">{{ review.guest_name }}</h2>
                            </div>
                            <div class="star">
                                <p class="card-text" v-if="review.rate == 1">&#9733;&#9734;&#9734;&#9734;&#9734;</p>
                                <p class="card-text" v-else-if="review.rate == 2">&#9733;&#9733;&#9734;&#9734;&#9734;</p>
                                <p class="card-text" v-else-if="review.rate == 3">&#9733;&#9733;&#9733;&#9734;&#9734;</p>
                                <p class="card-text" v-else-if="review.rate == 4">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                                <p class="card-text" v-else-if="review.rate == 5">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                            </div>
                        </div>
                        <p class="card-text">{{ review.description }}</p>
                    </div>
                </div>
                <div v-else>
                    <p>Non ci sono recensioni disponibili per questo insegnante.</p>
                </div>
                <div class="container_pages_btn">
                    <button v-for="page in totalPages" :key="page" @click="currentPage = page"
                        :class="{ 'btn_page btn_active': currentPage === page, 'btn_page': currentPage !== page }">{{
                            page
                        }}</button>
                </div>
            </div>
        </div>
        <div class="right_region">
            <div class="card_summary_sub">
                <div class="wrap_img">
                    <img class="img_picture" v-if="elem.profile_picture !== null"
                        :src="`http://127.0.0.1:8000/storage/${elem.profile_picture}`"
                        :alt="elem.user.name + 'profile picture'">
                    <img class="img_picture" v-else="elem.profile_picture === null" src="../../assets/img/pp.jpg"
                        alt="default profile picture">
                </div>
                <div class="sub_info">
                    <h2 class="fullname">{{ elem.user.name }} {{ elem.user.surname }}</h2>
                    <div class="container_xtr">
                        <div class="container_row">
                            <span class="label_content">Curriculum</span>
                            <div class="wrap_xtr">
                                <a class="content_sub" v-if="elem.cv !== null" target="_blank"
                                    :href="`http://127.0.0.1:8000/storage/${elem.cv}`">Guarda ora</a>
                                <p class="content_sub" v-if="elem.cv === null">No</p>
                            </div>
                        </div>
                        <div class="container_row">
                            <span class="label_content">Tariffa oraria</span>
                            <div class="wrap_xtr">
                                <span class="content_sub" v-if="elem.price >= 1">{{ elem.price }}€</span>
                                <span class="content_sub" v-else-if="elem.price === 0">Gratis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            teacher: [],
            reviews: [],
            review: {
                guest_name: "",
            },
            currentPage: 1,
            reviewsShown: 3,
        }
    },
    computed: {
        paginatedReviews() {
            const startRev = (this.currentPage - 1) * this.reviewsShown;
            const endRev = startRev + this.reviewsShown;
            return this.reviews.slice(startRev, endRev);
        },
        totalPages() {
            return Math.ceil(this.reviews.length / this.reviewsShown);
        },
    },
    mounted() {
        this.callApiSingleTeacher();
    },
    methods: {
        callApiSingleTeacher() {
            axios.get(`http://127.0.0.1:8000/api/teachers/${this.$route.params.id}`)
                .then(res => {
                    this.teacher = res.data.results;
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
        },
    },
}
</script>

<style lang="scss">
.subl li:nth-child(odd) {
    color: red;
}

.subl li:nth-child(even) {
    color: blue;
}

.container_single_card {
    width: 100%;
    padding: 0 90px;
    margin-top: 3em;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1050px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 900px) {
        padding: 0 4%;
    }

    .mobile_card_sub {
        width: 100%;
        margin-bottom: 3vw;
        display: none;
        align-items: center;

        @media only screen and (max-width: 1050px) {
            display: flex;
        }

        .wrap_img {
            width: 140px;
            height: 140px;
            aspect-ratio: 1;
            border-radius: 10px;
            object-fit: cover;

            .img_picture {
                width: 100%;
                height: 100%;
                aspect-ratio: 1;
                border-radius: 10px;
                object-fit: cover;
            }
        }

        .sub_info {
            width: 100%;
            margin-left: 1em;

            .container_xtr {
                width: 100%;

                .container_row {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .label_content{
                        color: #000;
                        font-size: 1rem;
                        font-weight: 400;
                    }

                    .wrap_xtr {
                        display: flex;
                        align-items: center;

                        .content_sub {
                            color: #000;
                            font-size: 1rem;
                            font-weight: 700;
                            margin: 0;
                        }
                    }
                }
            }
        }
    }

    .left_region {
        width: 100%;
        padding-right: 3em;
        display: flex;
        flex-direction: column;

        @media only screen and (max-width: 1050px) {
            padding-right: 0;
        }

        .container_cycl {
            width: 100%;
            margin-bottom: 3em;

            &:last-child {
                margin-bottom: 0;
            }

            .container_heading_section {
                margin-bottom: 1em;

                .heading_section {
                    color: #000;
                    font-size: 1.5rem;
                    font-weight: 600;
                }
            }

            .list_container {
                list-style: none !important;
                list-style-type: none !important;
                display: flex;
                flex-wrap: wrap;
                align-items: center;

                .item_list {
                    color: #000;
                    font-size: .8rem;
                    font-weight: 500;
                    height: 30px;
                    padding: 8px 16px;
                    margin-bottom: 6px;
                    display: flex;
                    margin-right: 1em;
                    align-items: center;
                    justify-content: center;
                    background: rgba(137, 206, 149, .2);
                    border: 1px solid rgba(137, 206, 149, .5);
                    border-radius: 32px;

                    &:last-child {
                        margin-right: 0;
                    }
                }


                .item_list i {
                    margin-right: 1em;
                }

                .item_list_invert {
                    color: #000;
                    font-size: 1rem;
                    font-weight: 500;
                    display: flex;
                    margin-right: 1em;
                    align-items: center;
                    justify-content: center;
                    height: 45px;
                    padding: 8px 16px;
                    margin-bottom: 6px;
                    background: transparent;
                    border: 1px solid rgba(0, 0, 0, .3);
                    border-radius: 32px;

                    @media only screen and (max-width: 1050px) {
                        font-size: .8rem;
                        height: 35px;
                    }
                }

                .item_list_invert i {
                    margin-right: 1em;
                }
            }
        }

        .container_description {
            width: 100%;
            margin-bottom: 3em;

            .description {
                color: #000;
                font-size: 1.2rem;
                font-weight: 600;
            }
        }

        .container_reviews {
            width: 100%;

            .review_card {
                padding: 2em;
                border: 1px solid #d9d9d9;
                border-radius: 30px;
                margin-bottom: 1em;

                &:last-child {
                    margin-bottom: 0;
                }

                .container_heading {
                    margin-bottom: .5em;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .container_user {
                        display: flex;
                        align-items: center;

                        .dot_user {
                            width: 32px;
                            height: 32px;
                            aspect-ratio: 1;
                            border-radius: 50%;
                            margin-right: 1em;
                            text-align: center;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background: #89CE94;
                        }

                        .name_rev {
                            color: #000;
                            font-size: 1.3rem;
                            font-weight: 600;
                            margin: 0;
                        }
                    }

                    .star {
                        color: rgb(255, 214, 103);
                        background: rgba(255, 240, 199, .5);
                        padding: 3px 16px;
                        border-radius: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }

            .container_pages_btn {
                width: 100%;
                margin-top: 2em;
                display: flex;
                align-items: center;
                justify-content: center;

                .btn_page {
                    color: #000;
                    padding: 4px 8px;
                    width: 40px;
                    height: 40px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    margin-right: .5em;
                    border: none;
                    outline: none;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    &:last-child {
                        margin-right: 0;
                    }

                }

                .btn_active {
                    background: #89CE94;
                }
            }
        }
    }

    .right_region {
        display: flex;
        flex-direction: column;

        @media only screen and (max-width: 1050px) {
            display: none;
        }

        .card_summary_sub {
            text-align: center;
            padding: 2em;
            border-radius: 10px;
            width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #fff;
            box-shadow: 0px 4px 16px rgba(96, 97, 112, 0.08);

            .wrap_img {
                width: 140px;
                height: auto;
                aspect-ratio: 1;
                margin-bottom: 1em;

                .img_picture {
                    width: 100%;
                    height: 100%;
                    aspect-ratio: 1;
                    border-radius: 10px;
                    object-fit: cover;
                }
            }

            .sub_info {
                width: 100%;
                display: flex;
                flex-direction: column;

                .fullname {
                    color: #000;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: .5em;
                }

                .container_xtr {
                    width: 100%;
                    padding: 0 1rem;

                    .container_row {
                        width: 100%;
                        margin-top: 1em;
                        margin-bottom: 1em;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        &:last-child {
                            margin-bottom: 0;
                        }

                        .label_content {
                            color: #000;
                            font-size: 1rem;
                            font-weight: 400;
                            margin-bottom: 0;
                        }

                        .content_sub {
                            color: #000;
                            font-size: 1rem;
                            font-weight: 700;
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>