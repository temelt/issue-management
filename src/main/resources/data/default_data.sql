insert into users (id,uname,pwd,name_surname,email) values (1000,''temelt'',''123'',''Taner TEMEL'',''tanertemel@outlook.com'');

insert into project(id,created_at,status,project_code,project_name,manager_user_id) values (1000,now(),true,''ISMAN'',''Issue Management System'',1000);

insert into issue (id,created_at,status,date,description,details,issue_status,assignee_user_id,project_id)
values (1000,now(),true,now(),''Username should be unique'',''User registration step, username should be checked for unique username'',''IN_PROGRESS'',1000,1000);

insert into issue (id,created_at,status,date,description,details,issue_status,assignee_user_id,project_id)
values (1001,now(),true,now(),''API throwing an exception for null values'',''API throwing an exception for null values'',''IN_REVIEW'',1000,1000);

insert into issue_history (id,created_at,status,date,description,details,issue_status,assignee_user_id,issue_id)
values (1000,now(),true,now(),''Username should be unique'',''User registration step, username should be checked for unique username'',''OPEN'',1000,1000);