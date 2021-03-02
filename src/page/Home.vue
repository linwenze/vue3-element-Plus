<!--
 * @Author: your name
 * @Date: 2021-02-24 13:49:14
 * @LastEditTime: 2021-03-02 13:55:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /guanw-pc.chexiu.cn.git/src/page/Home.vue
-->

<template>
      <div class="content">
        <div class="backtop"></div>
        <el-backtop target=".content .backtop"></el-backtop>
      </div>
   
</template>

<script>
// import state from "@/store/state";
import action from "@/store/action";
export default {
  name: 'HelloWorld',
 
  data(){
    return {
      msg:333
    }
  },
  created(){
    action.openLoading();
    // this.$message.warning({
    //         message: '警告哦，这是一条警告消息',
    //         type: 'warning'
    //       });
    // console.log(state.count)
    // console.log(this.$fetch)
    // console.log(this.msg)
    this.$fetch.group.login({
        account:'admin',
        password:'1234562'
      }).then(res => {
        
        alert(33)
        this.$action.closeLoading();
        console.log(res)
      })
  },
  methods: {
    test(){
       action.openLoading();
        action.openLoading();
         action.openLoading();
      this.$fetch.group.login({
        account:'admin',
        password:'1234562'
      }).then(res => {
        this.$action.closeLoading();
        console.log(res)
      })
      // action.addCount();
      // this.$router.push({ path:'/Contact'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test {
  height: 2000px;
  width: 100%;
}

</style>
