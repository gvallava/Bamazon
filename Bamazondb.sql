/*CREATE DATABASE IF NOT EXISTS Bamazondb;*/

USE Bamazondb;

CREATE TABLE IF NOT EXISTS products (
item_id INTEGER(10) AUTO_INCREMENT NOT NULL PRIMARY KEY
, product_name VARCHAR(100) NOT NULL
, department_name VARCHAR(100) NOT NULL
, stock_quantity INTEGER(10) NOT NULL
);

INSERT INTO products
(item_id, product_name, department_name, stock_quantity)

VALUES
('1', 'carrots', 'vegetables','100')
,('2', 'apples', 'fruit','20')
,('3', 'potatoes', 'vegetables','200')
,('4', 'bananas', 'fruit','500')
,('5', 'strawberries', 'fruit','180')
,('6', 'oranges', 'fruit','10')
,('7', 'kiwi', 'fruit','400')
,('8', 'coconuts', 'fruit','30')
,('9', 'guava', 'fruit','20')
,('10', 'eggplant', 'vegetables','70');
