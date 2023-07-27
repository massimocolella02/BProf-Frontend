<template>
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"><img src="/img/light_green/bprof_logo_light_green.png" alt=""></router-link>
                
                <a class="btn btn-success" href="http://127.0.0.1:8000/" target="_blank">Sei un professore? Iscriviti!</a>
                
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBarComp',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss">
nav{
    .navbar-brand{
        width: 150px;
        img{
            width: 100%;
        }
    }
}
</style>