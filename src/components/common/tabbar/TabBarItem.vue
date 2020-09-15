<template>
  <div class="tab-bar-item" @click="handleClick()">
    <div v-show="!isActive"><slot name="item-icon"></slot></div>
    <div v-show="isActive"><slot name="item-icon-active"></slot></div>
    <div :style="myStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      color: {
        type: String,
        default: 'red'
      },
      path: String
    },
    methods: {
      handleClick() {
        this.$router.push(this.path);
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      myStyle() {
        return this.isActive ? {color: this.color} : {}
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

    img {
      width: 24px;
      height: 24px;
      margin-top: 2px;
      vertical-align: middle;
    }
  }
</style>