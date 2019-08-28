<template>
  <div>
    <h1>Log In</h1>
    <p><label for="username">Username</label><input type="text" id="username" v-model="username"/></p>
    <p><label for="username">Password</label><input type="password" id="password" v-model="password"/></p>
    <p><button @click="goRoute('signup')">Sign Up</button>&nbsp;&nbsp;&nbsp;<button @click="doLogin">Log In</button></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', [
      'login'
    ]),
    doLogin () {
      this.login({ name: this.username, pass: this.password })
        .then(logRes => {
          if (logRes.success) {
            this.$buefy.toast.open('Logged In!')
            this.$router.push({ name: 'home' })
          }
        }).catch(e => {
          console.log(e)
        })
    },
    goRoute (name) {
      if (name !== this.$route.name) {
        this.$router.push({ name })
      }
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
p {
  text-align: center;
}
button {
  padding: 10px 5px 10px 5px;
}
</style>
