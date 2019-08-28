<template>
  <div>
    <h1>This is the Account Page</h1>
    <p>{{ JSON.stringify(getAccount, null, 2) }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'account',
  computed: {
    ...mapGetters('user', [
      'getAccount'
    ])
  }
}
</script>
