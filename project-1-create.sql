create schema project_1;
set schema 'project_1';

drop table users;
drop table roles;


--change role to race?
create table roles(
	"role_id" serial primary key,
	"role" text
);
select * from roles;

create table users(
	"user_id" serial primary key,
	"username" text not null unique,
	"password" text not null,
	"first_name" text, --want these not null?
	"last_name"text,
	"email" text,
	"role" int references roles ("role_id") --fk to roles
);
--select * from users;


--weapons/skills table?