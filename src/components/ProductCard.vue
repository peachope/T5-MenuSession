<template>
  <div class="product-cart">
    <p>{{ prc.name }}</p>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.product-cart {
  border: 1px solid #333;
  padding: 10px;
  margin: 10px;
}
</style>