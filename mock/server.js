const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/movies', (req, res) => {
  fs.readFile(__dirname + '/movies.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load movies.' });
    res.json(JSON.parse(data));
  });
});

app.post('/recommendations_from_selection', (req, res) => {
  // For demo, always returns the same recommendations
  fs.readFile(__dirname + '/recommendations.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load recommendations.' });
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Mock backend running on http://localhost:${PORT}`);
});
