<script setup lang="ts">

</script>

<template>
  <nav class="nav-box">
    <NuxtLink active-class="active" to="/">主页</NuxtLink>
    <NuxtLink active-class="active" to="/news">文化</NuxtLink>
    <NuxtLink active-class="active" to="/support">动态</NuxtLink>
    <NuxtLink active-class="active" to="/about">关于</NuxtLink>
  </nav>
</template>

<style>
.active{
  color:red;
  font-weight: 700;
}

.log-box{
  padding:1em 0;
  text-align: center;
  border-bottom: 1px solid #DDD;
}

.logo{
  /* width: 80px; */
  height: 50px;
}

.nav-box{
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
  background-color: #ddd;
  height:50px;
  text-align: center;

  display: flex;
  justify-content: space-between;
  align-items: center;

}

.nav-box > * {
  flex:1;
}

.box{
  padding: 1rem;
  line-height: 1.5;
  text-indent: 1em;

}
</style>