<script setup lang="ts">

const title = 'support-page'

// 定义页头
useHead({
  title: 'now page: '+title,
  meta: [
    { name: 'description', content: 'page: '+title }
  ],
})

</script>

<template>
  <div class="tpage">
    <h1>Support Page</h1>
    <hr>
    <div class="flex flex-between">
      <b>left</b>
      <b>right</b>
    </div>    
  </div>

</template>

<style scoped>
.tpage{
  max-width: 480px;
  margin:0 auto;
  line-height: 2;
  background-color: #F0F0F0;
}
</style>
