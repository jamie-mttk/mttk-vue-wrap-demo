import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Element PLUS
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//
import WRAPPER from 'vuewrapper'

//
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
//vue wrapper install
//Another way is to install as required, import component in the vue file
//import {CompWrap} from 'vuewrapper'
app.use(WRAPPER)
//
app.mount('#app')
