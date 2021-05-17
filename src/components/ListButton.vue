<template>
  <div class="listbtn">
    <BtnMenu v-for="btn in btns" :key="btn.id" :btnName="btn.name" />
    <span>|</span>
  </div>
</template>

<script>
import BtnMenu from "./BtnMenu.vue";
export default {
  name: "ListButton",
  components: {
    BtnMenu,
  },

  props: {
    btns: {
      type: Array,
      default: () => [
        { name: "anh Quoc dep trai", id: 1 },
        { name: "mr Quoc handsome", id: 2 },
        
      ],
    },
  },
};
</script>

<style lang="scss">
.listbtn {
  padding: 5px;
  display: flex;
  width: 200px;
  margin: 0 auto;
  justify-content: space-between;
}
</style>
