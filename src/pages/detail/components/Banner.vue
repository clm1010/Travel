<template>
<div class="banner">
  <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_600x330_a80ff353.jpg" />
  <div class="banner-info">
    <div class="banner-title">北京欢乐谷(AAAA景区)</div>
    <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>16</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailBanner'
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
