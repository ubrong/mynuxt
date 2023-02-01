// catch-all路由
// 当所有的 api/routeX 都不存在时，会进入此路由

export default defineEventHandler((event) => {

  const {req, res} = event.node;

  return {
    stat:1,
    msg:'没有匹配到任何路由，最后一个路由',
    data:{
      url: req.url,
      method: req.method,
      statusCode: res.statusCode,
      time: (new Date).toLocaleString(),
    }
  }

})