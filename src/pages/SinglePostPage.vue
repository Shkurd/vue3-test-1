  <template>

    <div>
        <h2>Cтраница поста с id = {{$route.params.id}}</h2>
        <!-- <h3>Тайтл: {{post.title}}</h3> -->
        <post-item></post-item>
    </div>
    
  </template>
  
  <script>
    import PostItem from '@/components/PostItem.vue'

  
    export default {
      components: {
        PostItem
      }
    }

  </script>
  
  <style>

  
  </style>
  