import { getTodo, setTodo } from "./utils.js";
import { renderTableHead, renderTableBody } from "./table.js";
import { MESSAGE } from "./constants.js";
import {
  initPriorityDropdownItems,
  initPrioritySelectOptions,
  toggleDropdown,
} from "./priority.js";
import { resetCheckbox } from "./checkbox.js";

class Todo {
  constructor({
    todoTableHeader,
    todoTableBody,
    entireListBtn,
    completeListBtn,
    incompleteListBtn,
    priorityFilterBtn,
    priorityDropdown,
    searchInput,
    prioritySelector,
    addBtn,
    deleteBtn,
    completeToggleBtn,
    priority,
    headList,
  }) {
    this.todoList = getTodo();
    this.todoTableBody = todoTableBody;
    this.todoTableHeader = todoTableHeader;
    this.searchInput = searchInput;
    this.prioritySelector = prioritySelector;
    this.priorityDropdown = priorityDropdown;
    this.headList = headList;
    this.priority = priority;

    initPriorityDropdownItems(
      this.priority,
      this.priorityDropdown,
      this.todoList,
      this.render.bind(this)
    );
    initPrioritySelectOptions(this.priority, this.prioritySelector);

    entireListBtn.addEventListener("click", () => this.showEntireList());
    completeListBtn.addEventListener("click", () => this.showCompleteList());
    incompleteListBtn.addEventListener("click", () =>
      this.showIncompleteList()
    );
    priorityFilterBtn.addEventListener("click", () => this.togglePriorityDropdown());
    addBtn.addEventListener("click", () => this.addTodo());
    deleteBtn.addEventListener("click", () => this.deleteTodo());
    completeToggleBtn.addEventListener("click", () => this.toggleComplete());

    renderTableHead(this.headList, this.todoTableHeader);
    renderTableBody(this.todoList, this.todoTableBody, this.todoTableHeader);
  }

  /** to do 리스트 나타내기 (기본값은 local storage에 저장된 todoList) */
  render(list = this.todoList) {
    renderTableBody(list, this.todoTableBody);
  }

  /** 전채 투두 리스트 조회 */
  showEntireList() {
    this.render();
  }

  /** 완료된 투두 리스트 조회 */
  showCompleteList() {
    const filtered = this.todoList.filter((todo) => todo.completed);
    this.render(filtered);
  }

  /** 미완료 투두 리스트 조회 */
  showIncompleteList() {
    const filtered = this.todoList.filter((todo) => !todo.completed);
    this.render(filtered);
  }

  /** 중요도 목록 보기 */
  togglePriorityDropdown() {
    toggleDropdown(this.priorityDropdown);
  }

  /** to do 추가하기 */
  addTodo() {
    const title = this.searchInput.value;
    const priority = this.prioritySelector.value;

    if (!title.trim()) {
      alert(MESSAGE.EMPTY_TEXT);
      return;
    }

    if (!priority) {
      alert(MESSAGE.NOT_SELECT_PRIORITY);
      return;
    }

    const newTodo = {
      id: this.todoList.length + 1,
      title,
      completed: false,
      priority: Number(priority),
    };

    this.todoList.push(newTodo);
    setTodo(this.todoList);
    this.render();

    this.searchInput.value = "";
    this.prioritySelector.value = "";
  }

  /** to do 삭제하기 */
  deleteTodo() {
    const checked = this.todoTableBody.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    if (!checked.length) return alert(MESSAGE.NOT_CHECKED_LIST);

    const checkedList = Array.from(checked).map((checkbox) =>
      Number(checkbox.closest("tr").id)
    );

    this.todoList = this.todoList.filter(
      (todo) => !checkedList.includes(todo.id)
    );

    setTodo(this.todoList);

    const allCheckbox = document.getElementById("select-all-checkbox");
    resetCheckbox(allCheckbox);

    this.render();
    alert(MESSAGE.DELETED);
  }

  /** to do 완료하기 */
  toggleComplete() {
    const checked = this.todoTableBody.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    if (!checked.length) return alert(MESSAGE.NOT_CHECKED_LIST);

    const checkedList = Array.from(checked).map((checkbox) =>
      Number(checkbox.closest("tr").id)
    );

    const alreadyCompleted = this.todoList.some(
      (todo) => checkedList.includes(todo.id) && todo.completed
    );
    if (alreadyCompleted) return alert(MESSAGE.ALREADY_COMPLETED);

    this.todoList = this.todoList.map((todo) =>
      checkedList.includes(todo.id) ? { ...todo, completed: true } : todo
    );

    setTodo(this.todoList);
    this.render();
    alert(MESSAGE.COMPLETED);
  }
}

export default Todo;
