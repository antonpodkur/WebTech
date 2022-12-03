<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="email" type="email"/>
      <br />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Login.vue",
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async login(e) {
      e.preventDefault()
      const response = await fetch("https://localhost:7220/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      })
      const { token } = await response.json();
      this.setToken(token)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>