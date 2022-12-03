<template>
  <div>
  <h1>REGISTER</h1>
  <form @submit.prevent="register">
    <input v-model="firstName" placeholder="First Name"/>
    <br />
    <br />
    <input v-model="lastName" placeholder="Last Name"/>
    <br />
    <br />
    <input v-model="email" placeholder="Email" type="email" />
    <br />
    <br />
    <input v-model="group" placeholder="Group"/>
    <br />
    <br />
    <input v-model="phone" placeholder="Phone number"/>
    <br />
    <br />
    <input v-model="variant" placeholder="Variant"/>
    <br />
    <br />
    <input v-model="password" placeholder="Password" type="password" />
    <br />
    <br />
    <input type="radio" id="user" value="User" v-model="role" />
    <label for="user">User</label>
    <input type="radio" id="admin" value="Admin" v-model="role" />
    <label for="admin">Admin</label>
    <br />
    <br />
    <button type="submit">Register User</button>
  </form>
  </div>
</template>

<script>
export default {
  name: "Register.vue",
  data: () => {
    return {
      firstName: "",
      lastName: "",
      email: "",
      group: "",
      phone: "",
      variant: "",
      password: "",
      role: ""
    };
  },
  methods: {
    async register(e) {
      e.preventDefault()
      let response;
      switch (this.role) {
        case "User":
          response = await fetch("https://localhost:7220/api/user/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              group: this.group,
              phone: this.phone,
              variant: this.variant,
              password: this.password,
            }),
          })
          console.log(await response)
          break
        case "Admin":
          response = await fetch("https://localhost:7220/api/user/register-admin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              group: this.group,
              phone: this.phone,
              variant: this.variant,
              password: this.password,
            }),
          })
          console.log(await response)
          break
        default:
          alert("Role is not selected!!!!!!!!!!!!!!!!!!!!!!!111!!!!1!!1!1!!11!!1111")
      }
    }
  }
}
</script>

<style scoped>

</style>