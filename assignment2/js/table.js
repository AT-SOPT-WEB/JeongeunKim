import { handleSelectAll, updateSelectAllCheckbox } from "./utils.js";

export function createTableRow({ id, title, completed, priority }) {
  const row = document.createElement("tr");
  row.id = id;

  const checkboxCell = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");
  checkbox.addEventListener("change", updateSelectAllCheckbox);
  checkboxCell.appendChild(checkbox);

  const priorityCell = document.createElement("td");
  priorityCell.textContent = priority;

  const completedCell = document.createElement("td");
  completedCell.textContent = completed ? "⭕️" : "❌";

  const titleCell = document.createElement("td");
  titleCell.textContent = title;

  row.append(checkboxCell, priorityCell, completedCell, titleCell);
  return row;
}

export function renderTableHead(headList, todoHeader) {
  headList.forEach((text) => {
    const th = document.createElement("th");

    if (text === "checkBox") {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "select-all-checkbox";
      checkbox.addEventListener("change", (e) => handleSelectAll(e));
      th.appendChild(checkbox);
    } else {
      th.textContent = text;
    }

    todoHeader.appendChild(th);
  });
}

export function renderTableBody(todoList, container) {
  container.innerHTML = "";

  todoList.forEach((todo) => {
    const row = createTableRow(todo);
    container.appendChild(row);
  });
}
