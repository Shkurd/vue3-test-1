<template>
  <div class="button-show-modal-wrap">
    <button-item @click="dialogWindowShow">Создать пост</button-item>
    <select-filter class="select-filter-wrap" v-model="sortBySelected" :sortOptions="sortOptionsBy"></select-filter>
  </div>
  <dialog-window v-model:show="dialogWindowVisible" >
    <posts-form @newPost="createNewPost"/><!--подписывается на событие и назанчаем функцию обработки поступающих данных -->
  </dialog-window>
  <input-item class="search-input" v-model:value="searchQuery" placeholder="Поиск по тексту поста"/>
  <posts-list :spinnerVisible="spinnerVisible" :posts="sortBySelectAndSearchQuery" @delPost="deletePost"/> <!--параметры, которые передаются (байндятся)в дочерний компонент -->

</template>

<script>
import PostsForm from '@/components/PostsForm.vue'
import PostsList from '@/components/PostsList.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }

export default {
  components: {
    PostsForm, PostsList
  },

  data() {
    return {
      posts: [
        // {id:new Date(), title: 'title 1', text: 'text 1'},
        // {id:new Date(), title: 'title 2', text: 'text 2'},
        // {id:new Date(), title: 'title 3', text: 'text 3'}
      ],

      dialogWindowVisible: false,
      spinnerVisible: true,
      sortBySelected: '',
      searchQuery: '',
      page: 1, // текущая старница
      limit: 10, // количество постов
      totalPage: 100, // количество постов, которое максимум может отдать ресурс (в нашем случае jsonplaceholder отдает максимум 100)
      sortOptionsBy: [
        {value: 'title', name: 'по названию'},
        {value: 'text', name: 'по тексту'}
      ],

    }
  },

  mounted() {
    this.getDataFromAPI();
  },

  methods: {

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

    async getDataFromAPI() {

      try {
        this.limit
      const url = 'https://jsonplaceholder.typicode.com/posts?_limit='+this.limit+'&_page='+this.page;
      const response = await fetch(url)
      const data = await response.json();

      data.forEach(element => {
        this.posts.push({id:new Date(), title: element.title, text: element.body})
      });

      this.spinnerVisible = false;


      } catch (e){
        console.log('error: ', e)
      }
      
    }

  },

  computed: {
    sortBySelect() { // Про функцию localeCompare() https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
       return [...this.posts].sort((post1, post2) => post1[this.sortBySelected]?.localeCompare(post2[this.sortBySelected]))
    },

    sortBySelectAndSearchQuery() {
      return this.sortBySelect.filter(post => post.text.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },

  watch: { // если модель меняется, то работает логика в соответствующей функции 
    dialogWindowVisible(newValue) { // Называется так же как и модель в data. У нас dialogWindowVisible
      console.log(newValue)
    },
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #d3d3d32b;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1000px;
  margin: 60px auto;
  padding: 20px;
}

.button-show-modal-wrap {
  text-align: right;
  margin-bottom: 10px;
}

.select-filter-wrap {
  margin-left: 20px;
}

</style>
