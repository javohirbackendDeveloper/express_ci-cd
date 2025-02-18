CREATE DATABASE lesson TEMPLATE template0;
/c lesson



CREATE TABLE product (
    id SERIAL PRIMARY KEY,     
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL 
);
