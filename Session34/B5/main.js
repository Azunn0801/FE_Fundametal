let employees = JSON.parse(localStorage.getItem("employees")) || [];

function renderEmployees() {
  const tbody = document.getElementById("employeeList");
  tbody.innerHTML = "";

  employees.forEach((employee, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.position}</td>
    `;
    tbody.appendChild(row);
  });
}

function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const position = document.getElementById("position").value.trim();

  if (name === "" || position === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  employees.push({ name, position });
  localStorage.setItem("employees", JSON.stringify(employees));

  document.getElementById("name").value = "";
  document.getElementById("position").value = "";
  renderEmployees();
}

renderEmployees();
