-------------------------------------------------
Run Following Commands
-------------------------------------------------
npm init -y (To create new project)

npm i express

npm i pg

--------------------------------------------------
Create Database and Table in Postgres
--------------------------------------------------
CREATE DATABASE schoolDb;

CREATE TABLE school ( id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, fees DECIMAL(10,2) NOT NULL);

---------------------------------------------------
To Run
---------------------------------------------------
node index.js
