<template>
  <div class="button-show-modal-wrap">
    <button-item @click="dialogWindowShow">Создать пост</button-item>
  </div>
  <dialog-window v-model:show="dialogWindowVisible" >
    <posts-form @newPost="createNewPost"/><!--подписывается на событие и назанчаем функцию обработки поступающих данных -->
  </dialog-window>
  <posts-list :posts="posts" @delPost="deletePost"/> <!--параметры, которые передаются (байндятся)в дочерний компонент -->

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

    async getDataFromAPI() {

      try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      const data = await response.json();
      console.log(data);

      data.forEach(element => {
        this.posts.push({id:new Date(), title: element.title, text: element.body})
      });


      } catch (e){
        console.log('error: ', e)
      }
      
    }

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

</style>
