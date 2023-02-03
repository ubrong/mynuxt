<script setup lang="ts">
import {ref} from 'vue';
const nick = ref('');

// 取得插件函数
const {$timeStamp} = useNuxtApp()

</script>

<template>
  <div>
    <h1>主页</h1>
    <hr>

    <div>你好， {{ nick || '陌生人' }}</div>

    <div>
      your name: <input type="text" v-model="nick">
    </div>

    <b> time: {{ $timeStamp() }} </b>

  </div>

  <NavBar></NavBar>
</template>

<style>

</style>