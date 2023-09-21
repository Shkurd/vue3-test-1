<template>

    <div class="post-item">
        <div>
            <div><strong>Название: </strong> {{ post.title }}</div>
            <div><strong>Текст: </strong> {{ post.text }}</div>
        </div>
        
        <div class="post-btns">
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
 
  </style>
  