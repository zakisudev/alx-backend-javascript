// full_server/utils.js
const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.split('\n');
        const students = {};
        lines.forEach((line) => {
          const [id, firstname, lastname, field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        });
        resolve(students);
      })
      .catch((err) => reject(err));
  });
}

module.exports = readDatabase;
