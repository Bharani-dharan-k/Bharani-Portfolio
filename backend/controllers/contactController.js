const nodemailer = require("nodemailer");

exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact form submission:", { name, email, message });

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Use Web3Forms API instead of SMTP
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name: name,
        email: email,
        message: message,
        subject: "New Contact Message from Portfolio"
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log("Email sent successfully via Web3Forms");
      res.status(200).json({ message: "Message sent successfully!" });
    } else {
      console.error("Web3Forms error:", result);
      res.status(500).json({ message: "Failed to send message." });
    }
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ 
      message: "Failed to send email. Please try again later.",
      error: error.message 
    });
  }
};
