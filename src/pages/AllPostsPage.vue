<template>
    <div>
        <h2>Страница постов</h2>
    </div>
    <div class="button-show-modal-wrap">
      <button-item @click="dialogWindowShow">Создать пост</button-item>
      <select-filter class="select-filter-wrap" v-model="sortBySelected" :sortOptions="sortOptionsBy"></select-filter>
    </div>
    <dialog-window v-model:show="dialogWindowVisible" >
      <posts-form @newPost="createNewPost"/><!--подписывается на событие и назанчаем функцию обработки поступающих данных -->
    </dialog-window>
    <input-item class="search-input" v-model:value="searchQuery" placeholder="Поиск по тексту поста"/>
    <posts-list :spinnerVisible="spinnerVisible" :posts="sortBySelectAndSearchQuery" @delPost="deletePost"/> <!--параметры, которые передаются (байндятся)в дочерний компонент -->
    <!-- <div class="pages-wrap">
      <span 
      class="pages-item" 
      :class="{'current-page': page === pageNumber}" 
      v-for="pageNumber in totalPages" :key="pageNumber" @click="changePage(pageNumber)">{{ pageNumber }}</span>
    </div> -->
    <div ref="observer" class="observer"></div><!-- по этому диву определяем долстал ли юзер до конца страницы -->
    <div class="all-posts" v-if="allPostsLoaded">Все посты загружены</div>
  
  </template>
  
  <script>
  import PostsForm from '@/components/PostsForm.vue'
  import PostsList from '@/components/PostsList.vue'
  
  
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
  
      }
    },
  
    mounted() {
  
      this.getDataFromAPI();
  
      // this.$refs.observer
      // Intersection_Observer_API https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
      const options = {
        // root: document.querySelector("#scrollArea"), 
        rootMargin: "0px",
        threshold: 1.0,
      };
  
      const callback = (entries) => {
        if(entries[0].isIntersecting) {//срабатывает при пересечении вниз, по дефорту в обе стороны срабатывает пересечение
          this.LoadMoreDataFromAPI()
        }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer)
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
  
      // changePage(pageNumber) {
      //   this.page = pageNumber
      //   this.posts = []
      // },
  
      async getDataFromAPI() {
  
        try {
  
        const url = 'https://jsonplaceholder.typicode.com/posts?_limit='+this.postsLimit+'&_page='+this.page;
        const response = await fetch(url)
        const data = await response.json();
  
        if (data) {
            this.posts = []
            data.forEach(element => {
            this.posts.push({id:new Date() , title: element.title, text: element.body})
          });
        }
  
        this.spinnerVisible = false;
  
        } catch (e){
          console.log('error: ', e)
        }
        
      },
  
      async LoadMoreDataFromAPI() {
  
        try {
  
          if (this.page !== this.totalPages) {
  
            const url = 'https://jsonplaceholder.typicode.com/posts?_limit='+this.postsLimit+'&_page='+this.page;
            const response = await fetch(url)
            const data = await response.json()
  
            if (data) {
                data.forEach(element => {
                this.posts.push({id:new Date(), title: element.title, text: element.body})
              });
            }
            this.page++
            this.spinnerVisible = false
          } else {
            this.allPostsLoaded = true
          }
  
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
  
  </style>
  