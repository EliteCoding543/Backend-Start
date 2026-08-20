const express = require("express")
const ProductsRoutes = express.Router()

let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" }
];

// GET products
ProductsRoutes.get("/products", (req, res) => {
    try {
        res.json(products)
    } catch (error) {
        res.json({
            err : error.message
        })
    }
})

// CLEAR products

ProductsRoutes.delete("/products", (req, res) => {
    try {
        products.length = 0
        res.json({
            message: "Products cleared",
            products
        })
    } catch (error) {
        res.json({
            err : error.message
        });
    }
})

module.exports = {
    ProductsRoutes
}