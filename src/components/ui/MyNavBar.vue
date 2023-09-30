  <template>

    <nav class="nav">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/posts">Posts</router-link>
        <router-link class="nav-item" to="/about">About</router-link>
        <router-link class="nav-item" to="/posts-vuex">Posts VUEX</router-link>
    </nav>

    <router-view></router-view>

  </template>
  
  <script>
  
  export default {
    name: 'my-nav-bar'
  }
  </script>
  
  <style scoped>
  
  .nav {
    display: flex;
    align-items: center;
    border-top: solid 2px rgb(1, 104, 104);
    border-bottom: solid 2px rgb(1, 104, 104);
    margin: 20px 0 30px;
  }
  .nav-item {
    padding: 18px 15px;
    color: rgb(1, 104, 104);
    font-weight: 600;
    text-decoration: none;
  }

  .nav-item:hover, .router-link-active {
    background: rgb(1, 104, 104);
    color: white;
  }
 
  </style>
  