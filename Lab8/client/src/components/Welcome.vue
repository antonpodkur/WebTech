<template>
  <div>
    <h1>Welcome</h1>
    <router-link v-if="!isLoggedIn" to="/login"><button>Login</button></router-link>
    <router-link v-if="!isLoggedIn"  to="/register"><button>Register</button></router-link>
    <div v-if="isLoggedIn">
      <Me/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Me from "@/components/Me";

export default {
  name: "Welcome",
  components: {Me},
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
}
</script>

<style scoped>

</style>