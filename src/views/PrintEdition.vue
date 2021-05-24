<template>
  <div class="home">
    <div class="list-product">
      <div v-for="prc in products" :key="prc.id">
        <ProductCard :prc="prc" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "PrintEdition",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {},
  methods: {
    getData: function () {
      try {
        const api = "https://mocki.io/v1/a047254d-83f1-4f43-a50f-b027fc80cbc5";
        axios
          .get(api)
          .then((dataProduct) => {
            this.products = dataProduct.data;
          })
          .catch((error) => console.log(error.message));
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss">
.home {
  max-width: 1100px;
  margin: 0 auto;
  .list-product {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>