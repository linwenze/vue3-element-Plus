<template>
     <div class="aa">
         <div class="test">43333334343434
         </div>
         <div class="test"></div>
      <backtop></backtop>
  </div>
</template>  
<script>
import backtop from "@/components/privite/backtop";
export default {
  components:{
    backtop
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style>
html,body {
  /* height: 100%;
  overflow:auto; */
  padding:0;
  margin:0;
}
.aa {
  overflow-y: auto;
  height:100%
}
.test{height:1200px;width:100%;}
</style>