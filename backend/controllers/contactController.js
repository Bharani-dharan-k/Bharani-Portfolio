const nodemailer = require("nodemailer");

exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact form submission:", { name, email, message });

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!process.env.WEB3FORMS_ACCESS_KEY) {
    console.error("WEB3FORMS_ACCESS_KEY is not set");
    return res.status(500).json({ message: "Server configuration error." });
  }

  try {
    const formData = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      name: name,
      email: email,
      message: message,
      subject: "New Contact Message from Portfolio"
    };

    console.log("Sending to Web3Forms...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData),
    });

    const contentType = response.headers.get("content-type");
    
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Non-JSON response from Web3Forms:", text);
      return res.status(500).json({ message: "Email service error. Please try again later." });
    }

    const result = await response.json();
    console.log("Web3Forms response:", result);

    if (result.success) {
      console.log("Email sent successfully via Web3Forms");
      res.status(200).json({ message: "Message sent successfully!" });
    } else {
      console.error("Web3Forms error:", result);
      res.status(500).json({ message: result.message || "Failed to send message." });
    }
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ 
      message: "Failed to send email. Please try again later.",
      error: error.message 
    });
  }
};
