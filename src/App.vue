<template>
  <NavBarComp/>
</template>

<script>
import { store } from "./storing/store";
import HomeView from './components/views/HomeView.vue';
import NavBarComp from "./components/NavBarComp.vue";

export default {
  name: "App",
  data() {
    return {
      store
    }
  },
  components: {
    HomeView,
    NavBarComp
  }
}
</script>

<style lang="scss">

</style>