import { todos } from "./mock.js";

export function setTodo(todoList) {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

export function getTodo() {
  localStorage.setItem("todoList", JSON.stringify(todos));
  return [...todos];
}
