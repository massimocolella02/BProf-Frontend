<template>
  <NavBarComp/>
  <HeroComp/>
  <CategoryComp/>
  <TeacherSection/>
</template>

<script>
import { store } from "./storing/store";
import HomeView from './components/views/HomeView.vue';
import NavBarComp from "./components/NavBarComp.vue";
import HeroComp from "./components/HeroComp.vue";
import TeacherSection from "./components/TeacherSection.vue";
import CategoryComp from "./components/CategoryComp.vue";

export default {
  name: "App",
  data() {
    return {
      store
    }
  },
  components: {
    HomeView,
    NavBarComp,
    HeroComp,
    TeacherSection,
    CategoryComp
  }
}
</script>

<style lang="scss">

</style>