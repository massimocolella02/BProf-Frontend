<template>
    <div class="container my-4">
        <h2 class="text-center">Teachers</h2>
        <div class="row">
            <SingleCardComp v-for="(elem, index) in store.infoTeachers" :detailsTeachers="elem" :key="'card-'+index"/>
        </div>
    </div>
</template>
<script>
import { store } from '../storing/store';
import SingleCardComp from './SingleCardComp.vue';
export default {
    name:'TeacherSection',
    data() {
        return {
            store
        }
    },
    components:{
        SingleCardComp
    },
    mounted() {
        console.log()
    },
}
</script>
<style lang="scss">
    
</style>