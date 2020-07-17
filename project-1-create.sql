create schema project_1;
set schema 'project_1';

drop table users;

--change role to race?

create table users(
	"user_id" serial primary key,
	"username" text not null unique,
	"password" text not null,
	"first_name" text, 
	"last_name"text,
	"email" text,
	"role" text,
	"image" text
);
--select * from users;


--weapons/skills table?