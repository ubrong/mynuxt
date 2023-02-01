import {select} from "../tools/mysql"

export default defineEventHandler((event) => {

  // const {req, res} = event.node;
  const gets = getQuery(event)

  return select('SELECT id,title,cate,price,stat,ctime FROM t_tb_goods where id>? ORDER BY id desc LIMIT 10;', [gets.id ?? 1000], 2);


})

