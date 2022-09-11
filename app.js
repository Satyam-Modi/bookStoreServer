const express = require("express");
const mongoose =require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
require("dotenv").config();
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router) // localhost:5000/books

// app.use('/', (req, res, next) => {
//     res.send("This is our starting app");
// });
// console.log(process.env.MONGO_URI)
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(PORT);
})
.catch((err) => console.log(err));