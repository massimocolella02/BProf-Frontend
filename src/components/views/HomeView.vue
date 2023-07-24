<template>
  <HeroComp/>
  <CategoryComp/>
</template>

<script>
import HeroComp from '../../components/HeroComp.vue';
import CategoryComp from '../../components/CategoryComp.vue';
import axios from "axios";
import { store } from '../../storing/store';

export default {
  name: "HomeView",
  data() {
    return {
      store
    }
  },
  components: {
    HeroComp,
    CategoryComp
  },
}
</script>

<style lang="scss">

</style>