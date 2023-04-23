<template>
   <div>
     <!-- <p>{{ mainStore.count }}</p>
    <p>{{ mainStore.foo }}</p> -->
    <hr>

    <button @click="handleCountChange">修改数据</button>

    <p>{{count}}</p>
    <p>{{foo}}</p>

    <p>mainStore.count10</p>
    <p>mainStore.count10</p>
    <p>mainStore.count10</p>
    <p>mainStore.count10</p>
   </div>
</template>

<script>
import { useMainStore } from "../store";
import { storeToRefs } from 'pinia';
export default {
  data() {
    return {
      mainStore: useMainStore()
    }
  },
  mounted() {
    console.log(this.mainStore.count)
    // 使用解构语法，但是存在问题：拿到的数据不是响应式的，是一次性的
    // const {count, foo} = mainStore

    // 使用storeToRefs解构，可以使数据保持响应性
    // pinia实际上是将state数据都做了reactive处理，把解构出来的数据做ref响应式处理
    // 在这种情况下，访问数据应该使用count.value
    const {count, foo} = storeToRefs(mainStore);
  },
  methods: {
    handleCountChange() {
      // 1.想要得到响应式数据，直接对mainStore中的数据进行操作
      mainStore.count++;
      // 2.如果需要修改多个数据，使用$patch批量更新，有性能优化的效果
      mainStore.$patch({
        count: mainStore.count + 1,
        foo: 'hello'
      })
      // 3.$patch函数，传递一个函数，进行批量更新
      mainStore.$patch(state => {
        state.count ++;
        state.foo = 'hello',
        state.arr.push(4)
      })
      // 4.逻辑较多时，可封装到action中作处理
      mainStore.changeState(10)
    }
  }
}
</script>