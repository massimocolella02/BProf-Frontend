<template>
  <NavBarComp/>
  <HeroComp/>
  <TeacherSection/>
</template>

<script>
import { store } from "./storing/store";
import HomeView from './components/views/HomeView.vue';
import NavBarComp from "./components/NavBarComp.vue";
import HeroComp from "./components/HeroComp.vue";
import TeacherSection from "./components/TeacherSection.vue";

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
    TeacherSection
  }
}
</script>

<style lang="scss">

</style>