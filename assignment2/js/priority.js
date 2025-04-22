import { Priority, Todo } from "./types.js";

/**
 * 중요도 드롭다운 요소를 초기화하고 필터링 기능을 등록합니다.
 *
 * @param {Array<Priority>} priorityList - 중요도 목록
 * @param {HTMLElement} priorityDropdown - 드롭다운 요소
 * @param {Array<Todo>} todoList - todo 목록 전체 배열
 * @param {function(Array<Todo>): void} render - 필터링된 목록 렌더링을 위한 함수
 * @returns {void}
 */
export function initPriorityDropdownItems(
  priorityList,
  priorityDropdown,
  todoList,
  render
) {
  priorityList.forEach((value) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = value;
    btn.classList.add("priority-dropdown-button");
    priorityDropdown.style.display = "none";

    btn.addEventListener("click", () => {
      const filtered = todoList.filter(
        (todo) => todo.priority === Number(value)
      );
      render(filtered);
      priorityDropdown.style.display = "none";
    });

    li.appendChild(btn);
    priorityDropdown.appendChild(li);
  });
}

/**
 * 전달받은 드롭다운의 열림/닫힘을 토글합니다.
 *
 * @param {HTMLElement} dropdownElement - 토글할 드롭다운 요소
 * @returns {void}
 */
export function toggleDropdown(dropdownElement) {
  const isOpened = dropdownElement.style.display === "block";
  dropdownElement.style.display = isOpened ? "none" : "block";
}

/**
 * todo 추가 시 사용할 중요도 선택 옵션을 초기화합니다.
 *
 * @param {Array<Priority>} priorityList - 중요도 목록
 * @param {HTMLSelectElement} prioritySelect - 중요도 선택 <select> 요소
 * @returns {void}
 */
export function initPrioritySelectOptions(priorityList, prioritySelect) {
  priorityList.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    prioritySelect.appendChild(option);
  });
}
