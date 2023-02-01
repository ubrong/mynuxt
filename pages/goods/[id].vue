<template>
  <div>
    <h1>goods id: {{ $route.params.id  }}</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
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
