<template>
  <div id="app">
    <Menu />
    <WrapList />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import WrapList from "./components/WrapList";

export default {
  name: "App",
  components: {
    Menu,
    WrapList,
  },
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
