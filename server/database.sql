-- Create DB --
CREATE DATABASE pinkblog;

-- User table which is linked by username --
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email varchar(320) UNIQUE,
    username varchar(32) UNIQUE,
    password varchar(100) NOT NULL
);

-- Create table for the blog info --
CREATE TABLE blog_data (
    blog_id SERIAL PRIMARY KEY,
    blog_title varchar(200),
    blog_content varchar(300),
    creation_date timestamptz NOT NULL DEFAULT now(),
    author_name varchar(100) NOT NULL,
    FOREIGN KEY (author_name) REFERENCES users(username)
);
