  
CREATE DATABASE IF NOT EXISTS next_blog;

USE next_blog;

CREATE TABLE IF NOT EXISTS posts (
  id INT UNSIGNED AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO posts (id, title, content)
VALUES (1, 'Using the Serverless Framework With AWS', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
