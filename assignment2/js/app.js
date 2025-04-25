import { PRIORITY, TABLE_HEAD } from "./constants.js";
import Todo from "./todo.js";

new Todo({
  todoTableHeader: document.getElementById("todo-header"),
  todoTableBody: document.getElementById("todo-body"),
  entireListBtn: document.getElementById("entire-button"),
  completeListBtn: document.getElementById("complete-button"),
  incompleteListBtn: document.getElementById("incomplete-button"),
  priorityFilterBtn: document.getElementById("priority-button"),
  priorityDropdown: document.getElementById("priority-dropdown"),
  searchInput: document.getElementById("search-bar-input"),
  prioritySelector: document.getElementById("priority-select"),
  addBtn: document.getElementById("add-todo-button"),
  deleteBtn: document.getElementById("delete-todo-button"),
  completeToggleBtn: document.getElementById("change-completed-button"),
  priority: PRIORITY,
  headList: TABLE_HEAD,
});
