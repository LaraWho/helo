create table posts (
    post_ID SERIAL PRIMARY KEY,
    title TEXT,
    img TEXT,
    post TEXT,
    author VARCHAR(80),
    author_picture TEXT,
    user_id INTEGER REFERENCES users(id)
);