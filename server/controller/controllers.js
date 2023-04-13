const Mail = require("../model/model") //Importing the Mail model
const mongoose = require("mongoose");

// const mail_get_all = (req, res) => {
//     Mail.find().sort({ createdAt: -1 })
//     .then((data) =>{
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       res.status(400).json({ error: err.message })
//     })
// };
const mail_get_all = async (req, res) => {
    try{
      const mails = await Mail.find({});
      res.status(200).json(mails);
    }
    catch(err){
      res.status(400).json({ error: err.message })
    }
};

const mail_post = (req, res) => {
    const mail = new Mail(req.body);

    mail.save()
     .then((data) =>{
        res.status(301).json(data);
     })
     .catch((err) => {
      res.status(400).json({ error: err.message })
    })
};

const mail_get = (req, res) => {
    const { id } = req.params;

    Mail.findById(id)
     .then((data) =>{
      res.status(200).json(data);
     })
     .catch((err) => {
      res.status(400).json({ error: err.message })
    })
};

const mail_delete = (req, res) => {
    const { id } = req.params;

    Mail.findByIdAndDelete(id)
     .then(() => {
        res.status(200).json({ redirect: "/" });
     })
     .catch((err) => {console.log(err);})
};

const mail_starred = (req, res) => {
    Mail.find({ starred: true })
    .then(() =>{
       res.send("Starred");
    })
    .catch((err) => {
      res.status(400).json({ error: err.message })
    })
};

const mail_star = (req, res) => {
    const { id } = req.params;

    Mail.updateOne(id, { $set: { starred: true } })
     .then(() => {
        res.status(204).json({ isStarred: "starred" });
     })
     .catch((err) => {
      res.status(400).json({ error: err.message })
    })
};

const mail_unstar = (req, res) => {
    const { id } = req.params;

    Mail.updateOne(id, { $set: { starred: false } })
     .then(() => {
        res.status(204).json({ isStarred: "unstarred" });
     })
     .catch((err) => {
      res.status(400).json({ error: err.message })
    })
};

module.exports = {
    mail_get_all,
    mail_post,
    mail_get,
    mail_delete,
    mail_starred,
    mail_star,
    mail_unstar
}