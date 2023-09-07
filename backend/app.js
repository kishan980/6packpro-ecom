const express = require("express");
const errorMiddleware = require("./middleware/error")
const app =express();
app.use(express.json())

//router import
const productRouter = require("./router/productRouter")


app.use("/api/v1",productRouter)
app.use(errorMiddleware)

module.exports =app