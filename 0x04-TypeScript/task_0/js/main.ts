interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 24,
  location: 'Addis Ababa'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Addis Ababa'
};

const studentsList: [Student, Student] = [student1, student2];

let table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student: Student) => {
  let row: HTMLTableRowElement = document.createElement('tr');
  let cell1: HTMLTableCellElement = document.createElement('td');
  let cell2: HTMLTableCellElement = document.createElement('td');

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;

  row.appendChild(cell1);
  row.appendChild(cell2);

  table.appendChild(row);
});

document.body.appendChild(table);