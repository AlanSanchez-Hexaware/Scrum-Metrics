CREATE TABLE test_users(
user_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
username varchar(40) NOT NULL,
password varchar(12) NOT NULL,
e_mail varchar(100) NOT NULL,
name varchar(256) NOT NULL,
image varchar(256));



CREATE TABLE project(
project_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
name varchar(60) NOT NULL,
description varchar(1024) NOT NULL,
start_date date NOT NULL,
end_date date,
image varchar(256));



CREATE TABLE member(
project_id INT(11) NOT NULL,
user_id int(11) NOT NULL,
user_type varchar(15) NOT NULL,
FOREIGN KEY (project_id) REFERENCES project(project_id),
FOREIGN KEY (user_id) REFERENCES test_users(user_id));



CREATE TABLE sprint(
sprint_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
name varchar(50) NOT NULL,
project_id int(11) NOT NULL,
done bool NOT NULL,
FOREIGN KEY (project_id) REFERENCES project(project_id));



CREATE TABLE sprint_column(
col_id int(11) NOT NULL PRIMARY KEY,
name varchar(50) NOT NULL);



CREATE TABLE story(
story_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
description varchar(1024) NOT NULL,
sprint_id int(11) NOT NULL,
project_id int(11) NOT NULL,
col_id int(11) NOT NULL,
FOREIGN KEY (sprint_id) REFERENCES sprint(sprint_id),
FOREIGN KEY (col_id) REFERENCES sprint_column(col_id),
FOREIGN KEY (project_id) REFERENCES project(project_id));



INSERT INTO sprint_column VALUES (1,'Backlog');
INSERT INTO sprint_column VALUES (2,'To Do');
INSERT INTO sprint_column VALUES (3,'In Progress');
INSERT INTO sprint_column VALUES (4,'Test');
INSERT INTO sprint_column VALUES (5,'Review');
INSERT INTO sprint_column VALUES (6,'Done');






update story set sprint_id = 1 where project_id = 78;
update sprint set done = 0 where project_id = 78 and sprint_id = 1;
select * from story







create user 'tester'@'localhost' identified by 'toor';
grant all privileges on *.* to 'tester'@'localhost' with grant option;
create user 'tester'@'%' identified by 'toor';
grant all privileges on *.* to 'tester'@'%' with grant option;