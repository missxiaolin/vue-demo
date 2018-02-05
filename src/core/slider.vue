<template>
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination"></div>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'slider',
  props: {
    // class
    cname: {
      type: String,
      default: ''
    },
    // swiper 配置项
    options: {
      type: Object,
      default () {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false
        }
      }
    },
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  // 组件
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~swiper/dist/css/swiper.css';
</style>
