<style scoped>
.error-box{
  color: brown;
  padding: 1em;
  border: 1px solid #a5b6c8;
  background-color: #eef3f7;
}
</style>

<template>
  <div class="error-box">404, Not Found!</div>
</template>
<script setup>

const props = defineProps({
  error: Object
})
console.log(props.error );

// clearError();

// throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

// if(props.error){
//   throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
// }


// try{
//   const err = useError()
// }
// catch(e){
//   console.log(e);
// }


// setResponseStatus(404, 'Page Not Found')

</script>