const express = require("express");
const router = express.Router();
const { sendContactEmail } = require("../controllers/contactController");

// GET endpoint to verify route is working
router.get("/", (req, res) => {
  res.json({ message: "Contact API endpoint is working! Use POST to send messages." });
});

// POST endpoint to send email
router.post("/", sendContactEmail);

module.exports = router;
