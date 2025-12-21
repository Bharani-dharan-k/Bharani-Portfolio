const nodemailer = require("nodemailer");

exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact form submission:", { name, email, message });

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check if environment variables are set
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS || !process.env.TO_EMAIL) {
    console.error("Missing environment variables:", {
      GMAIL_USER: !!process.env.GMAIL_USER,
      GMAIL_PASS: !!process.env.GMAIL_PASS,
      TO_EMAIL: !!process.env.TO_EMAIL
    });
    return res.status(500).json({ message: "Server configuration error. Please contact the administrator." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    console.log("Attempting to send email from:", process.env.GMAIL_USER);

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: "New Contact Message from Portfolio",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message}</p>`,
    });

    console.log("Email sent successfully!");
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ 
      message: "Failed to send email. Please try again later.",
      error: error.message 
    });
  }
};
