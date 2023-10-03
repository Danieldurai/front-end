<template>
  <div id="app">
    <NavBar></NavBar>    
    <SideBar></SideBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
// import HomePage from './views/HomePage.vue'
import SideBar from './components/SidebarComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    // HomePage,
    SideBar

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
 
}
</style>
