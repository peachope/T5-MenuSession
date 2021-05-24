<template>
  <div class="manager-view">
    <div class="main">
      <div class="list-gradle">
        <div v-for="gradle in gradles" :key="gradle.id">
          <Gradle :gradle="gradle" />
        </div>
        <ListButton />
      </div>
    </div>
  </div>
</template>

<script>
import Gradle from "@/components/Gradle.vue";
import axios from "axios";
import ListButton from "@/components/ListButton.vue";
import store from "@/store";
export default {
  name: "ManagerView",
  components: {
    Gradle,
    ListButton,
  },
  data() {
    return {
      gradles: [],
    };
  },
  mounted() {
    this.fetchData();
    console.log(store.state.products[0].id);
  },
  methods: {
    fetchData: function () {
      try {
        const api = "https://mocki.io/v1/54302a65-5fc6-4be3-9a3f-c08d7da81fb1";
        axios
          .get(api)
          .then((res) => {
            console.log("res", res);
            this.gradles = res.data;
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
.manager-view {
  background: #f4f4f4;
  padding: 20px 15px 30px 0px;
}
</style>
