<template>
<div class="icons">
  <swiper :options="swiperOption" v-if="showIconsSwiper">
    <swiper-slide  v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" alt="" />
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIconsSwiper () {
      return this.iconList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0;
    padding-bottom: 60%;
  .icons >>> .swiper-pagination-bullet-active
    background-color: $bgColor;
  .icons
    margin-top:.1rem;
    .icon
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      .icon-img
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-sizing: border-box;
        padding: .34rem;
        .icon-img-content
          display: block;
          margin: 0 auto;
          height: 100%;
      .icon-desc
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color: $darkTextColor;
        ellipsis()
</style>
