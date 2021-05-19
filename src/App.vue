<template>
  <div id="app">
    <Menu />
    <div id="nav">
      <router-link to="/print-edition">PRINT EDITION</router-link>
      <router-link to="/">MANAGER</router-link>
      <router-link to="/digital-edition">DIGITAL EDITION</router-link>
    </div>
    <NavUnder />
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import NavUnder from "@/components/Nav.vue";
export default {
  components: {
    Menu,
    NavUnder,
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(51, 51, 51, 0.37);
  border-bottom: 1px solid rgba(51, 51, 51, 0.37);
  box-sizing: border-box;

  a {
    box-sizing: border-box;
    font-weight: bold;
    color: #2c3e50;
    border-radius: 5px;
    font-size: 10px;
    border: 1px solid #aac0cc;
    text-decoration: none;
    display: block;
    color: #aac0cc;
    margin-right: 20px;
    width: 100px;
    padding: 5px 0px;
    text-align: center;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 100%;
      background: #aac0cc;
      top: 0;
      right: -11px;
    }
    &:last-child {
      margin-right: 0;
      &::after {
        opacity: 0;
      }
    }
    &.router-link-exact-active {
      background: #42738d;
      color: white;
    }
  }
}
</style>
