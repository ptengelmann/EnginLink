const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://ptengelmann:ptengelmann@cluster0.3gmfh7n.mongodb.net/EnginLink')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('DB error', err));

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
