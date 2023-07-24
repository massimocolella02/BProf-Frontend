<template>
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"><img src="/img/light_green/bprof_logo_light_green.png" alt=""></router-link>
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
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