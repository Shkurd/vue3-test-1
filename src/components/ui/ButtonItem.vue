  <template>

    <button class="btn">
      <slot></slot>
    </button>

  </template>
  
  <script>
  
  export default {
    name: 'button-item'
  }
  </script>
  
  <style scoped>
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

    .btn-delete {
      padding: 5px 10px;
    }
 
  </style>
  