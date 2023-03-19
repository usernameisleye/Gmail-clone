const express = require("express");
const mongoose = require("mongoose");
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");
const router = require("./routes/routers");

// INITIALIZING EXPRESS
const app = express();

const PORT = 5050;

const dbUrl = "mongodb+srv://adeleyeadesida:swiftmail@swiftmail.6vgh7ip.mongodb.net/swiftmail?retryWrites=true&w=majority";
mongoose.connect(dbUrl, { useNewUrlParser:true, useUnifiedTopology: true })
 .then((data) =>{
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`);
    })
 })
 .catch((err) =>{
    if(err){
        throw err;
    }
 })

// MIDDLEWARES
app.use(express.json());
app.use("/mails", router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// HOME REDIRECT
app.get("/", (req, res) =>{
    res.redirect("/mails")
})