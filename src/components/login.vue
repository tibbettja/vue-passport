<template>
  <div>
    <h1>Log In</h1>
    <p><label for="username">Username</label><input type="text" id="username" v-model="username"/></p>
    <p><label for="username">Password</label><input type="password" id="password" v-model="password"/></p>
    <p><button @click="login">Log In</button></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '../store/store'
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
      if 
    }
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.user.loggedIn) {
      next('home')
    } else {
      next()
    }
  }
}
</script>

