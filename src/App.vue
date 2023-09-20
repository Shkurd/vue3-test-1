<template>

  <form class="form" @submit.prevent>
    <input class="input" type="text" v-model="newTitle" placeholder="названеи поста">
    <textarea class="textarea" v-model="newText" name="" id="" cols="30" rows="10" placeholder="текст поста"></textarea>
    <div class="warn" v-if="validateFields">
      Заполните недостающие поля
    </div>
    <button class="btn" @click="addNewPost">Добавить пост</button>
  </form>


  <div class="post" :key="post.id" v-for="post in posts">
      <div><strong>Название: </strong> {{ post.title }}</div>
      <div><strong>Текст: </strong> {{ post.text }}</div>
  </div>


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }

export default {
  data() {
    return {
      posts: [
        {id:new Date(), title: 'title 1', text: 'text 1'},
        {id:new Date(), title: 'title 2', text: 'text 2'},
        {id:new Date(), title: 'title 3', text: 'text 3'}
      ],
      newTitle: '',
      newText: '',
      validateFields: false,
    }
  },

  methods: {
    addNewPost() {
      if (this.newTitle.trim() && this.newText.trim()) {
        this.posts.push({id:new Date(), title: this.newTitle, text: this.newText})
        this.newTitle = ''
        this.newText = ''
        this.validateFields = false
      } else {
        this.validateFields = true
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
}

.post {
  padding: 20px;
  margin-top: 15px;
  background: white;
  border-radius: 5px;
}

.form {
  display: flex;
  flex-direction: column;
}

.input, .textarea {
  background: white;
  border: 1px solid darkcyan;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
}

.textarea {
  resize: none;
}

.btn {
  background: darkcyan;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
}

.btn:hover {
  background: rgb(1, 104, 104);
}

.warn {
  color: red
}


</style>
