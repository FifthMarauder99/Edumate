CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  username VARCHAR(50) UNIQUE,
  password VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  date_of_birth DATE,
  question1 VARCHAR(255),
  answer1 VARCHAR(255),
  question2 VARCHAR(255),
  answer2 VARCHAR(255)
);

CREATE EXTENSION pgcrypto;

-- For inserting values
INSERT INTO users (name, email,  password,role, date_of_birth,answer1)
VALUES ('Akshada Bhandari', 'akshada27@gmail.com', crypt('password123', gen_salt('bf')),'Student','2000-12-27','moti');

INSERT INTO users (name, email,  password,role, date_of_birth,answer1)
VALUES ('Sanika Bhandari', 'sanika27@gmail.com', crypt('password123', gen_salt('bf')),'Student','2004-05-27','moti');

-- will return values when user enters forgot password it will check username and security answer if correct will return values
SELECT * FROM users where email = 'akshada27@gmail.com' and answer1 = 'moti';

-- after matching password is updated in encrypted format
UPDATE users SET password = crypt('newpass',gen_salt('bf')) where email = 'akshada27@gmail.com';

SELECT * FROM users WHERE email = 'akshada27@gmail.com' AND password = crypt('newpass', password);

-- CREATE OR REPLACE FUNCTION hash_password(password text)
-- RETURNS text AS $$
-- BEGIN
--    RETURN crypt(password, gen_salt('bf'));
-- END;
-- $$ LANGUAGE plpgsql;

-- INSERT INTO users (name, email, username, password,role, date_of_birth)
-- VALUES ('Sanika Bhandari', 'sanika@gmail.com', 'sanika', hash_password('sanika'),'Student','2004-05-14');


SELECT * FROM users;

DROP table users;