import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Element PLUS
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//
import MttkVueWrap from 'mttk-vue-wrap';

//
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
//vue wrapper install
app.use(MttkVueWrap);
//
app.mount('#app')
