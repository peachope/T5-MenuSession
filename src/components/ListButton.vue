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
  data(){
    return {
        props: {
            btns: {
              type: Array,
              default: () => [
                { name: "PRINT EDITION", id: 1 },
                { name: "MANAGER", id: 2 },
                { name: "DIGITAL EDTION", id: 3 },
              ],
            },
          },
        }
      } 
};
</script>

<style lang="scss">
.listbtn {
  padding: 5px;
  display: flex;

  justify-content: space-between;
}
</style>
