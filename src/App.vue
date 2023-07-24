<template>
  <NavBarComp/>
  <router-view></router-view>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue'
export default {
  name: "App",
  data() {
    return {
    }
  },
  components: {
    NavBarComp,
  },
}
</script>

<style lang="scss">

</style>