export default {
  changeCity (ctx, city) {
    // 通过commit提交到mutations
    ctx.commit('changeCity', city)
  }
}
