const express = require("express");

const ProductsRouter = express.Router();

const products = [
  { id: 1, name: "iPhone 15", category: "Mobile", price: 69999, stock: 25, rating: 4.7 },
  { id: 2, name: "Samsung Galaxy S24", category: "Mobile", price: 74999, stock: 18, rating: 4.6 },
  { id: 3, name: "OnePlus 12", category: "Mobile", price: 59999, stock: 30, rating: 4.5 },
  { id: 4, name: "Google Pixel 8", category: "Mobile", price: 65999, stock: 15, rating: 4.4 },
  { id: 5, name: "Redmi Note 13", category: "Mobile", price: 18999, stock: 50, rating: 4.2 },

  { id: 6, name: "MacBook Air M2", category: "Laptop", price: 99999, stock: 12, rating: 4.8 },
  { id: 7, name: "Dell Inspiron 15", category: "Laptop", price: 57999, stock: 20, rating: 4.3 },
  { id: 8, name: "HP Pavilion 14", category: "Laptop", price: 62999, stock: 16, rating: 4.4 },
  { id: 9, name: "Lenovo IdeaPad Slim 5", category: "Laptop", price: 54999, stock: 22, rating: 4.5 },
  { id: 10, name: "Asus Vivobook 15", category: "Laptop", price: 48999, stock: 28, rating: 4.2 },

  { id: 11, name: "Sony WH-1000XM5", category: "Headphones", price: 29999, stock: 14, rating: 4.8 },
  { id: 12, name: "AirPods Pro 2", category: "Headphones", price: 24999, stock: 25, rating: 4.7 },
  { id: 13, name: "JBL Tune 770NC", category: "Headphones", price: 6999, stock: 40, rating: 4.3 },
  { id: 14, name: "Boat Rockerz 550", category: "Headphones", price: 1999, stock: 60, rating: 4.1 },
  { id: 15, name: "Sennheiser HD 450BT", category: "Headphones", price: 8999, stock: 18, rating: 4.4 },

  { id: 16, name: "Apple Watch Series 9", category: "Smartwatch", price: 41999, stock: 10, rating: 4.6 },
  { id: 17, name: "Samsung Galaxy Watch 6", category: "Smartwatch", price: 29999, stock: 15, rating: 4.5 },
  { id: 18, name: "OnePlus Watch 2", category: "Smartwatch", price: 24999, stock: 20, rating: 4.4 },
  { id: 19, name: "Noise ColorFit Pro", category: "Smartwatch", price: 3999, stock: 45, rating: 4.2 },
  { id: 20, name: "Boat Wave Sigma", category: "Smartwatch", price: 1999, stock: 55, rating: 4.0 },

  { id: 21, name: "Sony Bravia 55", category: "TV", price: 79999, stock: 8, rating: 4.7 },
  { id: 22, name: "Samsung Crystal 4K", category: "TV", price: 54999, stock: 12, rating: 4.5 },
  { id: 23, name: "LG OLED 48", category: "TV", price: 99999, stock: 6, rating: 4.8 },
  { id: 24, name: "TCL 55 QLED", category: "TV", price: 44999, stock: 14, rating: 4.3 },
  { id: 25, name: "Mi 43 Smart TV", category: "TV", price: 32999, stock: 25, rating: 4.2 },

  { id: 26, name: "Canon EOS 1500D", category: "Camera", price: 42999, stock: 9, rating: 4.5 },
  { id: 27, name: "Nikon D7500", category: "Camera", price: 79999, stock: 7, rating: 4.7 },
  { id: 28, name: "Sony Alpha A6400", category: "Camera", price: 74999, stock: 11, rating: 4.8 },
  { id: 29, name: "GoPro Hero 12", category: "Camera", price: 39999, stock: 13, rating: 4.6 },
  { id: 30, name: "DJI Osmo Action 4", category: "Camera", price: 34999, stock: 17, rating: 4.5 },

  { id: 31, name: "Nike Air Max", category: "Shoes", price: 8999, stock: 35, rating: 4.5 },
  { id: 32, name: "Adidas Ultraboost", category: "Shoes", price: 12999, stock: 22, rating: 4.7 },
  { id: 33, name: "Puma Running Shoes", category: "Shoes", price: 5999, stock: 40, rating: 4.2 },
  { id: 34, name: "Reebok Classic", category: "Shoes", price: 4999, stock: 30, rating: 4.3 },
  { id: 35, name: "Skechers Go Run", category: "Shoes", price: 6999, stock: 28, rating: 4.4 },

  { id: 36, name: "Levi's Denim Jacket", category: "Clothing", price: 4999, stock: 25, rating: 4.3 },
  { id: 37, name: "Nike Hoodie", category: "Clothing", price: 3999, stock: 32, rating: 4.5 },
  { id: 38, name: "Adidas T-Shirt", category: "Clothing", price: 1999, stock: 50, rating: 4.2 },
  { id: 39, name: "Puma Track Pants", category: "Clothing", price: 2499, stock: 42, rating: 4.1 },
  { id: 40, name: "Roadster Casual Shirt", category: "Clothing", price: 1499, stock: 60, rating: 4.0 },

  { id: 41, name: "Philips Air Fryer", category: "Appliances", price: 8999, stock: 18, rating: 4.5 },
  { id: 42, name: "Prestige Mixer Grinder", category: "Appliances", price: 3999, stock: 25, rating: 4.2 },
  { id: 43, name: "LG Washing Machine", category: "Appliances", price: 32999, stock: 10, rating: 4.6 },
  { id: 44, name: "Samsung Microwave", category: "Appliances", price: 11999, stock: 15, rating: 4.3 },
  { id: 45, name: "Voltas Air Conditioner", category: "Appliances", price: 45999, stock: 8, rating: 4.4 },

  { id: 46, name: "Logitech MX Master 3S", category: "Accessories", price: 8999, stock: 20, rating: 4.8 },
  { id: 47, name: "Mechanical Keyboard", category: "Accessories", price: 4999, stock: 35, rating: 4.5 },
  { id: 48, name: "Samsung 1TB SSD", category: "Accessories", price: 6999, stock: 27, rating: 4.7 },
  { id: 49, name: "Anker Power Bank", category: "Accessories", price: 2999, stock: 45, rating: 4.4 },
  { id: 50, name: "USB-C Hub", category: "Accessories", price: 1999, stock: 55, rating: 4.2 }
];


// GET ALL PRODUCTS
ProductsRouter.get("/products", (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});


// DELETE LAST PRODUCT
ProductsRouter.delete("/products", (req, res) => {
  try {
    const removeData = products.pop();

    res.json({
      message: "Product deleted successfully",
      data: removeData
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});


module.exports = {
  ProductsRouter
};