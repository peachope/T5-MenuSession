<template>
  <div class="listbtn">
    <div v-for="btn in btns" :key="btn.id">
      <BtnMenu :btn="btn" />
    </div>
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
        { name: "Add a Section", id: 2 },
      ],
    };
  },
};
</script>

<style lang="scss">
.listbtn {
  margin-top: 25px;
  padding: 5px;
  display: flex;

  div {
    &:last-child {
      button {
        background: #42738d;
        color: white;
      }
    }
  }
}
</style>
