// 说明：最后一个 module.exports 覆盖前面
// module.exports={
// 	host : 'hw.deb',       
// 	user : 'chuyh',              
// 	password : '372199',       
// 	port : '3306',                   
// 	database : 'chy' ,
// 	acquireTimeout: 15000, // 连接超时时间
//   connectionLimit: 10, // 最大连接数
//   waitForConnections: true, // 超过最大连接时排队
//   queueLimit: 0, // 排队最大数量(0 代表不做限制)
// }


// module.exports={
// 	host : '47.94.105.95',       
// 	user : 'chuyh',              
// 	password : '372199',       
// 	port : '4436',                   
// 	database : 'chy' ,
// 	acquireTimeout: 15000, // 连接超时时间
//   connectionLimit: 10, // 最大连接数
//   waitForConnections: true, // 超过最大连接时排队
//   queueLimit: 0, // 排队最大数量(0 代表不做限制)
// }

export default {
	host : 'localhost',       
	user : 'chuyh',              
	password : '372199',       
	port : '3306',                   
	database : 'chy' ,
	acquireTimeout: 15000, // 连接超时时间
  connectionLimit: 10, // 最大连接数
  waitForConnections: true, // 超过最大连接时排队
  queueLimit: 0, // 排队最大数量(0 代表不做限制)
}
