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
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: require('@/assets/img/week-01.jpg'),
        title: '北京赏花好地方',
        desc: '乱花渐欲迷人眼，京城赏花大搜索'
      }, {
        id: '0002',
        imgUrl: require('@/assets/img/week-02.jpg'),
        title: '北京必游TOP10',
        desc: '来北京必去的景点非这些地方莫属'
      }, {
        id: '0003',
        imgUrl: require('@/assets/img/week-03.jpg'),
        title: '寻找北京的皇城范儿',
        desc: '数百年的宫廷庙宇，至今依旧威严霸气'
      }, {
        id: '0004',
        imgUrl: require('@/assets/img/week-04.jpg'),
        title: '学生最爱的博物馆',
        desc: '周末干嘛？北京很多博物馆已经免费开放啦'
      }, {
        id: '0005',
        imgUrl: require('@/assets/img/week-05.jpg'),
        title: '儿童剧场，孩子的乐园',
        desc: '带宝贝观看演出，近距离体验艺术的无穷魅力'
      }]
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
