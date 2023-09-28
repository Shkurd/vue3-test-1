<template>
  <div>
    <div class="main-logo-wrap">
      <img class="main-logo" src="@/assets/logo.png" alt="Main-logo" @click ="$router.push('/')"><!--Можно дклать элемент обновляющим роут таким образом-->
      <h1>Основной шаблон с роутами</h1>
    </div>
      
      <my-nav-bar></my-nav-bar>
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

  .main-logo-wrap {
    display: flex;
    align-items: center;
  }

  .main-logo {
    margin-right: 15px;
    max-width: 40px;
    max-height: 40px;
    cursor: pointer;
  }

</style>
