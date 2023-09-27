<template>
  <div>
      <h1>Основной шаблон с роутами</h1>
      <nav class="nav">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/post">Post</router-link>
      </nav>
      <router-view></router-view>
  </div>

</template>

<script>


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
    padding: 20px;
  }

  .nav {
    display: flex;
    align-items: center;
    border-top: solid 2px rgb(1, 104, 104);
    border-bottom: solid 2px rgb(1, 104, 104);
    margin: 10px 0;
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
