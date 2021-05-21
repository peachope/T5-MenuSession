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
        <span class="left"></span>
        <span></span>
        <span class="right"></span>
        <div v-bind:style="{ backgroundColor: gradle.background }"></div>
      </div>
      <div class="date">
        <p>{{ msg }}</p>
      </div>
      <div class="circle-dots">
        <i class="fas fa-ellipsis-v"></i>
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
      width: 8px;
      height: 8px;
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
    justify-content: center;
    align-items: center;
    .section-process {
      display: flex;
      position: relative;
      span {
        width: 50px;
        height: 6px;
        margin-right: 1px;
        background: #d3d3d3;
      }
      span.left {
        border-radius: 25px 0 0 25px;
      }
      span.right {
        border-radius: 0px 25px 25px 0;
      }
      margin-right: 10px;
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        border-radius: 50%;
        z-index: 3;
      }
    }
    .date {
      font-size: 13px;
      margin-right: 10px;
    }
    .circle-dots {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid #333;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        transform: rotate(90deg);
        font-size: 10px;
        opacity: 0.5;
      }
    }
  }
}
</style>