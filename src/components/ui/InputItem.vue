  <template>

    <input :value="value" @input="updateInput" class="input" type="text">

  </template>
  
  <script>
  
  export default {
    name: 'input-item',
    props: {
        value: [String, Number]
    },
    methods: {
      updateInput(event) {
          this.$emit('update:value', event.target.value)
      }
      // updateInput(event) {
      //     this.$emit('update:modelValue', event.target.value)
      // }
    }
  }
  </script>
  
  <style scoped>
    .input {
      background: white;
      border: 1px solid darkcyan;
      padding: 20px;
      border-radius: 5px;
      width: 100%;
      margin-bottom: 10px;
    }

  </style>
  