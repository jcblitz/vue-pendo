<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
      // in your authentication promise handler or callback
    pendo.initialize({
        visitor: {
            id:              'STATIC-V-123'   // Required if user is logged in
          }, account: {
            id:           'STATIC-A-123' // Required if using Pendo Feedback
        }
    });
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
