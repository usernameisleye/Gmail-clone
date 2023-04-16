const express = require("express");
const router = express.Router();
const {
    mail_get_all,
    mail_post,
    mail_get,
    mail_delete,
    send_mail
} = require("../controller/controllers")

// Get all mails
router.get("/", mail_get_all);

// Create a new mail
router.post("/", mail_post);

// Get a mail
router.get("/:id", mail_get);

// Delete a mail
router.delete("/:id", mail_delete);

// Send a mail
router.post("/send", send_mail);

module.exports = router;