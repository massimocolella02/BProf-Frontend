<template>
    <div class="footer">
        Made with ❤️ by Federico Airoldi, Carlo Battista, Gianluca Milanesi, Massimo Colella
    </div>
</template>

<script>
export default {
    name: "FooterComp"
}
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    z-index: 9999;
    width: 100%;
    padding: 3em 90px;
    background: #89CE94;

    @media only screen and (max-width: 900px) {
        padding: 3em 4%;
    }
}
</style>