<template>
  <header>
    <div class="left control">
      <i class="fas fa-arrow-left"></i>
      <p>Exit Yearbook</p>
    </div>

    <h3>SMS Yearbook 2021</h3>

    <div class="right control">
      <i class="fas fa-question"></i>
      <p>Help</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Menu",
  props: {},
};
</script>

<style lang="sass">
header
  margin: 0
  width: 100%
  background: #C3D2D9
  display: flex
  justify-content: space-between
  align-items: center
  h3
    font-size: 14px
    color: #507D95

  .control
    background: #42738D
    font-size: 10px
    color: white
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    padding: 0 10px
    i
      padding-top: 8px
</style>
