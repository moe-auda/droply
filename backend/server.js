const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Enable CORS for Vercel front end
app.use(cors({
  origin: 'https://droply-frontend.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/droply', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// File schema
const fileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  size: Number,
  uploadDate: { type: Date, default: Date.now },
});
const File = mongoose.model('File', fileSchema);

// Routes
app.post('/upload', upload.single('file'), async (req, res) => {
  const file = new File({
    filename: req.file.filename,
    path: req.file.path,
    size: req.file.size,
  });
  await file.save();
  res.json({ message: 'File uploaded successfully', file });
});

app.get('/files', async (req, res) => {
  const files = await File.find();
  res.json(files);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));