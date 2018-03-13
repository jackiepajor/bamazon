DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products
(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(15) NULL,
  PRIMARY KEY(item_id)
  );
    
    INSERT INTO products
        (product_name, department_name, price, stock_quantity )
   
    VALUES
        ("Lamp", "Lighting", 35.00, 10),
        ("Slippers", "Shoes", 20.00, 4),
        ("Socks", "Clothing", 5.00, 50),
        ("Blanket", "Bedding", 28.00, 5),
        ("Picture Frame", "Decor", 15.00, 25),
        ("Pool Float", "Outdoors", 75.00, 3),
        ("iPhone Charger", "Electronics", 18.00, 10),
        ("Blender", "Kitchen", 45.00, 2),
        ("Hair Dryer", "Beauty", 50.00, 6),
        ("Throw Pillow", "Bedding", 12.00, 8);
    
    SELECT * FROM bamazon.products;