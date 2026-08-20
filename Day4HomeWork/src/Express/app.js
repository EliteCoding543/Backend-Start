require("dotenv").config();
const express = require("express")
const app = express()
const { ProductsRoutes } = require("./Routes/Products.routes") 
const { usersRoutes } = require("./Routes/Users.routes")
const { CounterRoutes } = require("./Routes/Counter.routes")
const PORT = process.env.PORT || 8080;

app.use(express.json())

app.use("/api", ProductsRoutes)
app.use("/api", usersRoutes)
app.use("/api", CounterRoutes)

app.listen(PORT, () => {
    console.log(`Server at http://localhost:${PORT}`)
})