const express = require("express");
const router = express.Router();
const Mail = require("../model/model") //Importing the Mail model

// Get all mails
router.get("/", (req, res) =>{
    Mail.find().sort({ createdAt: -1 })
     .then((data) =>{
        res.send("All files")
     })
     .catch((err) => {console.log(err);})
});

// Create a new mail
router.post("/", (req, res) =>{
    const mail = new Mail(req.body);

    mail.save()
     .then((data) =>{
        res.status(301).json({ redirect: "/mails" });
     })
     .catch((err) => {console.log(err);})
});

// Get a specific mail
router.get("/:id", (req, res) =>{
    const { _id } = req.params;

    Mail.findById(_id)
     .then((data) =>{
        res.send("Page File")
     })
     .catch((err) =>{console.log(err);})
});

// Delete a mail
router.delete("/:id", (req, res) =>{
    const { _id } = req.params;

    Mail.findByIdAndDelete(_id)
     .then((data) => {
        res.status(200).json({ redirect: "/" });
     })
     .catch((err) => {console.log(err);})
});

// Get all starred mail
router.get("/starred", (req, res) =>{
    Mail.find({ starred: true })
     .then((data) =>{
        res.send("Starred")
     })
     .catch((err) => {console.log(err, "None");})
});

// Update "starred" mail to true
router.put("/:id/star", (req, res) =>{
    const { _id } = req.params;

    Mail.updateOne(_id, { $set: { starred: true } })
     .then((data) => {
        res.status(204).json({ isStarred: "starred" });
     })
     .catch((err) =>{console.log(err);})
})

// Update "starred" mail to false
router.put("/:id/unstar", (req, res) =>{
    const { _id } = req.params;

    Mail.updateOne(_id, { $set: { starred: false } })
     .then((data) => {
        res.status(204).json({ isStarred: "unstarred" });
     })
     .catch((err) =>{console.log(err);})
})

module.exports = router;