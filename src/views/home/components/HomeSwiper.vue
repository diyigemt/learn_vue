<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(e, index) in banner" :key="e + index">
        <a :href="e.link" class="swiper-img">
          <img :src="e.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "@/components/common/swiper/index";

  export default {
    name: "HomeSwiper",
    props: {
      banner: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped lang="scss">
  .swiper-img {
    width: 100%;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
</style>