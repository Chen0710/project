import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'  // 引入pinia
import router from './router/index'



// 创建Pinia实例
const pinia = createPinia();

// 创建vue根实例
const app = createApp(App);

// 挂在到vue根实例
app.use(pinia);
app.use(router);

app.mount('#app')
