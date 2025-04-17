import { getTodo, setTodo } from "./utils.js";
import { renderTableHead, renderTableBody } from "./table.js";
import {
  initPriorityDropdownItems,
  initPrioritySelectOptions,
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

    initPriorityDropdownItems(
      priority,
      this.priorityDropdown,
      this.todoList,
      this.render.bind(this)
    );
    initPrioritySelectOptions(priority, this.prioritySelect);

    entireBtn.addEventListener("click", () => this.showEntireList());
    completeBtn.addEventListener("click", () => this.showCompleteList());
    incompleteBtn.addEventListener("click", () => this.showIncompleteList());
    priorityBtn.addEventListener("click", () => this.togglePriorityDropdown());

  }

  // to do 리스트 나타내기 (기본값은 local storage에 저장된 todoList)
  render(list = this.todoList) {
    renderTableBody(list, this.todoBody);
  }

  // 전체 리스트 조회
  showEntireList() {
    this.render();
  }

  // 완료 리스트 조회
  showCompleteList() {
    const filtered = this.todoList.filter((todo) => todo.completed);
    this.render(filtered);
  }

  // 미완료 리스트 조회
  showIncompleteList() {
    const filtered = this.todoList.filter((todo) => !todo.completed);
    this.render(filtered);
  }

  // 중요도 드롭다운 보기
  togglePriorityDropdown() {
    toggleDropdown(this.priorityDropdown);
  }

}

export default Todo;
