  <template>

    <select class="select-filter" :value="modelValue" @change="changeOption">
      <option disabled selected value="">Выберите из списка опцию</option>
      <option v-for = "option in sortOptions" :key="option.value" :value="option.value">{{option.name}}</option>
    </select>

  </template>
  
  <script>
  
  export default {
    name: 'select-filter',
    props: {
      modelValue: {
        type: String,
      },
      sortOptions: {
        type: Array,
        default: () => []
      }
    },

    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }

  }
  </script>
  
  <style scoped>
  .select-filter {
    border-radius: 5px;
    cursor: pointer;
    background: darkcyan;
    color: white;
    padding: 15px 20px;
    
  }

  .select-filter option{
    height: 20px;
    background: darkcyan;
    color: white;
  }

  </style>
  