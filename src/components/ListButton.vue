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
      // position: relative;
      button {
        background: #42738d;
        color: white;
        padding: 5px 15px;
        span {
          position: relative;
          margin-right: 10px;
          &::after {
            content: "\f067";
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            font-family: "Font Awesome 5 Free";
            font-weight: 700;
            color: white;
            font-size: 7px;
            display: block;
            
          }
        }
      }
    }
  }
}
</style>
