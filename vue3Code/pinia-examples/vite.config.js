import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteBaseConfig from './vite.base.config'; // 作用？
import viteDevConfig from './vite.dev.config';
import viteProdConfig from './vite.prod.config';

// https://vitejs.dev/config/

// 学习笔记

// 1.依赖预构建：首先vite会找到对应的依赖，然后调用esbuild（对js语法进行处理的一个库），将其他规范的代码转化成esmodule规范，然后放到当前目录下的node_modules/.vite/deps目录下
export default defineConfig({
  plugins: [vue()],

  // 2.1 配置文件语法提示以及开发环境和生产环境区分
  /* optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  } */

  // 2.2 关于环境的处理：该箭头函数为defineConfig中的参数，写在此
  // 策略模式：替代过多if-else写法
 /*  const envResolver = {
    "build": () => (
      return {...viteBaseConfig, ...viteProdConfig}
      );
    "serve": () => (
      return Object.assign({}, viteBaseConfig, viteDevConfig));
  }

  ({command: "build" | "serve"}) => {
  // command取值：取决于我们的启动命令是生产还是开发
    if (command === "build") {
      // 生产环境
    } else {
      // 开发环境
    }
  } */
})
