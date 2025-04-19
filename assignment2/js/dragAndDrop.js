import { getTodo, setTodo } from "./utils.js";

/**
 * 현재 테이블 순서로 업데이트하고 localStorage에 저장합니다.
 *
 * @returns {Array<number}
 */
function updateTableOrder() {
  const rows = document.querySelectorAll("tbody tr");
  const newOrder = Array.from(rows).map((row) => row.id);

  const currentTodos = getTodo();
  const reorderedTodos = newOrder.map((id) =>
    currentTodos.find((todo) => todo.id === Number(id))
  );

  return reorderedTodos;
}

let draggingItem = null;

/**
 * todo에 드래그 앤 드롭 기능을 추가합니다.
 *
 * @param {HTMLTableRowElement} row - 드래그를 등록할 테이블 행
 * @returns {void}
 */
export function addDragEvent(row) {
  row.draggable = true;

  row.addEventListener("dragstart", () => {
    draggingItem = row;
  });

  row.addEventListener("dragend", () => {
    draggingItem = null;

    const afterDragList = updateTableOrder();
    setTodo(afterDragList);
  });

  row.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggingOver = e.currentTarget;
    const tbody = draggingOver.parentNode;

    if (!draggingItem || draggingItem === draggingOver) return;

    const rect = draggingOver.getBoundingClientRect();
    const insertPrev = e.clientY < rect.top + rect.height / 2;

    if (insertPrev) {
      tbody.insertBefore(draggingItem, draggingOver);
    } else {
      tbody.insertBefore(draggingItem, draggingOver.nextSibling);
    }
  });
}
