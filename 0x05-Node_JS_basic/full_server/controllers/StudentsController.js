const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('database.csv')
      .then((students) => {
        response.status(200);
        response.write('This is the list of our students\n');
        for (const field of Object.keys(students).sort()) {
          response.write(
            `Number of students in ${field}: ${
              students[field].length
            }. List: ${students[field].join(', ')}\n`
          );
        }
        response.end();
      })
      .catch((err) => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase('database.csv')
      .then((students) => {
        if (!students[major]) {
          response.status(500).send('Major not found');
          return;
        }
        response.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch((err) => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
