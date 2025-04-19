import { PRIORITY, TABLE_HEAD } from "./constants.js";
import Todo from "./todo.js";

new Todo({
  todoHeader: document.getElementById("todo-header"),
  todoBody: document.getElementById("todo-body"),
  entireBtn: document.getElementById("entire-button"),
  completeBtn: document.getElementById("complete-button"),
  incompleteBtn: document.getElementById("incomplete-button"),
  priorityBtn: document.getElementById("priority-button"),
  priorityDropdown: document.getElementById("priority-dropdown"),
  searchInput: document.getElementById("search-bar-input"),
  prioritySelect: document.getElementById("priority-select"),
  addBtn: document.getElementById("add-todo-button"),
  deleteBtn: document.getElementById("delete-todo-button"),
  completeToggleBtn: document.getElementById("change-completed-button"),
  priority: PRIORITY,
  headList: TABLE_HEAD,
});
