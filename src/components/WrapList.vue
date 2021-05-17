<template>
  <div>
    <ListButton />
  </div>
</template>

<script>
import ListButton from "./ListButton.vue";
export default {
  name: "WrapList",
  components: {
    ListButton,
  },
  props: {},
};
</script>

<style lang="scss">
div {
  width: 100%;
}
</style>
