// 5-http.js
const http = require('http');
const readDatabase = require('./full_server/utils');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    readDatabase('database.csv')
      .then((students) => {
        res.write('This is the list of our students\n');
        for (const field of Object.keys(students).sort()) {
          res.write(
            `Number of students in ${field}: ${
              students[field].length
            }. List: ${students[field].join(', ')}\n`
          );
        }
      })
      .catch((err) => {
        console.log(err);
        res.write('Cannot load the database');
      })
      .finally(() => res.end());
  } else {
    res.write('Page not found');
    res.end();
  }
});

app.listen(1245);

module.exports = app;
