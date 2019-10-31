require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const server = express();

const port = process.env.PORT || 3000;

const friends = [
  { id: 1, name: 'Francis' },
  { id: 2, name: 'Damilola' },
  { id: 3, name: 'Amira' },
];

server.use(express.json());

server.get('/', (req, res) => {
  res.json('Deployed Express app');
});

server.get('/api/friends', (req, res) => {
  res.json(friends);
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`\nServer running on port ${port}\n`);
});
