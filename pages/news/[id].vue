<script setup lang="ts">
const route = useRoute();
// console.log(route.params);

// 定义页头
useHead({
  title: '读取news: '+route.params.id,
  meta: [
    { name: 'description', content: '重置页面描述.' }
  ],
})

</script>

<template>
  <div>
    <h1>news id: {{ $route.params.id  }}</h1>
  </div>
  <NavBar></NavBar>
</template>

