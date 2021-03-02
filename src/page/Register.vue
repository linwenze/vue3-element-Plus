<template>
  <div>
    <div class="resister-box" v-if="step==1">
      <div class="logo flex-l-v-center">
        <img src="@/assets/images/logo.png" />知店车商通注册
      </div>
      <div class="wrap-form">
        <el-form 

          ref="form"
          :model="form"
          label-width="108px"
          label-position="left"
        >
          <el-form-item label="客户类型" required>
            <el-select
              v-model="form.region"
              class="w442"
              placeholder="请选择活动区域"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号" required>
            <el-input v-model="form.name" class="w442"></el-input>
          </el-form-item>
          <el-form-item label="验证码" style="margin-bottom:0" required>
            <el-input v-model="form.code" class="w292"></el-input>
            <el-button @click="getCode" :disabled="show">{{show?count+'S':'获取验证码'}}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="tips m-t-20">
        <i class="el-icon-warning"></i>手机号码已存在
      </div>
      <div class="m-t-20">
        <el-button type="danger" class="w275" @click="onSubmit">立即提交</el-button>
      </div>
      <div class="m-t-5">
        <el-button type="text" class="w275">返回首页</el-button>
      </div>
      <div class="concat">
        如有问题，请联系<span class="red">400-8008-219</span>
      </div>
    </div>
    <div class="resister-box" v-if="step==2">
      <div class="logo flex-l-v-center">
        <div class="line"></div>
        <span>完善您的信息</span>
        <div class="line"></div>
      </div>
      <div class="wrap-form">
        <el-form
          ref="form"
          :model="form"
          label-width="108px"
          label-position="left"
        >
          <el-form-item label="公司全称" required>
            <el-input v-model="form.name" class="w442"></el-input>
          </el-form-item>
          <el-form-item label="所在城市" required>
            <el-select
              placeholder="请选择"
              @change="privanceChange"
              v-model="form.privance"
            >
              <el-option
                :label="item.title"
                v-for="(item, key) in list"
                :key="key"
                :value="item.id"
              ></el-option>
            </el-select>

            <el-select
              placeholder="请选择"
              v-model="form.city"
              class="w-238 m-l-10"
            >
              <el-option
                :label="item.title"
                v-for="(item, key) in childs"
                :key="key"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职位" style="margin-bottom:0" required>
            <el-select
              v-model="form.region"
              class="w442"
              placeholder="请选择活动区域"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="tips m-t-20">&nbsp;</div>
      <div class="m-t-20">
        <el-button type="danger" class="w275">注册完成</el-button>
      </div>
      <div class="m-t-5">
        <el-button type="text" class="w275">返回首页</el-button>
      </div>
      <div class="concat">
        如有问题，请联系<span class="red">400-8008-219</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        privance: "2",
        city: "",
      },
      list: [
        { id: "2", title: 33 },
        { id: "12", title: 3333 },
      ],
      childs: [],
      count: 60,
      show: false,
      timer: null,
      step:1,
    };
  },
  methods: {
    onSubmit() {
      this.step=2;
      console.log("submit!");
    },
    privanceChange() {
      this.childs = [{ id: 2, title: 444 }];
    },
    //倒计时60秒
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = true;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.resister-box {
  width: 900px;
  height: 580px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #dddddd;
  text-align: center;
  .logo {
    height: 146px;
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    color: #666666;
    position: relative;
    img {
      margin-right: 20px;
      margin-top: 4px;
    }
    .line {
      display: inline-block;
      width: 50px;
      height: 1px;
      border: 1px solid #dddddd;
      position: relative;
    }
    span {
      font-size: 24px;
      color: #666666;
      margin: 0px 5px;
    }
  }
  .wrap-form {
    margin-left: 174px;
    /deep/.el-form-item__label {
      font-size: 16px;
      color: #000;

      font-weight: 400;
      text-align: left;
    }
    .w442 {
      width: 442px;
    }
    .w292 {
      width: 292px;
    }
    /deep/.el-form-item__content {
      text-align: left;
    }
    /deep/.el-button--default {
      width: 140px;
      border: 1px solid #ea5a54;
      color: #ea5a54;
      margin-left: 10px;
    }
     /deep/.el-button--default:disabled{
        border: 1px solid #ccc;
      color: #ccc;
     }
  }
  .tips {
    font-size: 14px;
    line-height: 22px;
    margin-right: 110px;
    color: #ea5a54;
    i {
      margin-right: 8px;
    }
  }
  .w275 {
    width: 275px;
  }
  .w-238 {
    width: 238px;
  }
  .concat {
    text-align: center;
    font-size: 13px;
    margin-top: 20px;
    color: #4c4c4c;
  }
  .red {
    color: #ea5a54;
    font-weight: bold;
  }
}
</style>
