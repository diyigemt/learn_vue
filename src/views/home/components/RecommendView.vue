<template>
  <div class="recommend">
    <div v-for="(e, index) in recommend" :key="e + index" class="recommend-item">
      <a :href="e.link">
        <img :src="e.image" alt="">
        <div>{{ e.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommend: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    .recommend-item {
      flex: 1;

      img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
      }
    }
  }
</style>