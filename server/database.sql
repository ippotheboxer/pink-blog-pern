-- Create DB --
CREATE DATABASE pinkblog;

-- Create table for the blog info --
CREATE TABLE blog_data (
    blog_id SERIAL PRIMARY KEY,
    blog_title varchar(200),
    blog_content varchar(300),
    creation_date timestamptz NOT NULL DEFAULT now(),
    author_id int NOT NULL,
    FOREIGN KEY (author_id) REFERENCES users(user_id)
);

-- User table which is linked by user_id --
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email varchar(320),
    username varchar(32),
    password varchar(100)
);
