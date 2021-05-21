<template>
  <div class="gradle">
    <div class="left-content" v-bind:style="{ display: 'flex' }">
      <div
        class="dot"
        v-bind:style="{
          backgroundColor: gradle.background,
        }"
      ></div>
      <i class="fas fa-caret-right"></i>
      <p>{{ gradle.name }}</p>
    </div>
    <div class="right-content">
      <div class="section-process">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="date">
        <p>{{ gradle.msg }}</p>
      </div>
      <div class="circle-dots">
        <span>...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gradle",
  props: {
    gradle: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      msg: "05/21/2021",
    };
  },
  mounted() {
    console.log("gradle", this.gradle);
  },
};
</script>

<style lang="scss">
.gradle {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  background: #ffffff;
  margin: 10px 20px;

  &:first-child {
    margin-top: 0;
  }
  .left-content {
    display: flex;
    align-items: center;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50px;
      margin-right: 10px;
    }
    i {
      margin-right: 10px;
      font-size: 13px;
    }
    p {
      font-size: 13px;
    }
  }
  .right-content {
    display: flex;
    align-items: center;
    .section-process {
      height: 5px;
      margin-right: 10px;
      display: flex;
      span {
        display: block;
        width: 50px;
        margin-right: 1px;
        background: #d4d4d4;
        height: 100%;

        &:first-child {
        }
      }
    }
    .date {
      margin-right: 10px;
      font-size: 13px;
    }
    .circle-dots {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #333;
      font-size: 8px;
    }
  }
}
</style>