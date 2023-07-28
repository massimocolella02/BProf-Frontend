<template>
  <HeroComp/>
  <CardBestComp />
  <FooterComp />
  <!-- <CategoryComp/> -->
</template>

<script>
import HeroComp from '../../components/HeroComp.vue';
import CategoryComp from '../../components/CategoryComp.vue';
import CardBestComp from '../CardBestComp.vue';
import FooterComp from '../FooterComp.vue';
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
    CategoryComp,
    CardBestComp,
    FooterComp
  },
}
</script>

<style lang="scss">

</style>