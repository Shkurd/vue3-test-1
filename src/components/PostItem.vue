<template>

    <div class="post-item">
        <div>
            <!-- <div class="post-item-id"><strong>ID: </strong> {{ post.id }}</div> -->
            <div class="post-item-title"><strong>Название: </strong> {{ post.title }}</div>
            <div class="post-item-text"><strong>Текст: </strong> {{ post.text }}</div>
        </div>
        
        <div class="post-btns">
            <button-item class="btn-open" @click ="$router.push(`posts/${post.id}`)" >открыть</button-item>
            <button-item class="btn-delete" @click="$emit('delPost', post)" >удалить</button-item> 
        </div> 
    </div>

  </template>
  
  <script>

//   import ButtonItem from '@/components/ui/ButtonItem.vue'
  
  export default {
    // components: {
    //     ButtonItem
    // },
    props: {//параметры, которые передаются из родительского компонента
      post: {
        type: Object,
        required: true
      }
    },
  
    methods: {

    },
  }
  </script>
  
  <style scoped>

    .post-item {
      padding: 20px;
      margin-top: 15px;
      background: white;
      border-radius: 5px;
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .post-btns {
      margin-left: 20px;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .post-item-title, .post-item-text {
      margin-bottom: 10px;
    }
 
  </style>
  