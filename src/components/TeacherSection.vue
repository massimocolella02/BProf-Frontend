<template>
    <div class="container my-2">
        <h2 class="text-center">Teachers</h2>
        <SingleCardComp/>
    </div>
</template>
<script>
import SingleCardComp from './SingleCardComp.vue';
export default {
    name:'TeacherSection',
    data() {
        return {
            
        }
    },
    components:{
        SingleCardComp
    }
}
</script>
<style lang="scss">
    
</style>