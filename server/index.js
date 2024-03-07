const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');


app.use(cors());

app.get('/message', (req, res) => {
  res.send('Peekaboo!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
