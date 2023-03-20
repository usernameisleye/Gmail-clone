const express = require("express");
const router = express.Router();
const mailController = require("../controller/controllers")

// Get all mails
router.get("/", mailController.mail_get_all);

// Create a new mail
router.post("/", mailController.mail_post);

// Get all starred mail
router.get("/starred", mailController.mail_starred);

// Get a mail
router.get("/:id", mailController.mail_get);

// Delete a mail
router.delete("/:id", mailController.mail_delete);

// Update "starred" mail to true
router.put("/:id/star", mailController.mail_star)

// Update "starred" mail to false
router.put("/:id/unstar", mailController.mail_unstar)

module.exports = router;