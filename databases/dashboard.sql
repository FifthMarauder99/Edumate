
/*CREATE TABLE Students (
    ID SERIAL PRIMARY KEY,
    student_id INTEGER UNIQUE NOT NULL,
    student_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES users (user_id)
);

CREATE TABLE Professors (
    ID SERIAL PRIMARY KEY,
    prof_id INTEGER UNIQUE NOT NULL,
    professor_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (prof_id) REFERENCES users (user_id)
);

CREATE TABLE Admins (
    ID SERIAL PRIMARY KEY,
    admin_id INTEGER UNIQUE NOT NULL,
    admin_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES users (user_id)
);*/

CREATE TABLE Courses (
    ID SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Professor_id INTEGER NOT NULL,
    Start_Date DATE NOT NULL,
    End_Date DATE NOT NULL,
    capacity INTEGER NOT NULL,
    FOREIGN KEY (Professor_id) REFERENCES Professors (prof_id)
);

CREATE TABLE Enrollments (
    ID SERIAL PRIMARY KEY,
    User_id INTEGER NOT NULL,
    Course_id INTEGER NOT NULL,
    Enrolled_At TIMESTAMP NOT NULL,
    Completion_Date TIMESTAMP,
    FOREIGN KEY (User_id) REFERENCES Students (student_id),
    FOREIGN KEY (Course_id) REFERENCES Courses (ID)
);

CREATE TABLE Materials (
    ID SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Type VARCHAR(255) NOT NULL,
    Course_id INTEGER NOT NULL,
    Created_At TIMESTAMP NOT NULL,
    Content TEXT,
    FOREIGN KEY (Course_id) REFERENCES Courses (ID)
);

CREATE TABLE Assignments (
    ID SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Deadline TIMESTAMP NOT NULL,
    Course_ID INTEGER NOT NULL,
    FOREIGN KEY (Course_ID) REFERENCES Courses (ID)
);

CREATE TABLE Assignment_Grades (
    ID SERIAL PRIMARY KEY,
    Enrollment_id INTEGER NOT NULL,
    Assignment_id INTEGER NOT NULL,
    Grade INTEGER NOT NULL,
    FOREIGN KEY (Enrollment_id) REFERENCES Enrollments (ID),
    FOREIGN KEY (Assignment_id) REFERENCES Assignments (ID)
);




