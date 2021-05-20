<template>
  <div class="count">
    <p v-for="ctp in countPages" :key="ctp.id">
      <span
        v-bind:class="{ active: ctp.isActive }"
        v-on:change="updateActive"
        >{{ ctp.infor }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "NavUnder",
  data() {
    return {
      countPages: [
        { infor: "48 pages", id: 1, isActive: false, name: "Home" },
        { infor: "26 Sheets", id: 2, isActive: false, name: "Manager" },
        { infor: "26 Screens", id: 3, isActive: false, name: "DigitalEdition" },
      ],
    };
  },
  methods: {
    updateActive: function () {},
  },
  watch: {
    $route(to) {
      this.countPages.forEach((e) => {
        e.isActive = e.name === to.name ? true : false;
      });
    },
  },
};
</script>

<style lang="scss">
.count {
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #333;
  background: #f4f4f4;
  p {
    width: 100px;
    height: 100%;
    font-size: 13px;
    margin-right: 20px;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 100%;
      background: #aac0cc;
      top: 0;
      right: -20px;
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
    span {
      padding-left: 20px;
      color: #aac0cc;
      font-weight: 600;
      &.active {
        color: #2c3e50;
      }
    }
  }
}
</style>