<template>
  <div class="listbtn">
    <BtnMenu v-for="btn in btns" :key="btn.id" :btnName="btn.name" />
  </div>
</template>

<script>
import BtnMenu from "./BtnMenu.vue";
export default {
  name: "ListButton",
  components: {
    BtnMenu,
  },
  data() {
    return {
      btns: [
        { name: "Expands All Section", id: 1 },
        { name: "Add a section", id: 2 },
      ],
    };
  },
};
</script>

<style lang="scss">
.listbtn {
  padding: 5px;
  display: flex;
}
</style>
