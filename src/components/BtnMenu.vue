<template>
  <button>{{ BtnMenu.name }}</button>
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
  padding: 10px 15px;
  outline: none;
  background: #fff;
  border: 1px solid #aac0cc;
  border-radius: 3px;
  color: #aac0cc;
  font-size: 10px;
  margin-left: 15px;
  cursor: pointer;
}
</style>