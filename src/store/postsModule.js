
export const postsModule = {
  state: () => ({
    posts: [],
    dialogWindowVisible: false,
    spinnerVisible: true,
    allPostsLoaded: false,
    sortBySelected: '',
    searchQuery: '',
    page: 1, // текущая старница
    postsLimit: 10, // количество постов
    totalPages: 10, // количество постов, которое максимум может отдать ресурс (в нашем случае jsonplaceholder отдает максимум) деленное на количество постов на одной странице.
    sortOptionsBy: [
      {value: 'title', name: 'по названию'},
      {value: 'text', name: 'по тексту'}
    ],
  }),
  getters: {
    sortBySelect(state) { // Про функцию localeCompare() https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
      return [...state.posts].sort((post1, post2) => post1[state.sortBySelected]?.localeCompare(post2[state.sortBySelected]))
    },

    sortBySelectAndSearchQuery(state, getters) {
      return getters.sortBySelect.filter(post => post.text.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }

  },
  mutations: {
    setPost(state, posts) {
      state.posts = posts
    },

    setLoading(state, bool) {
      state.spinnerVisible = bool
    },

    setAllPostsLoaded (state, bool) {
      state.allPostsLoaded = bool
    },

    setSortBySelected (state, sortBySelected) {
      state.sortBySelected = sortBySelected
    },

    setSearchQuery (state, searchQuery) {
      state.searchQuery = searchQuery
    },

    setPage (state, page) {
      state.page = page
    },

    // setPostsLimit (state, postsLimit) { Эти параметры не будут меняться, поэтому не нужны в "Мутяциях"
    //   state.postsLimit = postsLimit
    // },

    // setTotalPages (state, totalPages) { Эти параметры не будут меняться, поэтому не нужны в "Мутяциях"
    //   state.totalPages = totalPages
    // },

    // setSortOptionsBy (state, sortOptionsBy) {  Эти параметры не будут меняться, поэтому не нужны в "Мутяциях"
    //   state.sortOptionsBy = sortOptionsBy
    // },



  },
  actions: {
    async getDataFromAPI({state, commit}) {

      try {

      commit('setLoading', true)
      const url = 'https://jsonplaceholder.typicode.com/posts?_limit='+state.postsLimit+'&_page='+state.page;
      const response = await fetch(url)
      const data = await response.json();

      if (data) {
          commit('setLoading', true)
          commit ('setPost', []) // state.posts = []
          let newPostsDate = []
          data.forEach(element => {
            newPostsDate.push({id:new Date() , title: element.title, text: element.body})
          });
          commit ('setPost', newPostsDate)
      }

      commit('setLoading', false)

      } catch (e){
        console.log('error: ', e)
      }
      
    },

    async LoadMoreDataFromAPI({state, commit}) {

      try {

        if (state.page !== state.totalPages) {

          const url = 'https://jsonplaceholder.typicode.com/posts?_limit='+state.postsLimit+'&_page='+state.page;
          const response = await fetch(url)
          const data = await response.json()
          let AddNewPostsDate = state.posts // Берем уже имеющиеся посты и добавляем дополнительные
          if (data) {
            data.forEach(element => {
                AddNewPostsDate.push({id:new Date(), title: element.title, text: element.body})
            });
          }
          commit ('setPost', AddNewPostsDate)
          commit('setPage', state.page++)
          commit('setLoading', false)
        } else {
          commit('setAllPostsLoaded', true)
        }

      } catch (e){
        console.log('error: ', e)
      }
    }

  },

  namespaced: true

} 