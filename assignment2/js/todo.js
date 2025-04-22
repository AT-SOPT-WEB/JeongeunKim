import { getTodo, setTodo } from "./utils.js";
import { renderTableHead, renderTableBody } from "./table.js";
import { MESSAGE } from "./constants.js";
import {
  initPriorityDropdownItems,
  initPrioritySelectOptions,
  toggleDropdown,
} from "./priority.js";

class Todo {
  constructor({
    todoHeader,
    todoBody,
    entireBtn,
    completeBtn,
    incompleteBtn,
    priorityBtn,
    priorityDropdown,
    searchInput,
    prioritySelect,
    addBtn,
    deleteBtn,
    completeToggleBtn,
    priority,
    headList,
  }) {
    this.todoList = getTodo();
    this.todoBody = todoBody;
    this.todoHeader = todoHeader;
    this.searchInput = searchInput;
    this.prioritySelect = prioritySelect;
    this.priorityDropdown = priorityDropdown;
    this.headList = headList;
    this.priority = priority;

    initPriorityDropdownItems(
      this.priority,
      this.priorityDropdown,
      this.todoList,
      this.render.bind(this)
    );
    initPrioritySelectOptions(this.priority, this.prioritySelect);

    entireBtn.addEventListener("click", () => this.showEntireList());
    completeBtn.addEventListener("click", () => this.showCompleteList());
    incompleteBtn.addEventListener("click", () => this.showIncompleteList());
    priorityBtn.addEventListener("click", () => this.togglePriorityDropdown());
    addBtn.addEventListener("click", () => this.addTodo());
    deleteBtn.addEventListener("click", () => this.deleteTodo());
    completeToggleBtn.addEventListener("click", () => this.toggleComplete());

    renderTableHead(this.headList, this.todoHeader);
    renderTableBody(this.todoList, this.todoBody);
  }

  /** to do 리스트 나타내기 (기본값은 local storage에 저장된 todoList) */
  render(list = this.todoList) {
    renderTableBody(list, this.todoBody);
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
    const priority = this.prioritySelect.value;

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
    this.prioritySelect.value = "";
  }

  /** to do 삭제하기 */
  deleteTodo() {
    const checked = this.todoBody.querySelectorAll(
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
    this.render();
    alert(MESSAGE.DELETED);
  }

  /** to do 완료하기 */
  toggleComplete() {
    const checked = this.todoBody.querySelectorAll(
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
