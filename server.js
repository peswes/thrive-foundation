const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for registered users
const users = [];

// Registration endpoint
app.post('/api/register', (req, res) => {
  const { name, email, phone, dob } = req.body;

  if (!name || !email || !phone || !dob) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Check if user with the same email or phone already exists
  const userExists = users.some(user => user.email === email || user.phone === phone);

  if (userExists) {
    return res.status(409).json({ message: 'User with this email or phone already exists.' });
  }

  // Register the new user
  const newUser = { name, email, phone, dob };
  users.push(newUser);

  console.log('User Registered:', newUser);
  res.status(200).json({ message: 'Registration successful!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
