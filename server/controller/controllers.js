const Mail = require("../model/model") //Importing the Mail model
const mongoose = require("mongoose");
const nodeMailer = require("nodemailer");
require("dotenv").config();

// Get all mails
const mail_get_all = async (req, res) => {
    try{
      const mails = await Mail.find({});
      res.status(200).json(mails);
    }
    catch(err){
      res.status(400).json({ error: err.message })
    }
};

// Create a new mail
const mail_post = async (req, res) => {
  const mail = new Mail(req.body);
  try{
    const data = await mail.save();
    res.status(301).json(data);
  }
  catch(err){
    res.status(400).json({ error: err.message });
  }
};

// Get a mail
const mail_get = async (req, res) => {
  const { id } = req.params;

  // Checking is id is valid using mongoose
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ redirect: "/" });
  }

  try{
    const mail = await Mail.findById(id);
    res.status(200).json(mail);
  }
  catch(err){
    res.status(400).json({ error: err.message });
  }
}

// Delete a mail
const mail_delete = async (req, res) => {
  const { id } = req.params;

  // Checking is id is valid using mongoose
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ error: "No such mail" })
  }

  try{
    const mail = await Mail.findOneAndDelete({ _id: id });
    res.status(200).json(mail);
  }
  catch(err){
    res.status(400).json({ error: err.message });
  }
};

// Send a mail
const send_mail = async (req, res) =>{
  const { recipient, sender, subject, body } = req.body;
  let transporter = nodeMailer.createTransport({ // create reusable transporter object using the default SMTP transport
      service: 'gmail',
      auth: {
          user: process.env.MY_MAIL,
          pass: process.env.MY_PASSWORD
      }
  });

  const mailTemp = {
      from: `${ sender }`,
      to: `${ recipient }`,
      subject: `${ subject }`,
      text: `${ body }`,

      // Will add attachment config later
  }

  // send mail with defined transport object
  transporter.sendMail(mailTemp, (err, info) =>{
      if(err){
          res.status(400).json({ error: err.message });
      }else{
          res.status(200).json({ msg: "Message Sent" });
      }
  });
};

module.exports = {
    mail_get_all,
    mail_post,
    mail_get,
    mail_delete,
    send_mail,
}