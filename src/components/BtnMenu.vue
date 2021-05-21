<template>
  <button><span></span>{{ btn.name }}</button>
</template>

<script>
export default {
  name: "BtnMenu",
  props: {
    btn: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    // console.log("btn", this);
  },
};
</script>

<style lang="scss">
button {
  padding: 5px 10px;
  outline: none;
  background: #fff;
  border: 1px solid #42738d;
  border-radius: 3px;
  color: #42738d;
  font-size: 10px;
  margin-left: 15px;
  cursor: pointer;
}
</style>