require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routers");

// INITIALIZING EXPRESS
const app = express();

// CONNECTING DATABASE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser:true, useUnifiedTopology: true })
 .then(() =>{
    app.listen(process.env.DB_PORT, () =>{
        console.log(`Server is running on port ${process.env.DB_PORT}`);
    })
 })
 .catch((err) =>{
    if(err){
        throw err;
    }
 });

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ALL ROUTES
app.use("/api/mails", router);

// 404 ROUTES
app.get("*", (req, res) => {
    res.status(404).json({ msg: "Error 404, Page Not Found" });
});


