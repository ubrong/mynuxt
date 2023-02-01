<script setup lang="ts">
import {ref} from 'vue';
const nick = ref('');

// 取得插件函数
const {$timeStamp} = useNuxtApp()

</script>

<template>
  <div class="home">
    <h1>你好， {{ nick || '陌生人' }}</h1>
    <div>
    your name: <input type="text" v-model="nick">
    </div>

    <b>time: {{ $timeStamp() }} </b>

  </div>
</template>

<style>
:root{
  background-color: #DDD;
}

.home{
  max-width: 480px;
  margin:0 auto;
  background-color: #FFF;
  height: 100vh;
}
</style>