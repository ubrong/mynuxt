
import mysql from "mysql"
import dbConfig from "./db.config.js"

// 一、 连接池
const pool  = mysql.createPool(dbConfig);

let emsg='ok';
function getErr(){
  return emsg;
}

function setErr(_emsg){
  emsg=_emsg;
  return false;
}


// 二、sql执行语句
const query = (sql, params)=>{
  // 返回promise
  return new Promise((resolve,reject)=>{

    // 取回连接
    pool.getConnection( (err, conn) => {
      // 连接错误
      if (err) return reject(err);

      // 执行语句
      conn.query(sql, params, (err, rows, fields) => {

        conn.release();//执行后立即释放连接

        if (err) return reject(err);

        return resolve(rows);
      });

    });

  });
}


/* 
 * 读取
 * fetchType int 2:二维数组， 1:一维数组
 * 说明：select语句返回的是 [] 或 [RowDataPacket{...}]
 */
const select = async (sql, params, fetchType=2)=>{
	let r = await query(sql, params);
	
	if(!r) return []; 
	return fetchType===1 ? r[0] : r;
}


//设置页码的limit 20221004194439
const setLimit = (pageNmb=1, pageSize=6)=>{
  if(pageNmb<1) pageNmb=1;
  if(pageSize<3) pageSize=6;

  let start = (pageNmb-1)*pageSize;

  return ` limit ${start},${pageSize}`;

}


/* 
  * 执行（增删改）
  * 
  * 其它说明：如果是插入语句，也可以使用下面的方法
	var post  = {id: 1, title: 'Hello MySQL'};
	var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {});
	INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
 */
const execute = async (sql, params)=>{
	let r = await query(sql, params);

	return {
		// matched: r.affectedRows, 
		affected: r.affectedRows, 
		changed: r.changedRows, 
		warning: r.warningCount,
		insertId: r.insertId
	};
}


// 拼接为占位语句
const setBindsite=(obj, separtor=" and ")=>{
	let r = [];
	for(let v of obj){
		r.push(v+'=?');
	}

	return  r.join(separtor);
}

/* 
	更新 20220508143101

	示例：
	await db.update('abc', {id:15, age:32, nick:'小张'}, ['id']);
	await db.update('abc', {id:15, age:32, nick:'小张'}, ['id', 'age']);
	await db.update('abc', {id:15, age:32, nick:'小张'}, {y:2022, m:11}); 
	await db.update('abc', {id:15, age:32, nick:'小张'}, 'id=5 or stat>1');
*/
const update = (tableName, rowObj, where)=>{

	if(!where){
		return setErr('条件不能为空！');
	}

	let fields = Object.keys(rowObj);//set的内容用于生成占位
	let dataRow = Object.values(rowObj);//要绑定的数据

	switch(where.constructor.name){
		case 'String':
			// 字符类型，不需要处理
		break;

		case 'Object':
			// 加入数据中
			dataRow = dataRow.concat( Object.values(where) );
			// 生成占位条件
			where = setBindsite(Object.keys(where), ' and ');
		break;

		case 'Array':{
			let _whereArr=[];
			for(let k of where){
				if(!rowObj[k]){
					return setErr('条件中没有对应索引的值');
				}

				// 生成条件数组，并加入值
				_whereArr.push(k+'=?');
				dataRow.push(rowObj[k]);
			}

			// 生成占位条件
			where = _whereArr.join(" and ");
		}
		break;

		default:
			return setErr('条件参数类型错误！');		
	}

	//生成sql语句
	$sql =  'update '+tableName+' set '+ setBindsite(fields, ', ') + ' where '+where;
	// console.log($sql, dataRow);//return $sql;
	return execute($sql, dataRow);
}



/* 
	删除 20220508143101

  示例
	await db.del('xxx', 'id=5');	
	await db.del('xxx', {id:5, stat:1});
*/
const del = (tableName, where)=>{

	if(!where) return setErr('条件不能为空！');
	
	let dataRow = [];//要绑定的行数据

	switch(where.constructor.name){
		case 'String':
			// 字符类型，不需要处理
		break;

		case 'Object':
			dataRow = Object.values(where);//要绑定的数据
			where = setBindsite(Object.keys(where), ' and ');//set的内容用于生成占位
		break;
	}

	//生成sql语句
	$sql = 'DELETE FROM '+tableName+' WHERE '+where;
	// console.log($sql, dataRow);
	// return $sql;
	return execute($sql, dataRow);
}



/* 
	创建 20220508143101

  示例
	await db.insert ('xxx', {id:5, stat:1});
*/
const insert = (tableName, rowObj)=>{

	let fields = Object.keys(rowObj);//插值字段
	let valSites = new Array(fields.length).fill('?');//值占位
	let dataRow = Object.values(rowObj);//值数据

	//生成sql语句
	$sql =  `INSERT INTO ${tableName} (${fields.join(',')}) VALUES (${valSites.join(', ')});`;
	// console.log($sql, dataRow);
	// return $sql;
	return execute($sql, dataRow);
}




/* 
 * 读取
 * fetchType int 2:二维数组， 1:一维数组
 * 说明：select语句返回的是 [] 或 [RowDataPacket{...}]
 */
// export const select = async (sql, params, fetchType=2)=>{
//   let r = await query(sql, params);

//   if(!r) return []; 
//   return fetchType===1 ? r[0] : r;
// }





export  {
  query,
  // transaction,
  select,
  setLimit,
  execute,
  update,
  del,
  insert,
  getErr,
  // transactionAwait,
  // execute,
}




