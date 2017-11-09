<template>
    <div>
        <h1>LOGIN</h1>
        <fieldset>
            <input v-model="form.username" type="text" name="" id="username" placeholder="username">
            <input v-model="form.password"type="password" name="" id="password" placeholder="password">
            <button @click="loginuser()">Login</button>
        </fieldset>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    loginuser () {
      this.login(this.form)
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

