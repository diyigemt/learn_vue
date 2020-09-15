<template>
  <div class="control-tab">
    <div v-for="(e, index) in titles"
         :key="e + index"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)"
         class="control-tab-item">
      <span>{{ e }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ControlTab",
    props: {
      titles: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    methods: {
      itemClick(i) {
        this.currentIndex = i;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~assets/scss/base.scss';
  .control-tab {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: white;
    .control-tab-item {
      flex: 1;
    }
    .active {
      color: $color-high-text;
      transition: all 0.25s ease;

      span {
        padding: 5px;
        border-bottom: 3px solid $color-tint;
        transition: all 0.25s ease;
      }
    }
  }

</style>