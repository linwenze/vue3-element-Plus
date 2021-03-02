import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/scss/base.scss'
import router from '@/router'
import store from '@/store'
import api from './config/api/action/index'
let app=createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(api)
app.use(store)
app.mount('#app')
