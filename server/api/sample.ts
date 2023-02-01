export default defineEventHandler((event) => {

  const {req, res} = event.node;

  return {
    stat:1,
    msg:'ok',
    data:{
      url: req.url,
      method: req.method,
      statusCode: res.statusCode,
      time: (new Date).toLocaleString(),
    }
  }

})

