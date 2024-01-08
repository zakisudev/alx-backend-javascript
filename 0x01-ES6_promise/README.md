# ES6 Promises

This directory contains JavaScript files demonstrating the usage of ES6 Promises.

## Table of Contents

- [0-promise.js]: This file exports a function that returns a Promise that resolves and displays a message.

- [1-promise.js]: This file exports a function that returns a Promise that resolves with a message or rejects with an error.

- [2-then.js]: This file exports a function that returns a Promise and uses the then method to handle the resolved value.

- [3-all.js]: This file exports a function that uses Promise.all to handle multiple promises.

- [4-user-promise.js]: This file exports a function that returns a Promise with a user object.

- [5-photo-reject.js]: This file exports a function that returns a Promise that rejects with an error.

- [6-final-user.js]: This file exports a function that chains promises to manipulate and return a user object.

- [7-load_balancer.js]: This file exports a function that uses Promise.race to return the result of the first settled promise.

-

# Usage

To use these functions, import them into your JavaScript file:

_import function1 from './0-promise.js';_
_import function2 from './1-promise.js';_
// and so on...

Then, you can call these functions:
_function1();_
_function2();_
// and so on...

Running the Tests
To run the tests, use the following command:
_npm run dev <test-file>_

Replace <test-file> with the name of the test file you want to run (e.g., 0-promise.js or 1-promise.js).

Contributing
Contributions are welcome. Please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
