<template>
  <div>
      <h1>ALL ARTICLES</h1>
      <div v-for="(item, index) in article" :key="item._id">
        <h3>{{item.title}}</h3>
        <p>by: {{item.author.username}}</p>
        <p>{{item.content}}</p>
      </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted: function () {
    this.getAllArticles()
  },
  computed: {
    ...mapState([
      'article'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  }
}
</script>

