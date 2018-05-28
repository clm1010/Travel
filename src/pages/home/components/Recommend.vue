<template>
<div>
  <div class="recommend-title">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
      <img class="item-img" :src="item.imgUrl" alt="" />
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button" type="button" name="button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: require('@/assets/img/rec-01.jpg'),
        title: '北京欢乐谷',
        desc: '这里是学生党名副其实的开心课堂，这里同样是青年情侣的浪漫圣地！时尚、动感、欢乐、梦幻的北京欢乐谷欢迎你！'
      }, {
        id: '0002',
        imgUrl: require('@/assets/img/rec-02.jpg'),
        title: '十渡聚龙湾玻璃栈道',
        desc: '聚龙湾—奏响4A创想曲！聚龙湾景区位于北方小桂林房山区十渡镇。优越的地理位置、宜人的生态景观、便利的交通环境和完善的配套梦寻生态山水，情归大美聚龙。聚龙湾—奏响4A创想曲！聚龙湾景区位于北方小桂林房山区十渡镇。优越的地理位置、宜人的生态景观、便利的交通环境和完善的配套设施是聚龙湾景区的强势特色。景区内设大型停车场，打破了十渡观光游览停车难的窘迫局面。优雅的环境，匠心的设计，超凡的体验，使聚龙湾成为了十渡观光休闲的不二之选。景区内设高山全景漂流。其独特之处在于巧妙的利用了自然风光，并增添了潮流的浪漫与刺激元素。该项目全长1600米。其惊险与刺激程度保准让您眼界大开，流连忘返。为揭开龙山的神秘面纱，聚龙湾景区别出心裁，打造了独特的玻璃台阶栈道。行走在奇特的台阶栈道上，您可以望峭壁之上自然形成的佛字，还可以俯瞰十渡美景于心田，感受不一样的栈道体验。设施是聚龙湾景区的强势特色。景区内设大型停车场，打破了十渡观光游览停车难的窘迫局面。优雅的环境，匠心的设计，超凡的体验，使聚龙湾成为了十渡观光休闲的不二之选。景区内设高山全景漂流。其独特之处在于巧妙的利用了自然风光，并增添了潮流的浪漫与刺激元素。该项目全长1600米，是十渡的高山全景丛林漂流。其惊险与刺激程度保准让您眼界大开，流连忘返。为揭开龙山的神秘面纱。'
      }, {
        id: '0003',
        imgUrl: require('@/assets/img/rec-03.jpg'),
        title: '故宫',
        desc: '还记得影视剧中，皇帝上朝的金銮殿嘛？金銮殿名为太和殿，是皇帝登基和举行大典的地方。'
      }, {
        id: '0004',
        imgUrl: require('@/assets/img/rec-04.jpg'),
        title: '古北水镇',
        desc: '“永顺染，草木色，手工缬，天然彩”。观赏原汁原味的生态印染。老师手把手教你DIY属于自己的印染作品。'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem;
    line-height: .8rem;
    background-color: #EEE;
    text-indent: .2rem;
  .item
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    .item-img
      display: block;
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    .item-info
      flex: 1;
      padding: .1rem;
      min-width: 0;
      .item-title
        line-height: .54rem;
        font-size: .32rem;
        ellipsis()
      .item-desc
        line-height: .4rem;
        color: $color1;
        ellipsis()
      .item-button
        line-height: .45rem;
        margin-top: .16rem;
        background-color: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #FFF;
</style>
