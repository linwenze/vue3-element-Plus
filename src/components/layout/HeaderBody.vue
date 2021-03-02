<template>
  <div class="test2">
      
    <div class="empty-head">
      <header-menu></header-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// 此组件是上下结构，头部和body
import HeaderMenu from './HeaderMenu'
export default {
  components: {
    HeaderMenu
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body {
  overflow:auto;
  padding:0;
  margin:0;
}
.empty-head{
    height:200px;
    width:100%;
    position: relative;
}
</style>
