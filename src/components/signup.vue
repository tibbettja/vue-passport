<template>
  <div>
    <h1>Sign Up Here</h1>
    <br><br>
    <label for="username">Username&nbsp;<input name="username" type="text" v-model="username" /></label>
    <br>
    <br>
    <label for="password">Password&nbsp;<input name="password" type="password" v-model="password" /></label>
    <br><br>
    <button @click="doSignup">Submit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', [
      'signup'
    ]),
    doSignup () {
      this.signup({ name: this.username, pass: this.password })
        .then(signRes => {
          if (signRes.success) {
            this.$buefy.toast.open('Signed up and logged in!')
            this.$router.push({ name: 'home' })
          }
        }).catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>
  div {
    padding: 10vh 25vw 10vh 25vw;
  }
  h1 {
    text-align: center;
  }
</style>
