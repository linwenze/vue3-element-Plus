import state from "@/store/state";
import { ElLoading } from 'element-plus';
const actions = {
  addCount() {
    state.count++;
  },
  openLoading () {
    if(!state.showLoading){
      state.loadingInstance= ElLoading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.5)'
      });
      state.showLoading=true;
    }
  },
  closeLoading () {
    state.showLoading=false;
    state.loadingInstance.close();
  },
};

// 同样需要导出类型
export default actions;