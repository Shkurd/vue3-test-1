<template>
    <div class="user">
      {{$store.state.isAuth ? 'Пользователь зарегистрирован' : 'Пользователь не зарегистрирован'}}
    </div>
     <div>
        <h2>Страница постов с VUEX</h2>
        <h3>Количество лайков: {{ $store.state.likes }}</h3>
        <h3>state.limit: {{ $store.state.posts.postsLimit }}</h3>
    </div>
    <div class="button-show-modal-wrap">
      <button-item @click="dialogWindowShow">Создать пост</button-item>
      <select-filter
        class="select-filter-wrap"
        :model-value="sortBySelected" 
        @update:model-value="setSortBySelected" 
        :sortOptions="sortOptionsBy"
        >
      </select-filter>
    </div>
    <dialog-window v-model:show="dialogWindowVisible" >
      <posts-form @newPost="createNewPost"/>
    </dialog-window>
    <input-item
      class="search-input"
      v-focus 
      :value="searchQuery"
      @update:value="setSearchQuery" 
      placeholder="Поиск по тексту поста"
    />
    <posts-list :spinnerVisible="spinnerVisible" :posts="sortBySelectAndSearchQuery" @delPost="deletePost"/>

    <div v-intersection="LoadMoreDataFromAPI"></div>
    <div class="all-posts" v-if="allPostsLoaded">Все посты загружены</div>
  
  </template>
  
  <script>
  import PostsForm from '@/components/PostsForm.vue'
  import PostsList from '@/components/PostsList.vue'

  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  
  
  export default {
    components: {
      PostsForm, PostsList
    },
  
    data() {
      return {
        dialogWindowVisible: false,
      }
    },
  
    mounted() {
  
      this.getDataFromAPI();
  
    },
  
    methods: {

     ...mapMutations ({
      setPage: 'posts/setPage',
      setSearchQuery: 'posts/setSearchQuery',
      setSortBySelected: 'posts/setSortBySelected',
     }),

     ...mapActions ({
      getDataFromAPI: 'posts/getDataFromAPI',
      LoadMoreDataFromAPI: 'posts/LoadMoreDataFromAPI'
      }),
  
      createNewPost(post) {
        this.posts.push({...post});// извлекаем данные из прокси обьекта и пушим (https://stackoverflow.com/questions/66605274/accessing-a-proxy-object-in-vue3)
        this.dialogWindowVisible = false 
      },
  
      deletePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
  
      dialogWindowShow() {
        this.dialogWindowVisible = true
      },
  
      sortList() {
        alert('sortList')
      },
  
    },
  
    computed: {

      ...mapState({
        posts: state => state.posts.posts,
        dialogWindowVisible: state => state.posts.dialogWindowVisible,
        spinnerVisible: state => state.posts.spinnerVisible,
        allPostsLoaded: state => state.posts.allPostsLoaded,
        sortBySelected: state => state.posts.sortBySelected,
        searchQuery: state => state.posts.searchQuery,
        page: state => state.posts.page, // текущая старница
        postsLimit: state => state.posts.postsLimit, // количество постов
        totalPages: state => state.posts.totalPages, // количество постов, которое максимум может отдать ресурс (в нашем случае jsonplaceholder отдает максимум) деленное на количество постов на одной странице.
        sortOptionsBy: state => state.posts.sortOptionsBy,
      }),

      ...mapGetters({
        sortBySelect: 'posts/sortBySelect',
        sortBySelectAndSearchQuery: 'posts/sortBySelectAndSearchQuery'
      }),
    },
  
    watch: { // если модель меняется, то работает логика в соответствующей функции 
      dialogWindowVisible(newValue) { // Называется так же как и модель в data. У нас dialogWindowVisible
        console.log(newValue)
      },
  
      // page() {
      //   this.getDataFromAPI()
      // }
    },
  }
  </script>
  
  <style scoped>
  
  .button-show-modal-wrap {
    text-align: right;
    margin-bottom: 10px;
  }
  
  .select-filter-wrap {
    margin-left: 20px;
  }
  
  .pages-wrap {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .pages-item {
    margin: 3px 7px;
    cursor: pointer;
    padding: 3px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .current-page {
    background: darkcyan;
    color: white;
    border-radius: 50%;
  }
  
  .all-posts {
    margin-top: 15px;
    font-weight: bold;
    text-align: center;
  }

  .user {
    margin: 12px 0;
  }
  
  </style>
  