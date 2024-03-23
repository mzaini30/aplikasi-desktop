alasql(`create localStorage database if not exists todo;
attach localStorage database todo;
use todo;
create table if not exists tasks(id integer primary key, task text, status integer);`);