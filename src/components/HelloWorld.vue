<script setup>
// 1. 直接导入组件
import Comp from '@/components/Comp.vue';
import { ref } from 'vue'


// 2. 属性定义
defineProps({
  msg: String,
})

// 3. expose主动暴露属性
defineExpose({
  someMethod(){
    console.log('some message from Helloworld');
  }
})

// 定义事件
const emits = defineEmits(['myclick']);
const onclick = ()=>{
  emits('myclick')
}

const count = ref(0)


fetch('/api/getUser').then(res=>res.json()).then(res=>{
  console.log(res);
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <Comp></Comp>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <button @click="onclick">  </button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
