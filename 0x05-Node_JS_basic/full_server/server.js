// full_server/server.js
const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
