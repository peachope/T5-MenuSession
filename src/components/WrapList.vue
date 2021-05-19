<template>
  <div class="wrap">
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
.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
