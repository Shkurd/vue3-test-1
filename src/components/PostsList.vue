  <template>
    <h3 v-if="posts.length">Список постов</h3>
    <h3 v-if="!posts.length">Список постов пуст</h3>
    <ul class="posts-list">
        <transition-group name="posts-list-group">
          <post-item class="post-item-wrap"
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @delPost="$emit('delPost', post)"
          />
        </transition-group>
        <li class="spinnerItem" v-if="spinnerVisible">
          <spinner-item></spinner-item>
        </li>
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
      },

      spinnerVisible: {
        type: Boolean,
        default: true,
      }

    },
  
    methods: {

    },
  }
  </script>
  
  <style scoped>
    .no-post, .spinnerItem {
      list-style-type: none;
    }

    /*
    Анимация (впереди названия класса идет то что в нэйме у нас, т.е name="posts-list-group")
    https://vuejs.org/guide/built-ins/transition-group.html#move-transitions
    */
    /* .posts-list-group-enter-active, .posts-list-group-leave-active {
      transition: all 0.5s ease;
    }

    .posts-list-group-enter-from, .posts-list-group-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }

    .posts-list-group-leave-active {
      position: absolute;
    } */

    .posts-list-group-move, /* apply transition to moving elements */
    .posts-list-group-enter-active,
    .posts-list-group-leave-active {
      transition: all 0.5s ease;
    }

    .posts-list-group-enter-from,
    .posts-list-group-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }

    /* ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
    .posts-list-group-leave-active {
      position: absolute;
    }
    
  </style>
  