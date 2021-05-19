<template>
  <button>{{ btnName }}</button>
</template>

<script>
export default {
  name: "BtnMenu",
  props: {
    isActive: {
      type: Boolean,
      default: true,
    },
    btnName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      btnname: "",
    };
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
  position: relative;
  &:last-child {
    &::after {
      opacity: 0;
    }
  }
 
}
</style>