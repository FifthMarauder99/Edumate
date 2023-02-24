DROP TABLE users;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  -- name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  mobile VARCHAR(100) NOT NULL,
  user_role VARCHAR(100) NOT NULL
  -- date_of_birth DATE,
  -- question1 VARCHAR(255),
  -- answer1 VARCHAR(255),
  -- question2 VARCHAR(255),
  -- answer2 VARCHAR(255)
);

CREATE OR REPLACE FUNCTION hash_password(password text)
RETURNS text AS $$
BEGIN
  RETURN crypt(password, gen_salt('bf'));
END;
$$ LANGUAGE plpgsql;


INSERT INTO users (email, username, password, user_role, mobile)
VALUES ('akshada@gmail.com', 'akshada', 'hashedpassword','Student','812-900-3232');


