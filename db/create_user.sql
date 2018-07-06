insert into users
(auth_id, user_name, user_password, user_pic)
values 
($1, $2, $3, $4)
returning *;