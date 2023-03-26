require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");
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
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// HOME REDIRECT
app.get("/", (req, res) =>{
    res.redirect("/mails")
});

// NODEMAILER
app.post("/mails/sent", (req, res) =>{
    const { to, from, sender ,subject, body } = req.body;
    let transporter = nodeMailer.createTransport({ // create reusable transporter object using the default SMTP transport
        service: 'gmail',
        auth: {
            user: 'adeleyeadesida@gmail.com',
            pass: 'wuithnryiutadxjd'
        }
    });

    const mailTemp = {
        from: `${ from }`,
        to: `${ to }`,
        sender: `${ sender }`,
        subject: `${ subject }`,
        text: `${ body }`,

        // Will add attachment config later
    }

    // send mail with defined transport object
    transporter.sendMail(mailTemp, (err, info) =>{
        if(err){
            console.log(err);
        }else{
            res.status(200).json({ msg: "Message Sent" })
        }
    });
})

// ALL ROUTES
app.use("/mails", router);

// 404 ROUTES
app.get("*", (req, res) => {
    res.status(404).json({ msg: "Error 404, Page Not Found" });
});


