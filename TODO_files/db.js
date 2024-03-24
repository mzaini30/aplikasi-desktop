let namaDatabase = "todo";

alasql(/*sql*/ `create localStorage database if not exists ${namaDatabase};
attach localStorage database ${namaDatabase};
use ${namaDatabase};
create table if not exists todo(id integer auto_increment, todo text, isDone integer);`);
