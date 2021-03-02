<template>
  <div>
    <el-backtop :bottom="160">
      <div class="backtop">
        <div class="back-icon">
          <div class="wrap-child">
            <div class="child">
              <div class="child-img" style="background:#eee"></div>
              <div class="child-img" style="background:#ea5a54"></div>
            </div>
          </div>
        </div>
        <div class="back-icon" @click.stop @mouseover="setQQ" id="QQqiye">
          <div class="wrap-child">
            <div class="child">
              <div class="child-img" style="background:#eee"></div>
              <div class="child-img" style="background:#ea5a54"></div>
            </div>
          </div>
          <div class="popu-div">在线咨询</div>
        </div>
        <div class="back-icon" @click.stop>
          <div class="wrap-child">
            <div class="child phone-child">
               <div class="child-img" style="background:#ea5a54"></div>
              
            </div>
          </div>
          <div class="popu-div show">400-8008-219</div>
        </div>
        <div class="back-icon" @click.stop>
          <div class="wrap-child">
            <div class="child">
              <div class="child-img" style="background:#eee"></div>
              <div class="child-img" style="background:#ea5a54"></div>
            </div>
          </div>
          <div class="popu-div popu-img">
            <img src="@/assets/images/cst.png" />
          </div>
        </div>
      </div>
    </el-backtop>
  </div>
</template>
<script>
// import BizQQWPA from '@/assets/wpa.php'
export default {
  created() {
    this.setQQ();
  },
  methods: {
    setQQ(){
        window.BizQQWPA.addCustom([{ aty: '0', nameAccount: '4008591730', selector: 'QQqiye' },{aty: '0', nameAccount: '4008591730', selector: 'QQqiye'}])
       window.BizQQWPA.visitor({nameAccount: '4008591730'})
    }  
  },
};
</script>
<style lang="scss">
.backtop {
  height: 200px;
  width: 48px;
  text-align: center;
  line-height: 40px;
  color: #1989fa;
  .back-icon {
    width: 48px;
    height: 46px;
    margin-bottom: 4px;
    position: relative;
    &:hover {
      .wrap-child {
        .child {
          margin-left: -48px;
        }
      }
      .popu-div {
        opacity: 1;
        visibility: visible;
      }
    }
    .popu-div {
      width: 120px;
      height: 46px;
      background: #ea5a54;
      color: #fff;
      text-align: center;
      line-height: 46px;
      font-size: 16px;
      font-weight: bold;
      position: absolute;
      transition: 0.3s ease-out;
      -webkit-transition: 0.3s ease-out;
      -moz-transition: 0.3s ease-out;
      -khtml-transition: 0.3s ease-out;
      left: -120px;
      visibility: hidden;
      opacity: 0;
      top: 0;
      &.show {
        opacity: 1;
        visibility: visible;
      }
      &.popu-img {
        width: 120px;
        height: 120px;
        box-sizing: border-box;
        padding: 5px;
        img {
          width: 100%;
        }
      }
    }
    .wrap-child {
      width: 48px;
      height: 46px;
      overflow: hidden;
    }
    .phone-child {
      margin-left: 0 !important;
    }
    .child {
      width: 96px;
      height: 46px;
      transition: margin 0.3s ease-out;
      -webkit-transition: margin 0.3s ease-out;
      -moz-transition: margin 0.3s ease-out;
      -khtml-transition: margin 0.3s ease-out;
      .child-img {
        width: 48px;
        height: 46px;
        float: left;
      }
    }
  }
}
</style>
