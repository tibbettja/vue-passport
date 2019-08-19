<template>
  <div>
    <h1>Welcome to the example app!</h1>
    <p>
      <button @click="goLogin">Log In</button>
      &nbsp;
      <button @click="goSignup">Sign Up</button></p>
  </div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
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
</style>>
