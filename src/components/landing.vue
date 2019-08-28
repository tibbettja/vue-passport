<template>
  <div>
    <h1>Welcome to the example app!</h1>
    <br/><br/><br/><br/>
    <p>
      <button @click="goRoute('login')">Log In</button>
      &nbsp;
      <button @click="goRoute('signup')">Sign Up</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
    }
  },
  methods: {
    goRoute (name) {
      if (name !== this.$route.name) {
        return this.$router.push({ name })
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
