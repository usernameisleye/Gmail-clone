const Mail = require("../model/model") //Importing the Mail model

const mail_get_all = (req, res) => {
    Mail.find().sort({ createdAt: -1 })
    .then((data) =>{
       res.send("All files")
    })
    .catch((err) => {console.log(err);})
};

const mail_post = (req, res) => {
    const mail = new Mail(req.body);

    mail.save()
     .then((data) =>{
        res.status(301).json({ redirect: "/mails" });
     })
     .catch((err) => {console.log(err);})
};

const mail_get = (req, res) => {
    const { _id } = req.params;

    Mail.findById(_id)
     .then((data) =>{
        res.send("Page File")
     })
     .catch((err) =>{console.log(err);})
};

const mail_delete = (req, res) => {
    const { _id } = req.params;

    Mail.findByIdAndDelete(_id)
     .then((data) => {
        res.status(200).json({ redirect: "/" });
     })
     .catch((err) => {console.log(err);})
};

const mail_starred = (req, res) => {
    Mail.find({ starred: true })
    .then((data) =>{
       res.send("Starred")
    })
    .catch((err) => {console.log(err, "None");})
};

const mail_star = (req, res) => {
    const { _id } = req.params;

    Mail.updateOne(_id, { $set: { starred: true } })
     .then((data) => {
        res.status(204).json({ isStarred: "starred" });
     })
     .catch((err) =>{console.log(err);})
};

const mail_unstar = (req, res) => {
    const { _id } = req.params;

    Mail.updateOne(_id, { $set: { starred: false } })
     .then((data) => {
        res.status(204).json({ isStarred: "unstarred" });
     })
     .catch((err) =>{console.log(err);})
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