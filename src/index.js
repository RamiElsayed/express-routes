const express = require('express');
// Helper function to sort our data in ascending and descending order
const routes = require('./routes');

const PORT = 3001;

const app = express();

app.use(routes);

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
