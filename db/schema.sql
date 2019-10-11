DROP DATABASE friends_db;
CREATE DATABASE friends_db;

/* this is how i connect to a database*/
USE friends_db;

CREATE TABLE friends (
    id INT NOT NULL AUTO_INCREMENT, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    friends_name VARCHAR(255),
    picture_link VARCHAR(255),
    PRIMARY KEY(id) /* if you don't do line 11, you get an error */
);

CREATE TABLE questions (
    id INT NOT NULL AUTO_INCREMENT, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    questions VARCHAR(255),
    PRIMARY KEY(id) /* if you don't do line 11, you get an error */
);

CREATE TABLE scores (
    id INT NOT NULL AUTO_INCREMENT, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    question_id VARCHAR(255),
    friend_id VARCHAR(255),
    score VARCHAR(255),
    PRIMARY KEY(id) /* if you don't do line 11, you get an error */
);

