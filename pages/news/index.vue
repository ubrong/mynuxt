<style scoped>

.title{
  line-height: 1.8;
  border-bottom: 1px solid #DDD;
}

.list{
  padding:1em;
  line-height: 1.5;
}

.list li{
  display: flex;
  align-items: center;
  margin:.5em 0;
  border-bottom:1px solid #DDD;
}

.list img{
  display: block;
  margin:1em 0;
  width: 6em;
  height:6em;
  background-color: #ccc;
  border:1px solid #ccc;
}
</style>

<template>
  <div>
    <h3 class="title">新闻/文章列表</h3>

    <ul class="list">
      <li v-for="(obj, index) in rows" :key="index">
        <img src="@/assets/nopic.jpg" alt="img blank" />

        <div>

          <nuxt-link :to="'/news/'+index">{{obj.title.slice(0, 24)}}</nuxt-link>

          <div class="flex flex-between hide">
            <span>
              {{ obj.source }}
            </span>
            <span>
              {{ obj.ptime }}
            </span>
          </div>

        </div>
        
        
        
      </li>
    </ul>
  </div>
  <NavBar></NavBar>

</template>


<script setup lang="ts">
import {ref} from "vue";

interface RowType{
  title:string;
  source:string;
  ptime:string;
}

const rows = ref<RowType[]>([]);

const { data } = await useFetch('https://www.fastmock.site/mock/01fe46e1d8c5999e49e4c4582d429e1b/newslist/now')

// console.log(data.value);
// console.log((res.value as any).data.rows);
rows.value = data.value.data.rows as RowType[];
 

</script>