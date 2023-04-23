import { defineStore } from "pinia";
// 1.定义并导出容器
// 参数1:容器的id，必须唯一，将来pinia会把所有容器挂载到根容器
// 参数2:选项对象
// 返回值：一个函数，调用得到容器实例
export const useMainStore = defineStore('main', {
    // 类似于组件的data，用来存储容器状态
    // 1.必须是函数：为了在服务端渲染的时候避免交叉请求导致的数据状态污染
    // 2.必须是箭头函数：为了更好的ts类型推导
    state: () => {
        return {
            count: 100,
            foo: 'bar', 
            arr: [1, 2, 3]
        }
    },
    // 类似于组件的计算属性computed，有缓存的功能
    getters: {
        // 函数接收一个可选参数：state状态对象
        count10(state) {
            console.log('count10调用了')
            return state.count + 10
        },
        // ts语法中也可以在函数中使用this，但是此时无法自动推导函数返回值类型，需要明确定义函数返回值类型
        // count9(): number {
        //     console.log('count9调用了');
        //     return this.count ++ 
        // }
    },
    // 封装业务逻辑，修改state，类似于methods
    // 不能使用箭头函数来定义action，原因：因为箭头函数绑定外部this，使得this指向发生变化
    actions: {
        changeState(num) {
            // 通过this访问当前容器实例
            this.count = this.count + num;
            this.foo = 'hello',
            this.arr.push(4);

            // 一次性修改多个数据时，也可以用$patch
        }
    }
})
// 2.使用容器中的state
// 3。修改state
// 4.容器中action使用