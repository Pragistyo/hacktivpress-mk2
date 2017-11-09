import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import swal from 'sweetalert'

vue.use(Vuex)

const http = axios.create({ //
  baseURL: 'http://localhost:3010/'
})

const state = {
  article: [],
  userData: {
    username: null,
    id: null
  },
  loginStatus: {
    status: false,
    token: null
  },
  singleArticle: [],
  byAuthor: [],
  byCategory: []
}
const mutations = {
  setAllArticle (state, payload) {
    state.article = payload
  },
  setSingleArticle (state, payload) {
    state.singleArticle = payload
  },
  setbyAuthor (state, payload) {
    state.byAuthor = payload
  },
  setbyCategory (state, payload) {
    state.byCategory = payload
  }
}
const actions = {
  getAllArticles ({commit}) {
    http.get('/articles')
    // axios.get('http://localhost:3010/articles/')
    .then(result => {
      commit('setAllArticle', result.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  login ({commit}, payload) {
    http.post('/users/login', {
      username: payload.username,
      password: payload.password
    })
    .then(result => {
      localStorage.setItem('token', result.data.token)
      alert(JSON.stringify(result))
      http.get('/users/verify', {
        headers: {
          token: result.data.token
        }
      })
      .then(result => {
        alert.log(JSON.stringify(result))
      })
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
