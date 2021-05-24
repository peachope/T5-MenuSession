<template>
  <div class="contaienr">
    <h1>This is page digital edition</h1>
    {{ allData }}
  </div>
</template>
<script>
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  name: "DigitalEdition",
  computed: mapGetters(["allData"]),
  components: {},
  mounted() {
    store.dispatch("fetchData");
  },
};
</script>