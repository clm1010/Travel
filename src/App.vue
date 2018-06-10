<template>
<div id="app">
  <!-- Detail详情页不缓存 -->
  <keep-alive exclude="Detail">
    <router-view/>
  </keep-alive>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
