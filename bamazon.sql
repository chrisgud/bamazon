DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
	item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    stock_quantity INT NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Duct Tape", "Hardware Supplies", 9.95, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Toy Story 2 DVD", "Entertainment", 19.95, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Nintendo Switch", "Video Games", 299.95, 12);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Magic Eight Ball", "Toys", 10.95, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Coffee Mug", "Kitchen Supplies", 4.95, 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Toothpaste", "Health and Wellbeing", 7.99, 30);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Sega Dreamcast", "Video Games", 49.95, 1000);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Toolbox Bundle", "Hardware Supplies", 259.95, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Coffee Maker", "Kitchen Supplies", 99.95, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Aspirin 1000 count", "Hardware Supplies", 67.95, 10);

SELECT * FROM products;