const express = require("express")
const usersRoutes = express.Router()

let users = [
  { id: 1, name: "Shubham" },
  { id: 2, name: "Rahul" }
];

// GET Users
usersRoutes.get("/users", (req, res) => {
    try {
        res.json(users)
    } catch (error) {
        res.json({
            err : error.message
        })
    }
})

// CLEAR Users

usersRoutes.delete("/users", (req, res) => {
  try {
    users.length = 0
    res.json({
        message : "Users cleared",
        users
    })
  } catch (error) {
      res.json({
        err : error.message      
    })
  }
})

module.exports = {
    usersRoutes
}