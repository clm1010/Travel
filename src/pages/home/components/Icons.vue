<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide  v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" alt="">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      iconList: [{
        id: '001',
        imgUrl: require('@/assets/img/icon-01.png'),
        desc: '景点门票'
      }, {
        id: '002',
        imgUrl: require('@/assets/img/icon-02.png'),
        desc: '必游榜单'
      }, {
        id: '003',
        imgUrl: require('@/assets/img/icon-03.png'),
        desc: '踏青赏花'
      }, {
        id: '004',
        imgUrl: require('@/assets/img/icon-04.png'),
        desc: '一日游'
      }, {
        id: '005',
        imgUrl: require('@/assets/img/icon-05.png'),
        desc: '动植物园'
      }, {
        id: '006',
        imgUrl: require('@/assets/img/icon-06.png'),
        desc: '故宫'
      }, {
        id: '007',
        imgUrl: require('@/assets/img/icon-07.png'),
        desc: '古北水镇'
      }, {
        id: '008',
        imgUrl: require('@/assets/img/icon-08.png'),
        desc: 'Q+精选'
      }, {
        id: '009',
        imgUrl: require('@/assets/img/icon-09.png'),
        desc: '演出'
      }, {
        id: '010',
        imgUrl: require('@/assets/img/icon-10.png'),
        desc: '自然风光'
      }]
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
