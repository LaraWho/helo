create table users (
    id SERIAL PRIMARY KEY,
    auth_id TEXT,
    user_name VARCHAR(80),
    user_password VARCHAR(30),
    user_pic TEXT
);