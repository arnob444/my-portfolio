CREATE DATABASE portfolio_db;
USE portfolio_db;

CREATE TABLE contact_form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    password VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
);