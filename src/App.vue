<template>
  <div id="app">
    <nav>
      <button @click="goRoute('landing')">Home</button>
      <span v-if="getLoggedIn">Hello {{ getUsername }}</span>
      <button v-if="getLoggedIn" @click="doLogout">Log Out</button>
      <button v-else @click="goRoute('login')">Log In</button>
      <hr>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions('application', [
      'handleResize'
    ]),
    ...mapActions('user', [
      'logout',
      'startup'
    ]),
    doLogout () {
      this.logout()
        .then(logRes => {
          if (logRes.success) {
            return this.$router.push({ name: 'logout' })
          }
        }).catch(e => {
          console.log(e)
        })
    },
    goRoute (name) {
      if (name !== this.$route.name) {
        return this.$router.push({ name })
      }
    }
  },
  computed: {
    ...mapGetters('application', [
      'getErrors'
    ]),
    ...mapGetters('user', [
      'getLoggedIn',
      'getUsername'
    ])
  },
  watch: {
    getErrors () {
      if (this.getErrors.length) {
        this.$buefy.snackbar.open({
          duration: 5000,
          message: this.getErrors[this.getErrors.length - 1],
          type: 'is-danger',
          position: 'is-bottom-left'
        })
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.startup()
  },
  destroyed () {
    window.addEventListener('resize', this.handleResize)
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
  margin: 0px 20px 0px 20px;
}
nav {
  text-align: center;
  padding-top: 50px;
}
</style>
