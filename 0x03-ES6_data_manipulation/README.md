# ES6_data_manipulation

This directory contains JavaScript code examples that demonstrate various data manipulation techniques using ES6 features.

## Table of Contents

- [0-get_list_students.js]: This file contains a function that returns an array of objects with id, firstName and location.

- [1-get_list_student_ids.js]: This file contains a function that returns an array of student ids.

- [2-get_students_by_location.js]: This file contains a function that takes a location parameter and returns an array of students from that location.

- [3-update_student_location.js]: This file contains a function that updates the location of a student based on their id.

- [4-update_students_locations.js]: This file contains a function that updates the locations of multiple students based on their ids.

- [5-get_students_by_first_name.js]: This file contains a function that takes a first name parameter and returns an array of students with that first name.

- [6-update_student_first_name.js]: This file contains a function that updates the first name of a student based on their id.

- [7-increment_age.js]: This file contains a function that increments the age of all students by a specified amount.

- [8-get_students_by_age_range.js]: This file contains a function that takes a minimum and maximum age parameter and returns an array of students within that age range.

- [9-get_average_age.js]: This file contains a function that calculates the average age of all students.

- [10-update_uniq_items.js]: This file contains a function named updateUniqueItems that updates the quantity of items in a map.

- [100-weak.js]: This file exports a WeakMap instance and a function named queryAPI. The function tracks the number of times it is called for each endpoint and throws an error when the number of queries is >= 5.

# Usage

To use these functions, import them into your JavaScript file:

*import function1 from './0-get_list_students.js';*
*import function2 from './1-get_list_student_ids.js';*
// and so on...

Then, you can call these functions:
_function1();_
_function2();_
// and so on...

Running the Tests
To run the tests, use the following command:
_npm run dev <test-file>_

Replace <test-file> with the name of the test file you want to run (e.g., 0-get_list_students.js or 1-get_list_student_ids.js).

Contributing
Contributions are welcome. Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.