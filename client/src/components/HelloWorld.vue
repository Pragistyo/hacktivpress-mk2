<template>
  <div class="hello">
    <!-- <navbar/> -->
    <img src="../assets/logo.png" style="width:10%">
    <!-- <AllArticles/> -->
    <router-view></router-view>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import AllArticles from '@/components/AllArticles'
export default {
  name: 'HelloWorld',
  components: {
    navbar,
    AllArticles
  },
  data () {
    return {
      msg: 'Welcome Hacktivpress-mk2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
