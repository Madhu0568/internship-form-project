const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/apply', (req, res) => {
  const { name, email, college, domain } = req.body;

  if (!name || !email || !college || !domain) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  console.log('Received application:', req.body);
  res.json({ message: 'Application submitted successfully' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
