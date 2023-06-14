<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
// 定义一个空的ref ， 当vue找到 同名的组件， 会自动填充
// 记得value
const hw = ref(null);
const handleMyClick = ()=>{
  console.log('myclick');
  hw.value.someMethod()
}
</script>

<template>
  <div @click="$store.commit('add')">
    {{ $store.state.counter }}
  </div>
  <!-- <HelloWorld msg="Vite + Vue" @myclick="handleMyClick" ref="hw"/> -->
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
