const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const compression = require("compression");

dotenv.config();
const app = express();

// Enable gzip compression for faster response times
app.use(compression());
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Security headers
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});

const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
