<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg" />
    <div class="banner-info">
      <div class="banner-title">{{this.sightName}}</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>{{this.bannerImgs.length}}</div>
    </div>
  </div>
  <fade-animation>
    <common-gallary
      :imgs="bannerImgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </fade-animation>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/publicanimation/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
 .banner
   position: relative;
   overflow: hidden;
   height: 0;
   padding-bottom: 55%;
   .banner-img
     width: 100%;
     vertical-align: top;
   .banner-info
     display: flex;
     position: absolute;
     right: 0;
     bottom: 0;
     left: 0;
     line-height: .6rem;
     color: #FFF;
     background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
     .banner-title
       flex: 1;
       font-size: .36rem;
       padding: 0 .2rem;
       text-shadow: 0 1px 2px rgba(0,0,0,0.70);
     .banner-number
       height: .32rem;
       line-height: .32rem;
       margin-top: .14rem;
       padding: 0 .4rem;
       border-radius: .2rem;
       background-color: rgba(0,0,0,.8);
       font-size: .24rem;
       .banner-icon
         font-size: .24rem;
</style>
