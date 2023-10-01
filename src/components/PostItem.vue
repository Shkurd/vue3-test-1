<template>

    <div class="post-item">
        <div>
            <!-- <div class="post-item-id"><strong>ID: </strong> {{ post.id }}</div> -->
            <div class="likes">
              Лайки: {{$store.state.likes}}
              <svg class="like" @click="$store.commit('increaseLikes')" xmlns="http://www.w3.org/2000/svg" style="width: 1em; height: 1em; vertical-align: middle;fill: darkcyan;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M939.516933 410.236936H666.879976C772.478959 19.839997 591.998988 0 591.998988 0c-73.598989 0-58.239991 59.519991-63.99999 69.759989 0 191.99797-202.877968 340.476947-202.877969 340.476947v541.436915c0 53.119992 74.879988 72.319989 101.759984 72.319989h409.596936c38.399994 0 69.759989-101.119984 69.759989-101.119984 101.118984-344.957946 101.118984-447.99693 101.118985-447.99693a63.99999 63.99999 0 0 0-68.47999-63.99999z m-725.754886 0H49.922072a33.279995 33.279995 0 0 0-33.918995 33.279995l33.919995 545.916914a33.919995 33.919995 0 0 0 34.559995 34.559995h141.438978c29.439995 0 29.439995-23.039996 29.439995-23.039996V451.836929a40.319994 40.319994 0 0 0-41.599993-41.599993z"/>
              </svg>
              <svg class="like dislike" @click="$store.commit('decrementLikes')" xmlns="http://www.w3.org/2000/svg" style="width: 1em; height: 1em; vertical-align: middle;fill: darkcyan;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1"><path d="M939.516933 410.236936H666.879976C772.478959 19.839997 591.998988 0 591.998988 0c-73.598989 0-58.239991 59.519991-63.99999 69.759989 0 191.99797-202.877968 340.476947-202.877969 340.476947v541.436915c0 53.119992 74.879988 72.319989 101.759984 72.319989h409.596936c38.399994 0 69.759989-101.119984 69.759989-101.119984 101.118984-344.957946 101.118984-447.99693 101.118985-447.99693a63.99999 63.99999 0 0 0-68.47999-63.99999z m-725.754886 0H49.922072a33.279995 33.279995 0 0 0-33.918995 33.279995l33.919995 545.916914a33.919995 33.919995 0 0 0 34.559995 34.559995h141.438978c29.439995 0 29.439995-23.039996 29.439995-23.039996V451.836929a40.319994 40.319994 0 0 0-41.599993-41.599993z"/>
              </svg> 
            </div>
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

    .likes {
      display: flex;
      align-items: center;
    }
    
    .like {
      position: relative;
      top: -2px;
      color:darkcyan;
      margin-left: 10px;
      cursor: pointer;
    }

    .dislike {
      top: 1px;
      transform: rotate(180deg);
    }
 
  </style>
  