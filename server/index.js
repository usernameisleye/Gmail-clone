const express = require("express");
const mongoose = require("mongoose");
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");
const router = require("./routes/routers");

// INITIALIZING EXPRESS
const app = express();

const PORT = 5050;

const dbUrl = "mongodb+srv://adeleyeadesida:@swiftmail.6vgh7ip.mongodb.net/swiftmail?retryWrites=true&w=majority";
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
 });

// MIDDLEWARES
app.use(express.json());
app.use("/mails", router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// HOME REDIRECT
app.get("/", (req, res) =>{
    res.redirect("/mails")
});

// 404 ROUTES
app.get("*", (req, res) => {
    res.status(404).json({ msg: "Error 404, Page Not Found" });
});

// NODEMAILER
app.post("/mails/sent", async (req,res) =>{
    const { to, from, subject, body } = req.body;
    let transporter = nodemailer.createTransport({ // create reusable transporter object using the default SMTP transport
        service: 'gmail',
        auth: {
            user: 'adeleyeadesida@gmail.com',
            pass: 'wuithnryiutadxjd'
        }
});

const mailTemp = {
    from: `${ from }`,
    to: `${ to }`,
    subject: `${ subject }`,
    text: `${ body }`,

    // Add attachment config
}

// send mail with defined transport object
let info =  await transporter.sendMail(mailTemp);
})