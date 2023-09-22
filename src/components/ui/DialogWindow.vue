  <template>

    <div class="dialog" v-if = "show" @click="hideDialog">
      <div class="dialog-content"  @click.stop>
        <div class="dialog-close-wrap">
          <span class="dialog-close" @click="hideDialog">
            <svg xmlns="http://www.w3.org/2000/svg" fill="darkcyan" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/>
            </svg>
          </span>
        </div>
        <slot></slot>
      </div>
    </div>  

  </template>
  
  <script>
  
  export default {
    name: 'dialog-window',
    props: {
      show: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      // updateInput(event) {
      //   this.$emit('update:value', event.target.value)
      // }

      hideDialog() {
        this.$emit('update:show', false)
      }
    }
  }
  </script>
  
  <style scoped>

  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .dialog-content {
    margin: auto;
    background: white;
    width: 70vw;
    height: 70vh;
    border-radius: 10px;
    padding: 25px;
  }

  .dialog-close-wrap {
    text-align: right;
    padding-bottom: 10px;
  }

  .dialog-close {
    margin: 3px;
    cursor: pointer;
  }

  </style>
  