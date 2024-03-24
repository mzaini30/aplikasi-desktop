let namaDatabase = "catatan";

alasql(/*sql*/ `create localStorage database if not exists ${namaDatabase};
attach localStorage database ${namaDatabase};
use ${namaDatabase};
create table if not exists catatan(id integer auto_increment, judul text, isi text, slug text);`);
