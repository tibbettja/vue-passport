<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'logout',
  data () {
    return {
      message: 'You have been logged out.'
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
