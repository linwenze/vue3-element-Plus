<template>
  <div class="head-div">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="yxcrm/gk">处理中心100</el-menu-item>
       <el-menu-item index="yxcrm/about">处理中心22</el-menu-item>
        <el-menu-item index="3">处理中心33</el-menu-item>
         <el-menu-item index="4">处理中心44</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {menuPath} from "@/utils/utils.js"
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    created(){
       this.activeIndex2=menuPath();
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push({ path:'/'+key});  
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  overflow: auto;
  padding: 0;
  margin: 0;
}
.head-div {
  position: fixed;
  top: 0;
  left: 0;
  height: 200px;
  right: 0px;
  background: yellow;
  margin-right: auto;
  margin-left: auto;
}
</style>
