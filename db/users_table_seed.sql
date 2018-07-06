create table users (
    id SERIAL PRIMARY KEY,
    auth_id TEXT,
    user_name VARCHAR(80),
    user_password VARCHAR(30),
    user_pic TEXT
);

create table posts (
    post_ID SERIAL PRIMARY KEY,
    title TEXT,
    img TEXT,
    post TEXT,
    author VARCHAR(80),
    author_picture TEXT,
    user_id INTEGER REFERENCES users(id)
);