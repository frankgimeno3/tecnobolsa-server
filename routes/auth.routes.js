const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Account = require("./Accounts.model");

const router = express.Router();
router.post("/signup", async (req, res) => {
  try {
    const { email, password, name, isCompany, companyID, isProfessional, professionalID } = req.body;

    // Check if the email is already registered
    const existingAccount = await Account.findOne({ email });
    if (existingAccount) {
      return res.status(400).json({ error: "Email is already registered." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new account
    const newAccount = new Account({
      email,
      password: hashedPassword,
      name,
      isCompany,
      companyID,
      isProfessional,
      professionalID
    });

    // Save the account to the database
    await newAccount.save();

    // Return success response
    res.status(200).json({ message: "Signup successful." });
  } catch (error) {
    // Handle any errors that occurred during signup
    console.error("Error during signup:", error);
    res.status(500).json({ error: "An internal server error occurred." });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email exists in the database
    const account = await Account.findOne({ email });
    if (!account) {
      return res.status(404).json({ error: "Invalid email or password." });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, account.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Create a JWT token
    const token = jwt.sign({ accountId: account._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
});

module.exports = router;