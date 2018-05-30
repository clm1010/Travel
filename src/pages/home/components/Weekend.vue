<template>
<div>
  <div class="weekend-title">周末去哪儿</div>
  <ul>
    <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" alt="" />
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .weekend-title
    line-height: .8rem;
    background-color: #EEE;
    text-indent: .2rem;
  .item-img-wrapper
    overflow: hidden;
    height: 0;
    padding-bottom: 40%;
    .item-img
      display: block;
      width: 100%;
  .item-info
    padding: .1rem .2rem .3rem;
    .item-title
      line-height: .54rem;
      font-size: .32rem;
      ellipsis()
    .item-desc
      line-height: .4rem;
      color: #616161;
      ellipsis()
</style>
