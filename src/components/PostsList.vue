  <template>
    <h3 v-if="posts.length">Список постов</h3>
    <h3 v-if="!posts.length">Список постов пуст</h3>
    <ul class="posts-list">
        <post-item
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @delPost="$emit('delPost', post)"
        />
    </ul>

  
  </template>
  
  <script>
import PostItem from './PostItem.vue'
  
  export default {
  components: { PostItem },
    props: {//параметры, которые передаются из родительского компонента
      posts: {
        type: Array,
        required: true
      }
    },
  
    methods: {

    },
  }
  </script>
  
  <style scoped>
    .no-post {
      list-style-type: none;
    }
 
  </style>
  