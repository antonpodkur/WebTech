<template>
  <h2 v-if="loading">Loading</h2>
  <div v-else>
    <h2>My info</h2>
    <label>Name</label>
    <h3>{{user.name}}</h3>
    <label>Group</label>
    <h3>{{user.group}}</h3>
    <label>Variant</label>
    <h3>{{user.variant}}</h3>
    <label>Phone</label>
    <h3>{{user.phone}}</h3>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Me",
  data: () => {
    return {
      user: null,
      loading: true
    }
  },
  methods: {
    ...mapGetters(["getToken"])
  },
  async created() {
    const token = 'Bearer ' + this.getToken()
    console.log(token)
    let response = await fetch("https://localhost:7220/api/User/me", {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    this.user = await response.json();
    console.log(this.user)
    this.loading = false
  }
}
</script>

<style scoped>

</style>