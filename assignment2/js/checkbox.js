/**
 * 전체 선택 체크박스를 클릭하면 하위의 체크박스를 같은 상태로 만듭니다.
 *
 * @param {Event} e - 체크박스 change 이벤트 객체
 * @param {NodeListOf<HTMLInputElement>} checkboxes - todo 행 체크박스들
 * @returns {void}
 */
export function handleSelectAll(e, checkboxes) {
  const isChecked = e.target.checked;
  Array.from(checkboxes).forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
}

/**
 * 전체 선택 체크박스의 상태를 업데이트합니다.
 *
 * - 모든 체크박스가 체크되어 있으면 전체 선택 체크박스도 체크
 * - 하나라도 체크가 해제되어 있으면 전체 선택 체크박스도 해제
 *
 * @param {HTMLInputElement} allCheckbox - 전체 선택 체크박스
 * @param {NodeListOf<HTMLInputElement>} checkboxes - todo 행 체크박스들
 * @returns {void}
 */
export function updateSelectAllCheckbox(allCheckbox, checkboxes) {
  const allChecked = Array.from(checkboxes).every(
    (checkbox) => checkbox.checked
  );
  allCheckbox.checked = allChecked;
}

/**
 * 체크박스 상태를 초기화합니다.
 *
 * @param {HTMLInputElement} checkbox - 체크박스 요소
 * @returns {void}
 */
export function resetCheckbox(checkbox) {
  checkbox.checked = false;
}

/**
 * 체크박스를 생성하고 이벤트 리스너를 추가합니다.
 *
 * @param {string} id - 생성할 체크박스의 id
 * @param {Function} e - 체크박스 상태가 변경될 때 실행될 이벤트 핸들러 함수
 * @returns {HTMLInputElement} 생성된 체크박스
 */
export function createCheckbox(id, e) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;

  checkbox.addEventListener("change", e);
  return checkbox;
}
