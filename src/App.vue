<template>

  <posts-form @newPost="createNewPost"/><!--подписывается на событие и назанчаем функцию обработки поступающих данных -->
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
        {id:new Date(), title: 'title 1', text: 'text 1'},
        {id:new Date(), title: 'title 2', text: 'text 2'},
        {id:new Date(), title: 'title 3', text: 'text 3'}
      ],
    }
  },

  methods: {

    createNewPost(post) {
      this.posts.push({...post});// извлекаем данные из прокси обьекта и пушим (https://stackoverflow.com/questions/66605274/accessing-a-proxy-object-in-vue3)
    },

    deletePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
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
}

</style>
