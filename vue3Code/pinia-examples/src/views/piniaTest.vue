<!-- pinia学习笔记 -->
<template>
  <div>
    <p>{{testUse.name}}</p>
    <p>{{testUse.age}}</p>
    <p>{{testUse.sex}}</p>
    <p>{{testUse.height}}</p>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { piniaTestUse } from '../store/piniaTest';  // 在当前组件引入pinia状态管理器
import { mapState, mapActions } from 'pinia';  // 将存储在状态管理器中的数据、方法等引入当前页面使用，直接在当前页面对状态管理器中的数据进行操作
export default {
  data () {
    return {
        testUse: piniaTestUse(), // 引入的状态管理器是一个函数形式
    };
  },
  computed: {
    // mapState: 生成计算属性，返回一个对象，需要使用一个工具函数将多个对象合并为一个，这样就可以使我们将最终对象传给computed属性
    // ...mapState({name: 'name', age: 'age', sex: 'sex', height: 'height'})
  },
  methods: {
    changeData() {
      console.log(this.copyData)
      // 1.直接修改testUse中的数据
      // this.testUse.name = 'lucky'

      // 2.如果需要一次性修改多个变量，则可以使用$patch方法：传递一个对象/传递一个函数
      // 对象
      // this.testUse.$patch({
      //   height: this.testUse.height + 10,
      //   sex: this.testUse.sex = 'boy'
      // })
      // 函数
      // this.testUse.$patch(state => {
      //   state.name = 'lucky',
      //   state.age = 99
      // })

      // 3.逻辑较多时，封装到actions中作处理
      // this.testUse.changeHeight(20);
    }
  }
}
</script>