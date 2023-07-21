<template>
  <NavBarComp/>
  <HeroComp/>
  <CategoryComp @callTeachers="callTeachersApi"/>
  <TeacherSection @callApi="callTeachersApi"/>
</template>

<script>
import { store } from "./storing/store";
import HomeView from './components/views/HomeView.vue';
import NavBarComp from "./components/NavBarComp.vue";
import HeroComp from "./components/HeroComp.vue";
import TeacherSection from "./components/TeacherSection.vue";
import CategoryComp from "./components/CategoryComp.vue";
import axios from "axios";

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
  },
  methods: {
    callTeachersApi(){

      const params = {}

      if (store.selectedSubject !== null) {
        params.subject_id = store.selectedSubject
      }

      axios.get('http://127.0.0.1:8000/api/teachers', {params})
      .then(res => {
        console.log(res.data.results)
        store.infoTeachers = res.data.results
      })
      .catch(function (error) {
            console.error(error);
      });
    }
  },
  mounted() {
    this.callTeachersApi()
  }, 
}
</script>

<style lang="scss">

</style>