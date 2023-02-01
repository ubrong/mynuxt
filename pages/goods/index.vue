<style scoped>
.tpage{
  width:480px;
  margin:0 auto;

}

.title{
  line-height: 1.8;
}

.list{
  line-height: 1.5;
}

.list li{
  margin:.5em 0;
  padding:1em;
  border:1px solid #DDD;
  background-color: #f0f0f0;
}

.list img{
  display: block;
  margin:1em 0;
  width: 6em;
  height:6em;
  background-color: #ccc;
}
</style>

<template>
  <div class="tpage">
    <h3 class="title">新闻/文章列表</h3>

    <ul class="list">
      <li v-for="(obj, index) in rows" :key="index">
        <h3>{{obj.title.slice(0, 24)}}</h3>
        <img src="" alt="img blank">
        <div class="flex flex-between">
          <span>
            {{ obj.cate }}
          </span>
          <span>
            {{ obj.price }}
          </span>
        </div>
        
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import {ref} from "vue";

interface RowType{
  title:string;
  price:number;
  cate:number;
  // ptime:string;
}

const rows = ref<RowType[]>([]);

const { data } = await useFetch('/api/news')

// console.log(data.value);
// console.log((res.value as any).data.rows);
rows.value = data.value as RowType[];
 

</script>