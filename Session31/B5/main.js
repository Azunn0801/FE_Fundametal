const employees = [
  { id: 1, name: 'John', age: 18, address: 'New York' },
  { id: 2, name: 'Mike', age: 22, address: 'Canada' },
  { id: 3, name: 'Linda', age: 19, address: 'California' },
  { id: 4, name: 'Peter', age: 25, address: 'London' },
  { id: 5, name: 'Tony', age: 17, address: 'New York' },
];

const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
const form = document.getElementById('employeeForm');

function displayEmployees() {
  table.innerHTML = ''; 

  employees.forEach(employee => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = employee.id;
    cell2.textContent = employee.name;
    cell3.textContent = employee.age;
    cell4.textContent = employee.address;
  });
}

displayEmployees();

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const address = document.getElementById('address').value;

  const newEmployee = {
    id: employees.length + 1,
    name: name,
    age: parseInt(age),
    address: address,
  };
  employees.push(newEmployee);

  displayEmployees();

  form.reset();
});