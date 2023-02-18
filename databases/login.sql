CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  date_of_birth DATE,
  question1 VARCHAR(255),
  answer1 VARCHAR(255),
  question2 VARCHAR(255),
  answer2 VARCHAR(255)
);


INSERT INTO users (name, email, username, password,role, date_of_birth)
VALUES ('Akshada Bhandari', 'akshada@gmail.com', 'akshada', 'hashedpassword','Student','2000-12-27');

CREATE OR REPLACE FUNCTION hash_password(password text)
RETURNS text AS $$
BEGIN
   RETURN crypt(password, gen_salt('bf'));
END;
$$ LANGUAGE plpgsql;

INSERT INTO users (name, email, username, password,role, date_of_birth)
VALUES ('Sanika Bhandari', 'sanika@gmail.com', 'sanika', hash_password('sanika'),'Student','2004-05-14');


SELECT * FROM users;