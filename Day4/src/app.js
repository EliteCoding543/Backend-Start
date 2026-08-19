require("dotenv").config();

const express = require("express");
const app = express();

const { userRouter } = require("./Routes/Users.routes");
const { ProductsRouter } = require("./Routes/Products.routes");

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", ProductsRouter);

app.listen(PORT, () => {
    console.log(`Server is Running... ${PORT}`);
});