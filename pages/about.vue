<script setup>
definePageMeta({
  title: '我的关于页面'
})

const route = useRoute()
useHead({
  title: route.meta.title,
  meta: [
    { property: 'og:title', content: `页面原标题：${route.meta.title}`}
  ]
})
</script>


<template>
  <h1>站点关于页面</h1>
  
  <NavBar></NavBar>

</template>