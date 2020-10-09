CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(80) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (id)
);

