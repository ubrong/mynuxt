import {select} from "../tools/mysql"

export default defineEventHandler((event) => {

  // const {req, res} = event.node;
  const gets = getQuery(event)

  return select('SELECT * FROM t_dict where id=? ORDER BY id desc LIMIT 1;', [gets.id ?? 1051], 1);


})

