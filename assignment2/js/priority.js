// 중요도 목록 드롭다운 초기화
export function initPriorityDropdownItems(
  priorityList,
  priorityDropdown,
  todoList,
  render
) {
  priorityDropdown.style.display = "none";

  priorityList.forEach((value) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = value;
    btn.classList.add("priority-dropdown-button");

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

// 할 일 추가 시 선택할 수 있는 중요도 목록 초기화
export function initPrioritySelectOptions(priorityList, prioritySelect) {
  priorityList.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    prioritySelect.appendChild(option);
  });
}

// 드롭다운 상태 반전
export function toggleDropdown(dropdownElement) {
  const isOpened = dropdownElement.style.display === "block";
  dropdownElement.style.display = isOpened ? "none" : "block";
}
