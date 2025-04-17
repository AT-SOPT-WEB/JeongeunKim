import { todos } from "./mock.js";

export function setTodo(todoList) {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

export function getTodo() {
  localStorage.setItem("todoList", JSON.stringify(todos));
  return [...todos];
}

export function handleSelectAll(e) {
  const isChecked = e.target.checked;
  const checkboxes = document.querySelectorAll(".todo-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
}

export function updateSelectAllCheckbox() {
  const selectAllCheckbox = document.getElementById("select-all-checkbox");
  const checkboxes = document.querySelectorAll(".todo-checkbox");
  const allChecked = Array.from(checkboxes).every(
    (checkbox) => checkbox.checked
  );
  selectAllCheckbox.checked = allChecked;
}
