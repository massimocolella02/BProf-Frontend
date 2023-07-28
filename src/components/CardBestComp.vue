<template>
    <div class="container_cards">
        <div class="card_best">
            <div class="card_heading">
                <h2 class="heading">Puoi imparare da casa tua!</h2>
                <p class="subHeading">Mettiti d’accordo con il tuo insegnante per fare lezione da casa</p>
            </div>
            <div class="card_img">
                <img class="img"
                    src="https://plus.unsplash.com/premium_photo-1661911788406-0ab64b1c5f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="img">
            </div>
        </div>
        <div class="card_best">
            <div class="card_heading">
                <h2 class="heading">Impara come se fossi in una vera aula di scuola</h2>
                <p class="subHeading">Mettiti d’accordo con il tuo insegnante per fare lezione in un luogo privato/pubblico
                    come in una vera scuola</p>
            </div>
            <div class="card_img">
                <img class="img"
                    src="https://plus.unsplash.com/premium_photo-1671070290623-d6f76bdbb3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
                    alt="img">
            </div>
        </div>
        <div class="card_best">
            <div class="card_heading">
                <h2 class="heading">Pagamenti facili e veloci</h2>
                <p class="subHeading">Paga direttamente online</p>
            </div>
            <div class="card_img">
                <img class="img"
                    src="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
                    alt="img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardBestComp"
}
</script>

<style lang="scss" scoped>
.container_cards {
    position: relative;
    top: 0;
    left: 0;
    padding: 0 90px;
    margin: 6vw 0;
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 1100px) {
        padding: 0 4%;
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }

    .card_best {
        width: 100%;
        border-radius: 20px;
        display: flex;
        flex-direction: column;

        .card_heading {
            width: 100%;
            height: 200px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            padding: 40px;
            background: #F6F6F6;

            .heading{
                color: #000;
                font-size: 1.3rem;
                font-weight: 700;
                margin-bottom: 10px;
            }

            .subHeading{
                color: #000;
                font-size: .7rem;
                font-weight: 400;
            }
        }

        .card_img {
            width: 100%;
            height: 250px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            background: #F6F6F6;

            .img {
                width: 100%;
                height: 100%;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                object-fit: cover;
            }
        }
    }
}</style>