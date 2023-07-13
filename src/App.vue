<template>
    <h1 class="text-danger">Ciao</h1>
</template>

<script>
import { store } from "./storing/store"
import HomeView from './components/views/HomeView.vue';

export default {
  name: "App",
  data() {
    return {
      store
    }
  },
  components: {
    HomeView
  }
}
</script>

<style lang="scss">

</style>