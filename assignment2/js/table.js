import {
  createCheckbox,
  handleSelectAll,
  resetCheckbox,
  updateSelectAllCheckbox,
} from "./checkbox.js";
import { addDragEvent } from "./dragAndDrop.js";
import { Todo } from "./types.js";
import { MESSAGE } from "./constants.js";

/**
 * 테이블에 <tr> 요소를 생성합니다.
 *
 * @param {Todo} todo - todo 요소 정보
 * @returns {HTMLTableRowElement} 테이블의 행 요소
 */
export function createTableRow({ id, title, completed, priority }) {
  const row = document.createElement("tr");
  row.id = id;

  // 드래그 앤 드롭 기능 추가
  addDragEvent(row);

  // 체크 박스 추가
  const checkboxCell = document.createElement("td");
  const checkboxEvent = () =>
    updateSelectAllCheckbox(
      document.getElementById("select-all-checkbox"),
      document.querySelectorAll(".todo-checkbox")
    );
  const checkbox = createCheckbox(`todo-checkbox-${id}`, checkboxEvent);
  checkbox.classList.add("todo-checkbox");

  checkboxCell.appendChild(checkbox);

  // 중요도 등록
  const priorityCell = document.createElement("td");
  priorityCell.textContent = priority;

  // 완료 여부
  const completedCell = document.createElement("td");
  completedCell.textContent = completed ? "⭕️" : "❌";

  // 제목
  const titleCell = document.createElement("td");
  titleCell.textContent = title;

  row.append(checkboxCell, priorityCell, completedCell, titleCell);

  return row;
}

/**
 * 테이블의 헤더를 생성합니다.
 *
 * @param {Array<string>} headList - 헤더 이름 배열
 * @param {HTMLElement} todoHeader - <thead> 요소
 * @returns {void}
 */
export function renderTableHead(headList, todoHeader) {
  todoHeader.innerHTML = "";

  headList.forEach((text) => {
    const th = document.createElement("th");

    if (text === "checkBox") {
      // head 이름이 checkBox면 체크박스 생성
      const checkboxEvent = (e) =>
        handleSelectAll(e, document.querySelectorAll(".todo-checkbox"));
      const checkbox = createCheckbox("select-all-checkbox", checkboxEvent);

      th.appendChild(checkbox);
    } else {
      th.textContent = text;
    }

    todoHeader.appendChild(th);
  });
}

/**
 * todo 목록을 받아 <tbody>를 채웁니다.
 *
 * @param {Array<Object>} todoList - todo 목록 배열
 * @param {HTMLElement} container - <tbody> 요소
 * @returns {void}
 */
export function renderTableBody(todoList, container, todoHeader) {
  container.innerHTML = "";

  if (todoList.length === 0) {
    const row = document.createElement("tr");
    const empty = document.createElement("td");
    empty.colSpan = todoHeader.length;
    empty.textContent = MESSAGE.EMPTY_TODO;
    row.appendChild(empty);
    container.appendChild(row);
    return;
  }

  todoList.forEach((todo) => {
    const row = createTableRow(todo);
    container.appendChild(row);
  });

  const selectAllCheckbox = document.getElementById("select-all-checkbox");
  resetCheckbox(selectAllCheckbox);
}
