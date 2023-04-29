/*
pinia区分vuex的地方：
1.pinia可以有多个store实例，而vuex只有一个store实例
  pinia：store目录下可定义多个js文件，每个作为单独的store实例在需要的组件中被引入使用；
  vuex：有module模块化进行状态管理，会将唯一store实例分割为多个module
*/

// 1.从pinia中引入定义store的函数
import { defineStore } from "pinia";

// 2.定义一个容器并导出
export const piniaTestUse = defineStore('piniaTestUse', {
    // 2.1定义存储器，存储容器状态
    state: () => {
        return {
            name: 'lucy',
            age: 18,
            sex: 'girl',
            height: 160
        }
    },
    // 2.2定义数据获取属性
    getters: {
        doubleAge: (state) => {
            state.age = state.age * 2;
        }
    },
    // 2.3封装业务逻辑
    actions: {
        changeHeight(num) {
            // 此时this指针指向的是当前的pinia容器，所以在actions中应该避免箭头函数的使用，因为箭头函数中的this指针是指向父级作用域
            this.height = this.height + num;
        }
    }
})