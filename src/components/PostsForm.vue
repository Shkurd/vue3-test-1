  <template>

    <form class="form" @submit.prevent>
      <input-item v-model:value="post.title" placeholder="названеи поста"/>
      <textarea class="textarea" v-model.trim="post.text" name="" id="" cols="30" rows="10" placeholder="текст поста"></textarea>
      <div class="warn" v-if="validateFields">
        Заполните недостающие поля
      </div>
      <button-item @click="addNewPost">Добавить пост</button-item> 
    </form>
  
  </template>
  
  <script>

  // import ButtonItem from '@/components/ui/ButtonItem.vue'
  
  export default {
  //   components: {
  //     ButtonItem
  // },

    data() {
      return {
        post: {
          id: '',
          title: '',
          text: '',
        },
        validateFields: false,

      }
    },
  
    methods: {
      addNewPost() {
        if (this.post.title.trim() && this.post.text.trim()) {
          this.post.id = new Date()
          this.$emit('newPost', this.post)// Событие, которое мы будем слшать в родителе, чтобы принять новый пост и второй параметр - аргумент, который будем передавать
          this.post.title = ''
          this.post.text = ''
          this.post.id = ''
          this.validateFields = false
        } else {
          this.validateFields = true
        }
      },
    },
  }
  </script>
  
  <style scoped>

    .form {
      display: flex;
      flex-direction: column;
    }

    .textarea {
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

    .warn {
      color: red
    }
 
  </style>
  